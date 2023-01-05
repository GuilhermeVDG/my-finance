import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';
import { Container, ButtonDrawer } from './style';

export default function Header() {
 const navigation = useNavigation();
 
  return (
    <Container>
      <ButtonDrawer onPress={() => navigation.toggleDrawer()}>
        <Icon name="menu" size={30} color="#fff" />
      </ButtonDrawer>
    </Container>
  );
}