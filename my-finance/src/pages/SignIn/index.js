import React, { useState } from 'react';
import { Platform } from 'react-native';
import { Background, Container, AreaInput, Logo, Input, SubmitButton, SubmitText, Link, LinkText } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
  const navigation = useNavigation();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sendForm = () => {
    alert(`${email}  ${password}`);
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
        />
      </AreaInput>
      <SubmitButton onPress={sendForm}>
        <SubmitText>Entrar</SubmitText>
      </SubmitButton>

      <Link onPress={ () => navigation.navigate('SignUp') } >
        <LinkText>Não possui uma conta? Cadastre-se aqui!</LinkText>
      </Link>

    </Container>
   </Background>
  );
}