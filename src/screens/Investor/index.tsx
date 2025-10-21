import { useEffect, useRef, useState } from "react";
import { View, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { getToken, saveUserId, saveUserType } from "../../AsyncStorage";
import axios from "axios";
import FormInvestor from "../../components/FormInvestor";
import React from "react";

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
      } else {
        console.error("Token not found");
      }
    });
  }, []);

  return (
    <View style={styles.backgroundView}>
      <Header />

      <FormInvestor
        capital={capital}
        setCapital={setCapital}
        selected={selected}
        setSelected={setSelected}
        handleButtonClick={handleButtonClick}
        showPopup={showPopup}
        fadeAnim={fadeAnim}
        buttonTitle="Criar perfil"
      />
    </View>
  );
}
