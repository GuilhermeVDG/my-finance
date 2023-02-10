import React from 'react';
import { Container, Content, TitleText, ButtonClose, ButtonCloseText } from './styles';
import { format } from 'date-fns';

export default function ModalDetail ({ handleCloseModal, data }) {
  return(
    <Container>
      <Content>
        <TitleText>Valor: R${data.value.toFixed(2)}</TitleText>
        <TitleText>Tipo: {data.type === 'receive' ? 'Receita' : 'Despesa'}</TitleText>
        {data.comment && (
          <TitleText>Comentário: {data.comment}</TitleText>
          )}
        <TitleText>Data: {(data.createdAt)}</TitleText>
        <TitleText></TitleText>
        <ButtonClose onPress={ () => handleCloseModal() }>
          <ButtonCloseText>Fechar</ButtonCloseText>
        </ButtonClose>
      </Content>
    </Container>
  );
}