import React, { useState, useContext } from 'react';
import { Container, Input, ButtonSelect, TextSelect, ButtonSubmit, ButtonText } from './styles';
import Header from '../../components/Header';
import { Feather } from '@expo/vector-icons';
import { TouchableWithoutFeedback, Keyboard, Modal, Alert } from 'react-native';
import ModalPicker from '../../components/ModalPicker';
import firebase from '../../services/firebaseConnection';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

export default function New() {
  const navigation = useNavigation();
  
  const [value, setValue] = useState('');
  const [modalTypeVisible, setModalTypeVisible] = useState(false);
  const [typeSelected, setTypeSelected] = useState('Receita');

  const { user: contextUser } = useContext(AuthContext);

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
    const uid = contextUser.uid;

    const key = await firebase.database().ref('history').child(uid).push().key;

    const user = await firebase.database().ref('users').child(uid);
    await user.once('value')
      .then( async snapshot => {
        let amount = parseFloat(snapshot.val().amount);

        if(typeSelected === 'receive') amount += parseFloat(value);

        if(typeSelected === 'expense' && amount < value) {
          Alert.alert(
            'Alerta!',
            'Seu saldo é menor que o valor desejado.',
            [
              {
                text: 'Ok',
                style: 'default'
              }
            ]
          );
          return;
        }

        if(typeSelected === 'expense') amount -= parseFloat(value);

        await firebase.database().ref('history').child(uid).child(key).set({
          type: typeSelected,
          value: parseFloat(value),
          date: format(new Date(), 'dd/MM/yy')
        });

        user.child('amount').set(amount);

        setValue('');
        Keyboard.dismiss();
        navigation.navigate('Home');
      });
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