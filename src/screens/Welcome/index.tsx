import { useNavigation } from '@react-navigation/native';
import { Container, Title, SubTitle, ButtonsArea } from './styles';
import CustomButton from '../../components/CustomButton';

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <Container>
      <SubTitle>Bem-vindo ao</SubTitle>
      <Title>MatchInvest</Title>

      <ButtonsArea>
        <CustomButton
          title="Login"
          onClick={() => navigation.navigate('Login' as never)}
        />
        <CustomButton
          title="Registrar"
          onClick={() => navigation.navigate('Register' as never)}
        />
      </ButtonsArea>
    </Container>
  );
}
