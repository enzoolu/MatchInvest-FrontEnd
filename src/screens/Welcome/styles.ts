import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #2C2C2E;
`;

export const Header = styled.View`
  background-color: #3A3A3C;
  padding: 50px 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 40px;
  color: #FFD500;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const SubTitle = styled.Text`
  font-size: 20px;
  color: #A5ACAF;
  text-align: center;
  margin-bottom: 10px;
`;

export const SubTitle2 = styled.Text`
  font-size: 12px;
  color: #A5ACAF;
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
  background-color: #f1c40f;
  border-radius: 8px;
  align-items: center;
`;

export const ButtonRegisterText = styled.Text`
  color: #1a1a1a;
  font-size: 16px;
  font-weight: bold;
`;
