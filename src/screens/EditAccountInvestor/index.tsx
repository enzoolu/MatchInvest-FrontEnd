import { useEffect, useRef, useState } from "react";
import { Animated, ScrollView, Text, View } from "react-native";
import { AccountHeader } from "../../components/AccountHeader";
import FormInvestor from "../../components/FormInvestor";
import { getToken } from "../../AsyncStorage";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

export default function EditAccountInvestor() {
  const navigation = useNavigation();

  const [capital, setCapital] = useState("");
  const [selected, setSelected] = useState("");
  const [token, setToken] = useState("");

  const [showPopup, setShowPopup] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handleSave = async () => {
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
      await axios.put(
        "http://localhost:8080/api/v1/investors/2",
        {
          capitalAvailable: capital,
          riskAppetite: selected,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigation.goBack();
    } catch (error) {
      console.error("Erro ao salvar perfil:", error);
    }
  };

  useEffect(() => {
    getToken().then((res) => {
      if (res) {
        setToken(res);
      } else {
        console.error("Token não encontrado");
      }
    });
  }, []);

  return (
    <View style={styles.backgroundView}>
        <AccountHeader
            name="Heitor Dib"
            description="Edite suas informacoes"
            hasTitle={false}
        />

        <FormInvestor
            capital={capital}
            setCapital={setCapital}
            selected={selected}
            setSelected={setSelected}
            handleButtonClick={handleSave}
            showPopup={showPopup}
            fadeAnim={fadeAnim}
            buttonTitle="Salvar"
        />
    </View>
  );
}
