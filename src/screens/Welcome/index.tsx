import React, { useEffect, useState } from "react";
import {
  Container,
  Header,
  Title,
  SubTitle,
  SubTitle2,
  Button,
  ButtonText,
  ButtonRegister,
  ButtonRegisterText,
  Content,
} from "./styles";

export default function Welcome({ navigation }: any) {
  return (
    <Container>
      <Header>
        <SubTitle>Seja bem-vindo ao</SubTitle>
        <Title>MatchInvest</Title>
        <SubTitle2>
          Registre-se para começar sua jornada de investimentos!
        </SubTitle2>
      </Header>

      <Content>
        <Button onPress={() => navigation.navigate("Login")}>
          <ButtonText>LogIn</ButtonText>
        </Button>

        <ButtonRegister onPress={() => navigation.navigate("Register")}>
          <ButtonRegisterText>Registrar</ButtonRegisterText>
        </ButtonRegister>
      </Content>
    </Container>
  );
}
