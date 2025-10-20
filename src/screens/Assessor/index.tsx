import { useEffect, useRef, useState } from "react";
import { ScrollView, Animated } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { getToken, saveUserId, saveUserType } from "../../AsyncStorage";
import FormAssessor from "../../components/FormAssessor";
import React from "react";

export default function Assessor() {
  const navigation = useNavigation();

  const [certification, setCertification] = useState<string | null>(null);
  const [specialty, setSpecialty] = useState<string | null>(null);
  const [hourValue, setHourValue] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  // const [token, setToken] = useState("");

  const [showPopup, setShowPopup] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // const postProfile = async () => {
  //   await axios
  //     .post(
  //       "http://localhost:8080/api/v1/advisors",
  //       {
  //         certifications: [certification],
  //         specialties: [specialty],
  //         bio,
  //         hourlyRate: hourValue,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       saveUserId(response.data.id);
  //       saveUserType("advisors");
  //     });
  // };

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

    navigation.navigate("PickInvestor" as never);

    // try {
    //   postProfile().then(() => {
    //     navigation.navigate("PickInvestor" as never);
    //   });
    // } catch (error) {
    //   console.error("Erro ao criar perfil:", error);
    // }
  };

  // useEffect(() => {
  //   getToken().then((res) => {
  //     if (res) {
  //       setToken(res);
  //     } else {
  //       console.error("Token not found");
  //     }
  //   });
  // }, []);

  return (
    <ScrollView style={styles.backgroundView}>
      <Header />
      <FormAssessor
        certification={certification}
        setCertification={setCertification}
        specialty={specialty}
        setSpecialty={setSpecialty}
        hourValue={hourValue}
        setHourValue={setHourValue}
        bio={bio}
        setBio={setBio}
        handleButtonClick={handleButtonClick}
        showPopup={showPopup}
        fadeAnim={fadeAnim}
        buttonTitle="Criar perfil"
      />
    </ScrollView>
  );
}
