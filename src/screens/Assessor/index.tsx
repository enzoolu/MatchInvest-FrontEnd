import { useEffect, useRef, useState } from "react";
import { Animated, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import CustomSelect from "../../components/Select";
import CustomButton from "../../components/CustomButton";
import axios from "axios";
import { getToken, saveUserId, saveUserType } from "../../AsyncStorage";

export default function Assessor() {
  const navigation = useNavigation();

  const [certification, setCertification] = useState<string | null>(null);
  const [specialty, setSpecialty] = useState<string | null>(null);
  const [hourValue, setHourValue] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [token, setToken] = useState("");

  const [showPopup, setShowPopup] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const postProfile = async () => {
    await axios
      .post(
        "http://localhost:8080/api/v1/advisors",
        {
          certifications: [certification],
          specialties: [specialty],
          bio,
          hourlyRate: hourValue,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        saveUserId(response.data.id);
        saveUserType("advisors");
      });
  };

  const handleButtonClick = () => {
    if (!certification || !specialty || !hourValue || !bio) {
      setShowPopup(true);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();

      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start(() => {
          setShowPopup(false);
        });
      }, 1000);

      return;
    }

    try {
      postProfile().then(() => {
        navigation.navigate("PickInvestor" as never);
      });
    } catch (error) {
      console.error("Erro ao criar perfil:", error);
    }
  };

  useEffect(() => {
    getToken().then((res) => {
      if (res) {
        setToken(res);
        console.log(token);
      } else {
        console.error("Token not found");
      }
    });
  }, []);

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

      {showPopup && (
        <Animated.View style={[styles.popup, { opacity: fadeAnim }]}>
          <Text style={styles.popupText}>
            Preencha os campos antes de prosseguir!
          </Text>
        </Animated.View>
      )}
    </ScrollView>
  );
}
