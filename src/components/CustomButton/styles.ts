import styled from "styled-components/native";
import { CustomButtonTextStyleProps, CustomButtonStyleProps } from "./types";

export const ButtonContainer = styled.TouchableOpacity<CustomButtonStyleProps>`
  width: ${({ width }) => width || "70%"};
  height: ${({ height }) => height || "auto"};
  padding: 15px;
  border-radius: 30px;
  background-color: ${({ color }) => color || "#c28800"};
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: 10px;
`;

export const ButtonText = styled.Text<CustomButtonTextStyleProps>`
  color: white;
  font-size: ${({ fontSize }) => fontSize || "16px"};
  font-weight: bold;
`;
