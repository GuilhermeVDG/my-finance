import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../../contexts/auth';

export default function Home() {
 const { user, signOut } = useContext(AuthContext);
 
  return (
   <View>
    <Text>Nome: {user.name}</Text>
    <Text>Email: {user.email}</Text>
    <Button title="Sair " onPress={() => signOut()}></Button>
   </View>
  );
}