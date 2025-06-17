import { View, Text, TextInput, Animated } from "react-native";
import { styles } from "./styles";
import CustomSelect from "../Select";
import CustomButton from "../CustomButton";
import { FormAssessorProps } from "./types";

export default function FormAssessor({
  certification,
  setCertification,
  specialty,
  setSpecialty,
  hourValue,
  setHourValue,
  bio,
  setBio,
  handleButtonClick,
  showPopup,
  fadeAnim,
  buttonTitle,
}: FormAssessorProps) {
  return (
    <>
      <View style={styles.screenContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.styledText}>
            <Text style={styles.styledTextOrange}>Certificações</Text>
          </Text>
          <CustomSelect
            label="Certificações"
            items={[
              { label: "CPA-10", value: "cpa10" },
              { label: "CPA-20", value: "cpa20" },
              { label: "CEA", value: "cea" },
              { label: "CFP", value: "cfp" },
            ]}
            onValueChange={setCertification}
            value={certification}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.styledText}>
            <Text style={styles.styledTextOrange}>Especialidades</Text>
          </Text>
          <CustomSelect
            label="Especialidades"
            items={[
              { label: "Renda Fixa", value: "renda_fixa" },
              { label: "Ações", value: "acoes" },
              { label: "Fundos Imobiliários", value: "fiis" },
            ]}
            onValueChange={setSpecialty}
            value={specialty}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.styledText}>
            <Text style={styles.styledTextOrange}>Valor</Text> por hora
          </Text>
          <TextInput
            style={styles.styledInput}
            placeholder="Ex: 150"
            placeholderTextColor="#A5ACAF"
            keyboardType="numeric"
            value={hourValue}
            onChangeText={setHourValue}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.styledTextOrange}>Biografia</Text>
          <TextInput
            style={[styles.styledInput, { height: 100 }]}
            placeholder="Fale um pouco sobre você"
            placeholderTextColor="#A5ACAF"
            multiline
            value={bio}
            onChangeText={setBio}
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
