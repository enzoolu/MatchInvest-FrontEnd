import { Text, View } from "react-native";
import { styles } from "./styles";
import { Card } from "../../components/Card";

export default function PickAssessor() {
  return (
    <View style={styles.backgroundView}>
      <Text style={styles.styledTitle}>MatchInvest</Text>

      <Text style={styles.styledSubtitle}>
        Escolha um assessor que se encaixe melhor com seus ideais!
      </Text>

      <Card name="Lucas" description="Delicia" />
    </View>
  );
}
