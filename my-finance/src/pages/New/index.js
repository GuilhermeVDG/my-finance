import React, { useState, useContext } from 'react';
import { Container, Input, ButtonSelect, TextSelect, ButtonSubmit, ButtonText } from './styles';
import Header from '../../components/Header';
import { Feather } from '@expo/vector-icons';
import { TouchableWithoutFeedback, Keyboard, Modal, Alert } from 'react-native';
import ModalPicker from '../../components/ModalPicker';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';
import { api } from '../../services/api';

export default function New() {
  const navigation = useNavigation();
  
  const [value, setValue] = useState('');
  const [modalTypeVisible, setModalTypeVisible] = useState(false);
  const [typeSelected, setTypeSelected] = useState('receive');
  const [comment, setComment] = useState('');

  const { user } = useContext(AuthContext);

  const handleTypeSelected = (option) => {
    setTypeSelected(option);
  }

  const handleRegister = () => {
    Keyboard.dismiss();
    
    if(isNaN(parseFloat(value))) {
      Alert.alert(
        'Alerta!',
        'Insira um valor válido.',
        [
          {
            text: 'Ok',
            style: 'default'
          }
        ]
      );
      return;
    }

    Alert.alert(
      `Certeza que deseja cadastrar ${typeSelected === 'expense' ? 'despesa' : 'receita' }?`,
      `Valor: ${parseFloat(value)}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Confirmar',
          onPress: () => handleAddRegister()
        }
      ]
    );
  }

  const handleAddRegister = async () => {
    if(typeSelected === 'expense' && user.user.amount < parseFloat(value)) {
      Alert.alert(
        'Seu saldo é menor que o valor desejado.',
        `Seu saldo: ${user.user.amount}`,
        [
          {
            text: 'Ok',
            style: 'default'
          }
        ]
      );
      return;
    }
    try {
      const response = await api.post('/history/store', {
        type: typeSelected,
        value,
        comment
      });

      const { id, type, value: respValue, createdAt } = response.data.body;
      
      const data = {
        id,
        type,
        value: respValue,
        createdAt
      }

      setValue('');
      Keyboard.dismiss();
      navigation.navigate('Home', data);
    } catch (error) {
      console.log(error);
      Alert.alert(
        'Alerta!',
        'Não foi possivel registrar sua movimentação.',
        [
          {
            text: 'Ok',
            style: 'default'
          }
        ]
      );
    }
  }
 
  return (
   <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
    <Container>
      <Header/>
      <Input
        placeholder="Insira o valor desejado..."
        keyboardType="numeric"
        autoCorrect={false}
        autoCapitalize="none"
        value={value}
        onChangeText={ value => setValue(value) }
        returnKeyType="next"
      />
      <ButtonSelect onPress={ () => setModalTypeVisible(true) }>
        <TextSelect>{typeSelected ===  'expense' ? 'Despesa' : 'Receita'}</TextSelect>
        <Feather size={25} name="chevron-down" color="#000000"/>
      </ButtonSelect>

      <Input
        placeholder="Insira o comentario (Opcional)"
        keyboardType="text"
        autoCorrect={false}
        autoCapitalize="none"
        value={comment}
        onChangeText={ value => setComment(value) }
        returnKeyType="next"
      />

      <ButtonSubmit type={typeSelected} onPress={handleRegister}>
        <ButtonText>Registrar</ButtonText>
      </ButtonSubmit>

      <Modal transparent={true} visible={modalTypeVisible} animationType="fade">
        <ModalPicker
          handleCloseModal={ () => setModalTypeVisible(false) }
          typeSelected={handleTypeSelected}
        />
      </Modal>
    </Container>
   </TouchableWithoutFeedback>
  );
}