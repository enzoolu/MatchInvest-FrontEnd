import { View, Text, TextInput, Animated } from "react-native";
import { styles } from "./styles";
import CustomSelect from "../Select";
import CustomButton from "../CustomButton";
import { FormInvestorProps } from "./types";

export default function FormInvestor({
  capital,
  setCapital,
  selected,
  setSelected,
  handleButtonClick,
  showPopup,
  fadeAnim,
  buttonTitle,
}: FormInvestorProps) {
  return (
    <>
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
              { label: "Baixo", value: "LOW" },
              { label: "Médio", value: "MEDIUM" },
              { label: "Alto", value: "HIGH" },
            ]}
            onValueChange={setSelected}
            value={selected}
          />
        </View>

        <CustomButton title={buttonTitle} onClick={handleButtonClick} />
      </View>

      {showPopup && (
        <Animated.View style={[styles.popup, { opacity: fadeAnim }]}>
          <Text style={styles.popupText}>
            Preencha os campos antes de prosseguir!
          </Text>
        </Animated.View>
      )}
    </>
  );
}
