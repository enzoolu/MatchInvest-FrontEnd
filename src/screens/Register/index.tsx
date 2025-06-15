import React, { useState } from 'react';
import { Alert } from 'react-native';
import {
  Container,
  Content,
  FormArea,
  Input,
  LinkArea,
  SubTitle,
  TextLink,
  TextNormal,
} from './styles';
import { Header } from '../../components/Header';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

export default function Register() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (!name || !user || !email || !password || !confirmPassword) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem');
      return;
    }

    Alert.alert('Sucesso', 'Registrado com sucesso!');
    navigation.navigate('Welcome' as never);
  };

  return (
    <Container>
      <Header />
      <Content>
        <SubTitle>Que bom te ver por aqui!</SubTitle>
        <FormArea>
          <Input placeholder="Nome" value={name} onChangeText={setName} placeholderTextColor="#A5ACAF" />
          <Input placeholder="Usuário" value={user} onChangeText={setUser} placeholderTextColor="#A5ACAF" />
          <Input placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" placeholderTextColor="#A5ACAF" />
          <Input placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry placeholderTextColor="#A5ACAF" />
          <Input placeholder="Confirmar senha" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry placeholderTextColor="#A5ACAF" />

          <CustomButton title="Registrar-se" onClick={handleRegister} />

          <LinkArea>
            <TextNormal>Já tem uma conta? </TextNormal>
            <TextLink onPress={() => navigation.navigate('Login' as never)}>Clique aqui</TextLink>
            <TextNormal> para fazer login</TextNormal>
          </LinkArea>
        </FormArea>
      </Content>
    </Container>
  );
}
