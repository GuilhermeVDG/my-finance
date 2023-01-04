import React, { useState } from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Background, Container, AreaInput, Logo, Input, SubmitButton, SubmitText, Link, LinkText } from '../SignIn/styles';

export default function SignUp() {
  const navigation = useNavigation();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ name, setName ] = useState('');

  const sendForm = () => {
    alert(`${name} ${email} ${password}`);
  };
 
  return (
  <Background>
  <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled >
    <Logo source={require('../../assets/logo.png')}/>

    <AreaInput>
      <Input
        placeholder="Nome..."
        autoCorrect={false}
        autoCapitalize="none"
        value={name}
        onChangeText={ name => setName(name) }
      />
    </AreaInput>
    
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

    <Link onPress={ () => navigation.navigate('SignIn') } >
      <LinkText>Já possui uma conta? Entre aqui!</LinkText>
    </Link>

  </Container>
 </Background>
  );
}