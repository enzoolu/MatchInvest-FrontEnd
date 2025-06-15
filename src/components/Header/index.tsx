import React from 'react';
import { Image, Text } from 'react-native';
import { Container, Title } from './styles';
import { HeaderProps } from './types';

export const Header = ({ subtitle }: HeaderProps) => {
  return (
    <Container>
      <Title>MatchInvest</Title>
      <Image
        source={require('../../../assets/images/income-amico.png')}
        style={{ width: 120, height: 120 }}
        resizeMode="contain"
      />
      {subtitle && <Text style={{ color: 'white', marginTop: 8 }}>{subtitle}</Text>}
    </Container>
  );
};
