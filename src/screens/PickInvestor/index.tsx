import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import { getToken } from "../../AsyncStorage";
import { styles } from "./styles";
import { Card } from "../../components/Card";
import { Feather, AntDesign } from "@expo/vector-icons";
import { investorMock } from "./mock";
import React from "react";

export default function PickInvestor() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [investors, setInvestors] = useState<any[]>([investorMock]);

  const endpoint = "http://localhost:8080/api/v1/investors";

  const traduzirRisco = (risk: string) => {
    if (!risk) return "não informado";
    const traduz = {
      LOW: "baixo",
      MEDIUM: "médio",
      HIGH: "alto",
    };
    return traduz[risk as keyof typeof traduz] ?? risk.toLowerCase();
  };

  useEffect(() => {
    const fetchInvestors = async () => {
      const token = await getToken();

      if (!token) {
        Alert.alert("Erro", "Token não encontrado");
        return;
      }

      try {
        const response = await axios.get(endpoint, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setInvestors(response.data);
      } catch (error) {
        console.error("Erro ao buscar investidores:", error);
        Alert.alert(
          "Erro",
          "Não foi possível carregar os investidores. Verifique o backend."
        );
      }
    };

    fetchInvestors();
  }, []);

  return (
    <View style={styles.backgroundView}>
      <View style={styles.contentWrapper}>
        <Text style={styles.styledTitle}>MatchInvest</Text>
        <Text style={styles.styledSubtitle}>
          Escolha um investidor que se encaixe melhor com seus ideais!
        </Text>

        {investors.map((investor) => (
          <Card
            key={investor.id}
            name={investor.name}
            description={`Capital: R$ ${
              investor.capitalAvailable
            }  Risco: ${traduzirRisco(investor.riskAppetite)}`}
            onClick={() => navigation.navigate("AssessorDetails", { investor })}
          />
        ))}
      </View>

      <View style={styles.footerContainer}>
        <Feather
          name="home"
          size={36}
          color="orange"
          onPress={() => console.log("Voce ja esta na home")}
        />

        <AntDesign
          name="user"
          size={26}
          color="orange"
          onPress={() => navigation.navigate("Profile" as never)}
        />
      </View>
    </View>
  );
}
