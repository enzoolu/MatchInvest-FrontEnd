import React, { useState, useCallback, useEffect } from "react";
import { Alert } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import {
  Container,
  FormArea,
  SubTitle,
  Input,
  LinkArea,
  TextLink,
  TextNormal,
} from "./styles";
import CustomButton from "../../components/CustomButton";
import { Header } from "../../components/Header";
import axios from "axios";
import { getUserLogin, saveToken } from "../../AsyncStorage";

interface IAuth {
  userLogin: string | null;
  userPassword: string | null;
}

export default function Login() {
  const navigation = useNavigation();

  const endpointBase = "http://localhost:8080/api/v1";

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  useFocusEffect(
    useCallback(() => {
      setUser("");
      setPassword("");
    }, [])
  );

  const loginAccount = async (user: string, password: string) => {
    try {
      await axios
        .post(`${endpointBase}/auth/login`, {
          username: user,
          password: password,
          rememberMe: true,
        })
        .then((res) => {
          return setToken(res.data.token);
        });
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      Alert.alert("Erro", "Usuário ou senha inválidos");
    }
  };

  const handleLogin = () => {
    if (!user || !password) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    loginAccount(user, password);
  };

  useEffect(() => {
    if (token) {
      saveToken(token);

      navigation.navigate({
        name: "FaceValidation",
        params: { token },
      } as never);
    }
  }, [token]);

  return (
    <Container>
      <Header />

      <SubTitle>Que bom te ver de novo por aqui!</SubTitle>

      <FormArea>
        <Input
          placeholder="Usuario"
          placeholderTextColor="#A5ACAF"
          value={user}
          onChangeText={setUser}
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
          <TextLink onPress={() => navigation.navigate("Register" as never)}>
            Cadastre-se
          </TextLink>
        </LinkArea>
      </FormArea>
    </Container>
  );
}
