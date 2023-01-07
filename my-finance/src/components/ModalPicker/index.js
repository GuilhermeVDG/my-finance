import React from 'react';
import { ScrollView } from 'react-native';
import { Container, Content, Option, OptionText } from './styles';

export default function ModalPicker() {
 return (
   <Container>
    <Content>
      <ScrollView>
        <Option>
          <OptionText>Despesa</OptionText>
        </Option>

        <Option>
          <OptionText>Receita</OptionText>
        </Option>
      </ScrollView>
    </Content>
   </Container>
  );
}