import React from 'react';
import { View, Text } from 'react-native';
import { Background, Container, AreaInput, Logo, Input, SubmitButton, SubmitText, Link, LinkText } from './styles';

export default function SignIn() {
 return (
   <Background>
    <Container>
      <Logo source={require('../../assets/logo.png')}/>

      <AreaInput>
        <Input
          placeholder="Email..."
          autoCorrect={false}
          autoCapitalize="none"
        />
      </AreaInput>
      <AreaInput>
        <Input
          placeholder="Senha..."
          autoCorrect={false}
          autoCapitalize="none"
        />
      </AreaInput>
      <SubmitButton>
        <SubmitText>Entrar</SubmitText>
      </SubmitButton>

      <Link>
        <LinkText>Não possui uma conta? Cadastre-se aqui!</LinkText>
      </Link>

    </Container>
   </Background>
  );
}