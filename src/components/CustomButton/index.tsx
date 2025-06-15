import React from 'react';
import { ButtonContainer, ButtonText } from './styles';
import { CustomButtonProps } from './types';

const CustomButton = ({ title, onClick }: CustomButtonProps) => {
  return (
    <ButtonContainer onPress={onClick}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
};

export default CustomButton;
