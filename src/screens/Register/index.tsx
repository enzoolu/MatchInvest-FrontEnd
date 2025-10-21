import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import {
  Container,
  Content,
  FormArea,
  Input,
  LinkArea,
  SubTitle,
  TextLink,
  TextNormal,
} from "./styles";
import { Header } from "../../components/Header";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { saveUserLogin } from "../../AsyncStorage";

export default function Register() {
  const navigation = useNavigation();

  const endpointBase = "http://localhost:8080/api/v1";

  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    if (!name || !user || !email || !password || !confirmPassword) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem");
      return;
    }

    await axios
      .post(`${endpointBase}/auth/register`, {
        username: user,
        password: password,
        confirmPassword: confirmPassword,
        fullName: name,
        email: email,
      })
      .then((res) => {
        console.log({ res });
        if (res.status === 201) {
          Alert.alert("Sucesso", "Registrado com sucesso!");
          navigation.navigate("Login" as never);
        }
      });
  };

  return (
    <Container>
      <Header />
      <Content>
        <SubTitle>Que bom te ver por aqui!</SubTitle>
        <FormArea>
          <Input
            placeholder="Nome"
            value={name}
            onChangeText={setName}
            placeholderTextColor="#A5ACAF"
          />
          <Input
            placeholder="Usuário"
            value={user}
            onChangeText={setUser}
            placeholderTextColor="#A5ACAF"
          />
          <Input
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholderTextColor="#A5ACAF"
          />
          <Input
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#A5ACAF"
          />
          <Input
            placeholder="Confirmar senha"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            placeholderTextColor="#A5ACAF"
          />

          <CustomButton title="Registrar-se" onClick={handleRegister} />

          <LinkArea>
            <TextNormal>Já tem uma conta? </TextNormal>
            <TextLink onPress={() => navigation.navigate("Login" as never)}>
              Clique aqui
            </TextLink>
            <TextNormal> para fazer login</TextNormal>
          </LinkArea>
        </FormArea>
      </Content>
    </Container>
  );
}
