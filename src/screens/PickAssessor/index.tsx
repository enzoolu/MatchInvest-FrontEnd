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
import { acessorMock } from "./mock";
import React from "react";

export default function PickAssessor() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [assessors, setAssessors] = useState<any[]>([acessorMock]);

  const endpoint = "http://localhost:8080/api/v1/advisors?page=0&size=5";

  useEffect(() => {
    const fetchAssessors = async () => {
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

        setAssessors(response.data.content);
      } catch (error) {
        console.error("Erro ao buscar assessores:", error);
        Alert.alert("Erro", "Não foi possível carregar os assessores.");
      }
    };

    fetchAssessors();
  }, []);

  return (
    <View style={styles.backgroundView}>
      <View style={styles.contentWrapper}>
        <Text style={styles.styledTitle}>MatchInvest</Text>

        <Text style={styles.styledSubtitle}>
          Escolha um assessor que se encaixe melhor com seus ideais!
        </Text>

        {assessors.map((assessor) => (
          <Card
            key={assessor.id}
            name={assessor.fullName}
            description={assessor.bio}
            onClick={() => navigation.navigate("InvestorDetails", { assessor })}
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
