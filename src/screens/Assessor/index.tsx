import { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { useNavigation } from '@react-navigation/native';
import CustomSelect from "../../components/Select";
import CustomButton from "../../components/CustomButton";

export default function Assessor() {
  const navigation = useNavigation();

  const [certification, setCertification] = useState<string | null>(null);
  const [specialty, setSpecialty] = useState<string | null>(null);
  const [hourValue, setHourValue] = useState<string>("");
  const [bio, setBio] = useState<string>("");

  const handleButtonClick = () => {
    navigation.navigate("PickInvestor" as never);

    console.log("Certificação:", certification);
    console.log("Especialidade:", specialty);
    console.log("Valor por hora:", hourValue);
    console.log("Biografia:", bio);
  };

  return (
    <ScrollView style={styles.backgroundView}>
      <Header />

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

        <CustomButton title="Criar perfil" onClick={handleButtonClick} />
      </View>
    </ScrollView>
  );
}
