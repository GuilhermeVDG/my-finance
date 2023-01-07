import React, { useState } from 'react';
import { Container, Input, ButtonSelect, TextSelect, ButtonSubmit, ButtonText } from './styles';
import Header from '../../components/Header';
import { Feather } from '@expo/vector-icons';
import { TouchableWithoutFeedback, Keyboard, Modal } from 'react-native';
import ModalPicker from '../../components/ModalPicker';

export default function New() {
  const [value, setValue] = useState(null);
  const [modalTypeVisible, setModalTypeVisible] = useState(false);
 
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
        <TextSelect>Escolha o tipo da operação...</TextSelect>
        <Feather size={25} name="chevron-down" color="#000000"/>
      </ButtonSelect>

      <ButtonSubmit>
        <ButtonText>Registrar</ButtonText>
      </ButtonSubmit>

      <Modal transparent={true} visible={modalTypeVisible}>
        <ModalPicker/>
      </Modal>
    </Container>
   </TouchableWithoutFeedback>
  );
}