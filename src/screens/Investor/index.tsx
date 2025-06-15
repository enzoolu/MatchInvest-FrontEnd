import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import CustomSelect from "../../components/Select";
import CustomButton from "../../components/CustomButton";

export default function Investor() {
  const navigation = useNavigation();

  const [selected, setSelected] = useState<string | null>(null);
  const [capital, setCapital] = useState<string>("");

  const handleButtonClick = () => {
    console.log("Capital disponível:", capital);
    console.log("Perfil de risco selecionado:", selected);

    navigation.navigate("InvestorDetails" as never);
  };

  return (
    <View style={styles.backgroundView}>
      <Header />

      <View style={styles.screenContainer}>
        <View style={styles.capitalContainer}>
          <Text style={styles.styledText}>
            <Text style={styles.styledTextOrange}>Capital</Text> disponível
          </Text>

          <TextInput
            style={styles.styledInput}
            placeholder="Insira um valor"
            placeholderTextColor="#A5ACAF"
            keyboardType="numeric"
            value={capital}
            onChangeText={setCapital}
          />
        </View>

        <View style={styles.capitalContainer}>
          <Text style={styles.styledText}>
            <Text style={styles.styledTextOrange}>Perfil</Text> de risco
          </Text>

          <CustomSelect
            label="Perfil de Risco"
            items={[
              { label: "Baixo", value: "baixo" },
              { label: "Médio", value: "medio" },
              { label: "Alto", value: "alto" },
            ]}
            onValueChange={setSelected}
            value={selected}
          />
        </View>

        <CustomButton title="Criar perfil" onClick={handleButtonClick} />
      </View>
    </View>
  );
}
