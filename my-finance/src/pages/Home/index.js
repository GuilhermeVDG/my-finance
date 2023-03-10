import React, { useState, useEffect, useContext } from 'react';
import { Modal } from 'react-native';
import Header from '../../components/Header';
import ListHistory from '../../components/ListHistory';
import { api } from '../../services/api';
import ModalDetail from '../../components/ModalDetail';
import { AuthContext } from '../../contexts/auth';


import { Background, Container, Name, Amount, Title, List, TextList, ContainerList } from './styles';


export default function Home({ route }) {
  const [history, setHistory] = useState([]);
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    amount: 0
  }); 
  const [modalDetailVisible, setModalDetailVisible] = useState(false);
  const [registerDetail, setRegisterDetail] = useState(false);
  const { signOut } = useContext(AuthContext);
  const [hasNewData, setHasNewData] = useState(false);
  const [hasNoHist, setHasNoHist] = useState(false);


  useEffect(() => {
    const loadHistory = async () => {
      try {
        const listHist = await api.get('/history/list');
        setHistory(listHist.data.body);
      } catch (error) {
        console.log(error);
        setHasNoHist(true);
      }
    }
    const loadUser = async () => {
      try {
        const findUser = await api.get('/user/detail');
        setUser(findUser.data.body);
      } catch (error) {
        signOut();
        console.log(error);
      }
    }
    loadHistory();
    loadUser();
  }, [route.params, hasNewData]);

  const handleSetModalVisible = async (id) => {
    try {
      const response = await api.get(`/history/detail/${id}`);
      setRegisterDetail(response.data.body);
      setModalDetailVisible(true);
    } catch (error) {
      console.log(error);
    }
  }

  const handleDeleteRegister = async id => {
    try {
      await api.delete(`/history/delete/${id}`);
      hasNewData ? setHasNewData(false) : setHasNewData(true);
      setModalDetailVisible(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Background>
      <Header/>
      <Container>
        <Name>{user.name}</Name>
        <Amount>R$ {user.amount ? user.amount.toFixed(2) : '0.00'}</Amount>
      </Container>

      <Title>Ultimas opera????es</Title>

      {hasNoHist ? <ContainerList><TextList>Nenhum registro foi encontrado</TextList></ContainerList> : 
      <List
        showsVerticalScrollIndicator={false}
        data={history}
        keyExtractor={ item => item.id }
        renderItem={({ item }) => ( <ListHistory  data={item} setVisible={handleSetModalVisible}/> )}
      />}
      
      <Modal transparent={true} visible={modalDetailVisible} animationType="fade">
        <ModalDetail handleCloseModal={() => setModalDetailVisible(false)} data={registerDetail} handleDelete={handleDeleteRegister} />
      </Modal>
    </Background>
  );
}