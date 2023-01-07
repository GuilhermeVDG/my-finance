import React from 'react';
import { ScrollView } from 'react-native';
import { Container, Content, Option, OptionText } from './styles';

export default function ModalPicker({ handleCloseModal, typeSelected }) {
 const onPressOption = (option) => {
  typeSelected(option);
  handleCloseModal();
 }
 
  return (
   <Container onPress={handleCloseModal}>
    <Content>
      <ScrollView>
        <Option onPress={ () => onPressOption('receive') } >
          <OptionText>Receita</OptionText>
        </Option>
        
        <Option onPress={ () => onPressOption('expense') }>
          <OptionText>Despesa</OptionText>
        </Option>

      </ScrollView>
    </Content>
   </Container>
  );
}