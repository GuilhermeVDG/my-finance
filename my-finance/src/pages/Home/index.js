import React, { useState, useEffect } from 'react';
import { Modal } from 'react-native';
import Header from '../../components/Header';
import ListHistory from '../../components/ListHistory';
import { api } from '../../services/api';
import ModalDetail from '../../components/ModalDetail';
import { format } from 'date-fns';


import { Background, Container, Name, Amount, Title, List } from './styles';


export default function Home({ route }) {
  const [history, setHistory] = useState([]);
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    amount: 0
  }); 
  const [modalDetailVisible, setModalDetailVisible] = useState(false);


  useEffect(() => {
    const loadHistory = async () => {
      try {
        const listHist = await api.get('/history/list');
        setHistory(listHist.data.body);
      } catch (error) {
        console.log(error);
      }
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
        renderItem={({ item }) => ( <ListHistory  data={item} setVisible={() => setModalDetailVisible(true)}/> )}
      />
      <Modal transparent={true} visible={modalDetailVisible} animationType="fade">
        <ModalDetail handleCloseModal={() => setModalDetailVisible(false)}/>
      </Modal>
    </Background>
  );
}