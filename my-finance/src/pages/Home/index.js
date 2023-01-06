import { DrawerItem } from '@react-navigation/drawer';
import React, { useContext, useState } from 'react';
import Header from '../../components/Header';
import ListHistory from '../../components/ListHistory';
import { AuthContext } from '../../contexts/auth';

import { Background, Container, Name, Amount, Title, List } from './styles';


export default function Home() {
 const { user } = useContext(AuthContext);

 const [history, setHistory] = useState([
  {key: '1', type: 'receive', value: 1200},
  {key: '2', type: 'expense', value: 200},
  {key: '3', type: 'receive', value: 300},
  {key: '4', type: 'expense', value: 800}
 ]);
 
  return (
    <Background>
      <Header/>
      <Container>
        <Name>{user.name}</Name>
        <Amount>R$ 400,00</Amount>
      </Container>

      <Title>Ultimas operações</Title>

      <List
        showsVerticalScrollIndicator={false}
        data={history}
        keyExtractor={ item => item.key }
        renderItem={({ item }) => ( <ListHistory  data={item}/> )}
      />
    </Background>
  );
}