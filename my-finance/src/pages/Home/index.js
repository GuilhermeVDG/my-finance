import React, { useContext } from 'react';
import Header from '../../components/Header';
import { AuthContext } from '../../contexts/auth';

import { Background, Container, Name, Amount, Title } from './styles';


export default function Home() {
 const { user } = useContext(AuthContext);
 
  return (
    <Background>
      <Header/>
      <Container>
        <Name>{user.name}</Name>
        <Amount>R$ 132,00</Amount>
      </Container>

      <Title>Ultimas operações</Title>
    </Background>
  );
}