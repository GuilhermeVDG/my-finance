import React, { useState, useContext } from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Background, Container, AreaInput, Logo, Input, SubmitButton, SubmitText, Link, LinkText } from '../SignIn/styles';
import { AuthContext } from '../../contexts/auth';

export default function SignUp() {
  const navigation = useNavigation();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ name, setName ] = useState('');

  const { signUp } = useContext(AuthContext);

  const sendForm = () => {
    signUp(name, email, password)
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
        secureTextEntry={true}
      />
    </AreaInput>
    <SubmitButton onPress={sendForm}>
      <SubmitText>Cadastrar</SubmitText>
    </SubmitButton>

    <Link onPress={ () => navigation.navigate('SignIn') } >
      <LinkText>Já possui uma conta? Entre aqui!</LinkText>
    </Link>

  </Container>
 </Background>
  );
}