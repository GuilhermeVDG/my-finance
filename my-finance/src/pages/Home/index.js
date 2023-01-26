import React, { useContext, useState, useEffect } from 'react';
import Header from '../../components/Header';
import ListHistory from '../../components/ListHistory';
import { api } from '../../services/api';
import { format } from 'date-fns';

import { Background, Container, Name, Amount, Title, List } from './styles';


export default function Home() {
  const [user, setUser] = useState({});
  const [history, setHistory] = useState([]);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const loadUser = async () => {
      const findUser = await api.get('/user/detail');
      setUser(findUser.data.body);
    }

    const loadHistory = async () => {
      const listHist = await api.get('/history/list');
      setHistory(listHist.data.body);
    }

    loadUser();
    loadHistory();
  }, []);
  return (
    <Background>
      <Header/>
      <Container>
        <Name>{user.name}</Name>
        <Amount>R$ {user.amount.toFixed(2)}</Amount>
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