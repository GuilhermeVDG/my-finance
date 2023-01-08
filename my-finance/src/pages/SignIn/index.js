import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import { Background, Container, AreaInput, Logo, Input, SubmitButton, SubmitText, Link, LinkText } from './styles';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

export default function SignIn() {
  const navigation = useNavigation();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, authLoading } = useContext(AuthContext);

  const sendForm = () => {
    signIn(email, password);
  };
 
  return (
   <Background>
    <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled >
      <Logo source={require('../../assets/logo.png')}/>

      <AreaInput>
        <Input
          placeholder="Email..."
          autoCorrect={false}
          autoCapitalize="none"
          value={email}
          onChangeText={ email => setEmail(email) }
        />
      </AreaInput>
      <AreaInput>
        <Input
          placeholder="Senha..."
          autoCorrect={false}
          autoCapitalize="none"
          value={password}
          onChangeText={ password => setPassword(password) }
          secureTextEntry={true}
        />
      </AreaInput>
      <SubmitButton onPress={sendForm}>
        { authLoading ? <ActivityIndicator size={20} color="#000000" /> : <SubmitText>Entrar</SubmitText> }
      </SubmitButton>

      <Link onPress={ () => navigation.navigate('SignUp') } >
        <LinkText>Não possui uma conta? Cadastre-se aqui!</LinkText>
      </Link>

    </Container>
   </Background>
  );
}