import React from 'react';
import { Container, Content, TitleText } from './styles';

export default function ModalDetail ({ handleCloseModal }) {
  return(
    <Container onPress={ () => handleCloseModal }>
      <Content>
        <TitleText>DETAIL</TitleText>
      </Content>
    </Container>
  );
}