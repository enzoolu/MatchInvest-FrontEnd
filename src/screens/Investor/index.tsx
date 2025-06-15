import { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import CustomSelect from "../../components/Select";
import CustomButton from "../../components/CustomButton";
import { getToken } from "../../AsyncStorage";

export default function Investor() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("");
  const [capital, setCapital] = useState("");
  const [token, setToken] = useState("");

  const handleButtonClick = () => {
    navigation.navigate("PickAssessor" as never);
  };

  useEffect(() => {
    getToken().then((res) => {
      if (res) {
        setToken(res);
      } else {
        console.error("Token not found");
      }
    });
  }, []);

  return (
    token && (
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
    )
  );
}
