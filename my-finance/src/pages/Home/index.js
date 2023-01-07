import React, { useContext, useState, useEffect } from 'react';
import Header from '../../components/Header';
import ListHistory from '../../components/ListHistory';
import { AuthContext } from '../../contexts/auth';
import firebase from '../../services/firebaseConnection';
import { format } from 'date-fns';

import { Background, Container, Name, Amount, Title, List } from './styles';


export default function Home() {
  const { user } = useContext(AuthContext);

  const [history, setHistory] = useState([]);
  const [amount, setAmount] = useState(0);

  const uid = user.uid;

  useEffect(() => {
    const loadList = async () => {
      await firebase.database().ref('users').child(uid).on('value', snapshot => {
        setAmount(snapshot.val().amount);
      });

      await firebase.database().ref('history')
        .child(uid)
        .orderByChild('date')
        .equalTo(format(new Date, 'dd/MM/yy'))
        .limitToLast(10)
        .on('value', snapshot => {
          setHistory([]);
          snapshot.forEach(child => {
            const list = {
              key: child.key,
              type: child.val().type,
              value: child.val().value
            }
            setHistory(oldArr => [...oldArr.reverse(), list].reverse());
          });
        })
    }

    loadList();
  }, []);
 
  return (
    <Background>
      <Header/>
      <Container>
        <Name>{user.name}</Name>
        <Amount>R$ {amount.toFixed(2)}</Amount>
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