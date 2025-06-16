import { Text, View } from "react-native";
import { styles } from "./styles";
import { Card } from "../../components/Card";
import { useNavigation } from "@react-navigation/native";

export default function PickInvestor() {
  const navigation = useNavigation();

  const assessors = [
    { name: "Heitor Dib investidor", description: "Fundo de ações" },
    {
      name: "Lucas Pereira",
      description: "Assessor especialista em renda fixa",
    },
    { name: "Marina Costa", description: "Consultora de investimentos ESG" },
    {
      name: "Bruno Martins",
      description: "Especialista em previdência privada",
    },
    { name: "Ana Luiza", description: "Planejamento financeiro familiar" },
    { name: "Carlos Mendes", description: "Investimentos internacionais" },
    { name: "Fernanda Rocha", description: "Fundos imobiliários e FIAGRO" },
  ];

  return (
    <View style={styles.backgroundView}>
      <Text style={styles.styledTitle}>MatchInvest</Text>

      <Text style={styles.styledSubtitle}>
        Escolha um assessor que se encaixe melhor com seus ideais!
      </Text>

      {assessors.map((assessor, index) => (
        <Card
          key={index}
          name={assessor.name}
          description={assessor.description}
          onClick={() => navigation.navigate("AssessorDetails" as never)}
        />
      ))}
    </View>
  );
}
