import React, { useState, useCallback } from 'react';
import { Alert } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import {
  Container,
  FormArea,
  SubTitle,
  Input,
  LinkArea,
  TextLink,
  TextNormal,
} from './styles';
import CustomButton from '../../components/CustomButton';
import { Header } from '../../components/Header';

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useFocusEffect(
    useCallback(() => {
      setEmail('');
      setPassword('');
    }, [])
  );

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    Alert.alert('Sucesso', 'Login realizado com sucesso!');
    navigation.navigate('Welcome' as never);
  };

  return (
    <Container>
      <Header />

      <SubTitle>Que bom te ver de novo por aqui!</SubTitle>

      <FormArea>
        <Input
          placeholder="Email"
          placeholderTextColor="#A5ACAF"
          value={email}
          onChangeText={setEmail}
          autoCorrect={false}
          autoCapitalize="none"
          autoComplete="off"
          importantForAutofill="no"
        />
        <Input
          placeholder="Senha"
          placeholderTextColor="#A5ACAF"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCorrect={false}
          autoCapitalize="none"
          autoComplete="off"
          importantForAutofill="no"
        />

        <CustomButton title="Entrar" onClick={handleLogin} />

        <LinkArea>
          <TextNormal>Não tem uma conta? </TextNormal>
          <TextLink onPress={() => navigation.navigate('Register' as never)}>
            Cadastre-se
          </TextLink>
        </LinkArea>
      </FormArea>
    </Container>
  );
}
