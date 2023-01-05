import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { Container, Type, IconView, TypeText, ValueText } from './styles';

export default function ListHistory({ data }) {
 return (
   <Container>
    <Type>
      <IconView type={data.type}>
        <Icon name={data.type === 'receive' ? 'arrow-up' : 'arrow-down'} color="#fff" size={20}/>
        <TypeText>{data.type === 'receive'? 'Receita' : 'Despesa'}</TypeText>
      </IconView> 
    </Type>
    <ValueText>
      R$ {data.value},00
    </ValueText>
   </Container>
  );
}