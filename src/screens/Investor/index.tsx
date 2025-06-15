import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import CustomSelect from "../../components/Select";
import CustomButton from "../../components/CustomButton";

export default function Investor() {
  const [selected, setSelected] = useState(null);

  const handleButtonClick = () => {
    // Handle button click logic here
    console.log("Button clicked with selected value:", selected);
  };

  return (
    <View style={styles.backgroundView}>
      <Header />

      <View style={styles.screenContainer}>
        <Text style={styles.styledText}>
          <Text style={styles.styledTextOrange}>Capital</Text> disponível
        </Text>

        <TextInput style={styles.styledInput} placeholder="Insira um valor" />

        <CustomSelect
          items={[
            { label: "Item A", value: "a" },
            { label: "Item B", value: "b" },
          ]}
          placeholder={{ label: "Escolha algo...", value: null }}
          onValueChange={setSelected}
          value={selected}
        />

        <CustomButton title="Criar perfil" onClick={handleButtonClick} />
      </View>
    </View>
  );
}
