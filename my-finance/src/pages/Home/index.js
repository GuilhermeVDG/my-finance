import React, { useContext, useState, useEffect } from 'react';
import Header from '../../components/Header';
import ListHistory from '../../components/ListHistory';
import { api } from '../../services/api';
import { format } from 'date-fns';

import { Background, Container, Name, Amount, Title, List } from './styles';


export default function Home() {
  const [user, setUser] = useState({});
  const [history, setHistory] = useState([
    {key: '1', type: 'receive', value: 1200},
    {key: '2', type: 'expense', value: 200},
    {key: '3', type: 'receive', value: 300},
    {key: '4', type: 'expense', value: 800}
   ]);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const loadUser = async () => {
      const findUser = await api.get('/user/detail');
      setUser(findUser.data.body);
    }

    loadUser();
  }, []);
  return (
    <Background>
      <Header/>
      <Container>
        <Name>{user.name}</Name>
        <Amount>R$ {user.amount}.00</Amount>
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