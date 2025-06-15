import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../../components/Header";
import { styles } from "./styles";
import { Button, ButtonText } from "../Welcome/styles";

export default function AccountType() {
  const navigation = useNavigation();

  return (
    <View style={styles.backgroundView}>
      <Header subtitle="Selecione o tipo de conta" />
      <View style={styles.screenContainer}>
        <Text style={styles.styledText}>
          Escolha entre uma conta de Investidor ou Trader.
        </Text>
        <Button>
          <ButtonText>Investidor</ButtonText>
        </Button>
        <Button>
          <ButtonText>Trader</ButtonText>
        </Button>
      </View>
    </View>
  );
}
