import React, { useContext } from 'react';
import { Container, Name, Email, New, NewText, Logout, LogoutText } from './styles';
import { AuthContext } from '../../contexts/auth';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';

export default function Profile() {
  const { user, signOut } = useContext(AuthContext);
  const navigation = useNavigation();

  const handleNew = () => {
    navigation.navigate('Novo');
  }
 
  return (
   <Container>
    <Header/>
    <Name>
      {user.name}
    </Name>
    <Email>
      {user.email}
    </Email>
    <New onPress={handleNew}>
      <NewText>Registrar gastos</NewText>
    </New>

    <Logout onPress={() => signOut()}>
      <LogoutText>Sair</LogoutText>
    </Logout>
   </Container>
  );
}