import { Text, View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../../components/Header";
import { styles } from "./styles";
import { Button, ButtonText } from "../Welcome/styles";
import axios from "axios";
import { getToken } from "../../AsyncStorage";

export default function AccountType() {
  const navigation = useNavigation();

  const handleSelect = async (profile: 'INVESTOR' | 'ADVISOR') => {
    try {
      const token = await getToken();

      if (!token) {
        Alert.alert("Erro", "Token não encontrado");
        return;
      }

      await axios.post(
        "http://localhost:8080/api/v1/auth/choose-role",
        { role: profile },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Role selecionado com sucesso:", profile);

      if (profile === 'INVESTOR') {
        navigation.navigate('Investor' as never);
      } else {
        navigation.navigate('Assessor' as never);
      }
    } catch (error) {
      console.error("Erro ao escolher o perfil:", error);
      Alert.alert("Erro", "Não foi possível definir o perfil.");
    }
  };

  return (
    <View style={styles.backgroundView}>
      <Header />
      <View style={styles.screenContainer}>
        <Text style={styles.styledText}>
          Escolha seu <Text style={styles.styledTextOrange}>perfil!</Text>
        </Text>
        <Button onPress={() => handleSelect('INVESTOR')}>
          <ButtonText>Investidor</ButtonText>
        </Button>
        <Button onPress={() => handleSelect('ADVISOR')}>
          <ButtonText>Assessor</ButtonText>
        </Button>
      </View>
    </View>
  );
}
