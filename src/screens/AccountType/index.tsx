import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../../components/Header";
import { styles } from "./styles";
import { Button, ButtonText } from "../Welcome/styles";

export default function AccountType() {
  const navigation = useNavigation();

  return (
    <View style={styles.backgroundView}>
      <Header />
      <View style={styles.screenContainer}>
        <Text style={styles.styledText}>
          Escolha seu <Text style={styles.styledTextOrange}>perfil!</Text>
        </Text>
        <Button onPress={() => navigation.navigate("Investor" as never)}>
          <ButtonText>Investidor</ButtonText>
        </Button>
        <Button>
          <ButtonText>Assessor</ButtonText>
        </Button>
      </View>
    </View>
  );
}
