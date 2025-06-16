import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getToken } from "../../AsyncStorage";
import { styles } from "./styles";
import { Card } from "../../components/Card";

export default function PickInvestor() {
  const navigation = useNavigation();
  const [investors, setInvestors] = useState<any[]>([]);

  const endpointBase = "http://localhost:8080/api/v1/investors";

  useEffect(() => {
    const fetchInvestors = async () => {
      const token = await getToken();

      if (!token) {
        Alert.alert("Erro", "Token não encontrado");
        return;
      }

      try {
        const response = await axios.get(endpointBase, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setInvestors(response.data);
      } catch (error) {
        console.error("Erro ao buscar investidores:", error);
        Alert.alert(
          "Erro",
          "Não foi possível carregar os investidores. Verifique se realizou o chooseRole e se o backend está funcionando corretamente."
        );
      }
    };

    fetchInvestors();
  }, []);

  return (
    <View style={styles.backgroundView}>
      <Text style={styles.styledTitle}>MatchInvest</Text>
      <Text style={styles.styledSubtitle}>
        Escolha um investidor que se encaixe melhor com seus ideais!
      </Text>

      {investors.map((investor, index) => (
        <Card
          key={index}
          name={investor.name}
          description={investor.description}
          onClick={() => navigation.navigate("AssessorDetails" as never)}
        />
      ))}
    </View>
  );
}
