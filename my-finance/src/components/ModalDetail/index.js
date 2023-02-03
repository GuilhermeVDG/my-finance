import React from 'react';
import { Container, Content, TitleText, ButtonClose, ButtonCloseText } from './styles';

export default function ModalDetail ({ handleCloseModal }) {
  return(
    <Container>
      <Content>
        <TitleText>DETAIL</TitleText>
        <ButtonClose onPress={ () => handleCloseModal() }>
          <ButtonCloseText>Fechar</ButtonCloseText>
        </ButtonClose>
      </Content>
    </Container>
  );
}