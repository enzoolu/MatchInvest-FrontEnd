import { useEffect, useRef, useState } from "react";
import { Text, TextInput, View, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import CustomSelect from "../../components/Select";
import CustomButton from "../../components/CustomButton";
import { getToken, saveUserId, saveUserType } from "../../AsyncStorage";
import axios from "axios";

export default function Investor() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("");
  const [capital, setCapital] = useState("");
  const [token, setToken] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const postProfile = async () => {
    await axios
      .post(
        "http://localhost:8080/api/v1/investors",
        {
          capitalAvailable: capital,
          riskAppetite: selected,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        saveUserId(response.data.id);
        saveUserType("investors");
      });
  };

  const handleButtonClick = () => {
    if (!capital || !selected) {
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
        navigation.navigate("PickAssessor" as never);
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
                { label: "Baixo", value: "LOW" },
                { label: "Médio", value: "MEDIUM" },
                { label: "Alto", value: "HIGH" },
              ]}
              onValueChange={setSelected}
              value={selected}
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
      </View>
    )
  );
}
