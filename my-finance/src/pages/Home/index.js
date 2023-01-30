import React, { useContext, useState, useEffect } from 'react';
import Header from '../../components/Header';
import ListHistory from '../../components/ListHistory';
import { api } from '../../services/api';
import { format } from 'date-fns';
import { AuthContext } from '../../contexts/auth';

import { Background, Container, Name, Amount, Title, List } from './styles';


export default function Home() {
  const [history, setHistory] = useState([]);
  const [amount, setAmount] = useState(0);
  const { user } = useContext(AuthContext);


  useEffect(() => {
    const loadHistory = async () => {
      const listHist = await api.get('/history/list');
      setHistory(listHist.data.body);
    }
    loadHistory();
  }, []);

  return (
    <Background>
      <Header/>
      <Container>
        <Name>{user.user.name}</Name>
        <Amount>R$ {user.user.amount ? user.user.amount.toFixed(2) : ''}</Amount>
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