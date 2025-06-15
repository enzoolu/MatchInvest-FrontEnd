import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #2C2C2E;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const FormArea = styled.View`
  padding: 0 20px;
`;

export const SubTitle = styled.Text`
  font-size: 20px;
  color: #A5ACAF;
  text-align: center;
  margin-bottom: 50px;
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
  margin-top: 20px;
`;

export const TextNormal = styled.Text`
  color: white;
`;

export const TextLink = styled.Text`
  color: orange;
`;
