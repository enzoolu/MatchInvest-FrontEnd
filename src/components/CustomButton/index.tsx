import React from "react";
import { ButtonContainer, ButtonText } from "./styles";
import { CustomButtonProps } from "./types";

const CustomButton = ({
  title,
  onClick,
  height,
  width,
  fontSize,
  color,
}: CustomButtonProps) => {
  return (
    <ButtonContainer
      height={height}
      width={width}
      onPress={onClick}
      color={color}
    >
      <ButtonText fontSize={fontSize}>{title}</ButtonText>
    </ButtonContainer>
  );
};

export default CustomButton;
