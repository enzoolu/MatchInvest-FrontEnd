import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #2c2c2e;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const FormArea = styled.View`
  padding: 0 20px;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  color: #a5acaf;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 20px;
`;

export const Input = styled.TextInput`
  width: 100%;
  background-color: #3a3a3c;
  border: 1px solid #c28800;
  border-radius: 10px;
  padding: 14px;
  margin-bottom: 15px;
  color: white;
`;

export const LinkArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const TextNormal = styled.Text`
  color: white;
`;

export const TextLink = styled.Text`
  color: orange;
`;
