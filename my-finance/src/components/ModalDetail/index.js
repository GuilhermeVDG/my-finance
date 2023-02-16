import React from 'react';
import { Container, Content, TitleText, ButtonClose, ButtonCloseText, ButtonDelete, ButtonDeleteText } from './styles';
import moment from 'moment';

export default function ModalDetail ({ handleCloseModal, data }) {
  return(
    <Container>
      <Content>
        {data.value && (
          <TitleText>Valor: R${data.value.toFixed(2)}</TitleText>
        )}
        <TitleText>Tipo: {data.type === 'receive' ? 'Receita' : 'Despesa'}</TitleText>
        {data.comment && (
          <TitleText>Comentário: {data.comment}</TitleText>
          )}
        {data.createdAt && (
          <TitleText>Data: {moment(data.createdAt).format('DD/MM/YYYY')}</TitleText>
        )}
        <TitleText></TitleText>
        <ButtonClose onPress={ () => handleCloseModal() }>
          <ButtonCloseText>Fechar</ButtonCloseText>
        </ButtonClose>

        <ButtonDelete onPress={ () => handleDelete(data.id) }>
          <ButtonDeleteText>Deletar Operação</ButtonDeleteText>
        </ButtonDelete>
      </Content>
    </Container>
  );
}