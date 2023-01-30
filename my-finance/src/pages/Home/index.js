import React, { useContext, useState, useEffect } from 'react';
import Header from '../../components/Header';
import ListHistory from '../../components/ListHistory';
import { api } from '../../services/api';
import { format } from 'date-fns';
import { AuthContext } from '../../contexts/auth';

import { Background, Container, Name, Amount, Title, List } from './styles';


export default function Home({ route }) {
  const [history, setHistory] = useState([]);
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    amount: 0
  });  


  useEffect(() => {
    const loadHistory = async () => {
      const listHist = await api.get('/history/list');
      setHistory(listHist.data.body);
    }

    const loadUser = async () => {
      const findUser = await api.get('/user/detail');
      setUser(findUser.data.body);
    }
    loadHistory();
    loadUser();
  }, [route.params]);

  return (
    <Background>
      <Header/>
      <Container>
        <Name>{user.name}</Name>
        <Amount>R$ {user.amount ? user.amount.toFixed(2) : ''}</Amount>
      </Container>

      <Title>Ultimas operações</Title>

      <List
        showsVerticalScrollIndicator={false}
        data={history}
        keyExtractor={ item => item.id }
        renderItem={({ item }) => ( <ListHistory  data={item}/> )}
      />
    </Background>
  );
}