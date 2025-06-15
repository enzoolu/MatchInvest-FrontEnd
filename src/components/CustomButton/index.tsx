import React from "react";
import { ButtonContainer, ButtonText } from "./styles";
import { CustomButtonProps } from "./types";

const CustomButton = ({
  title,
  onClick,
  height,
  width,
  fontSize,
}: CustomButtonProps) => {
  return (
    <ButtonContainer height={height} width={width} onPress={onClick}>
      <ButtonText fontSize={fontSize}>{title}</ButtonText>
    </ButtonContainer>
  );
};

export default CustomButton;
