import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../../components/Header";
import { styles } from "./styles";
import { Button, ButtonText } from "../Welcome/styles";

export default function AccountType() {
  const navigation = useNavigation();

  const handleSelect = (profile: 'INVESTIDOR' | 'ASSESSOR') => {
    if (profile === 'INVESTIDOR') {
      navigation.navigate('Investor' as never);
    } else if (profile === 'ASSESSOR') {
      navigation.navigate('Assessor' as never);
    }
  };

  return (
    <View style={styles.backgroundView}>
      <Header />
      <View style={styles.screenContainer}>
        <Text style={styles.styledText}>
          Escolha seu <Text style={styles.styledTextOrange}>perfil!</Text>
        </Text>
        <Button onPress={() => handleSelect('INVESTIDOR')}>
          <ButtonText>Investidor</ButtonText>
        </Button>
        <Button onPress={() => handleSelect('ASSESSOR')}>
          <ButtonText>Assessor</ButtonText>
        </Button>
      </View>
    </View>
  );
}
