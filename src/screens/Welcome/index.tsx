import React from 'react';
import {
  Container,
  Header,
  Title,
  SubTitle,
  Button,
  ButtonText,
  ButtonRegister,
  ButtonRegisterText,
  Content,
} from './styles';

export default function Welcome({ navigation }: any) {
  return (
    <Container>
      <Header>
        <SubTitle>seja bem vindo ao</SubTitle>
        <Title>MatchInvest</Title>
        <SubTitle>Registre-se para começar sua jornada de investimentos!</SubTitle>
      </Header>

      <Content>
        <Button onPress={() => navigation.navigate('Login')}>
          <ButtonText>LogIn</ButtonText>
        </Button>

        <ButtonRegister onPress={() => navigation.navigate('Register')}>
          <ButtonRegisterText>Registrar</ButtonRegisterText>
        </ButtonRegister>
      </Content>
    </Container>
  );
}
