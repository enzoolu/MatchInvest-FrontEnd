import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #2c2c2e;
`;

export const Header = styled.View`
  background-color: #3a3a3c;
  padding: 50px 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  align-items: center;
  justify-content: center;
  border-bottom-width: 3px;
  border-bottom-color: #c28800;
`;

export const Title = styled.Text`
  font-size: 40px;
  color: #ffd500;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const SubTitle = styled.Text`
  font-size: 20px;
  color: #a5acaf;
  text-align: center;
  margin-bottom: 10px;
`;

export const SubTitle2 = styled.Text`
  font-size: 12px;
  color: #a5acaf;
  text-align: center;
  margin-bottom: 10px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 40px 20px;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  border: 2px solid #f1c40f;
  background-color: #3a3a3c;
  border-radius: 8px;
  align-items: center;
  margin-bottom: 15px;
`;

export const ButtonText = styled.Text`
  color: #f1c40f;
  font-size: 16px;
`;

export const ButtonRegister = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  background-color: #c28800;
  border-radius: 8px;
  align-items: center;
`;

export const ButtonRegisterText = styled.Text`
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: bold;
`;
