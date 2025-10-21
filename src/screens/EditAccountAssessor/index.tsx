import { useEffect, useRef, useState } from "react";
import { Animated, ScrollView } from "react-native";
import { AccountHeader } from "../../components/AccountHeader";
import FormAssessor from "../../components/FormAssessor";
import { getToken, getUserId, getUserType } from "../../AsyncStorage";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import React from "react";

export default function EditAccountAssessor() {
  const navigation = useNavigation();

  const [certification, setCertification] = useState<string | null>(null);
  const [specialty, setSpecialty] = useState<string | null>(null);
  const [hourValue, setHourValue] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [userType, setUserType] = useState("");

  const [showPopup, setShowPopup] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handleSave = async () => {
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
      await axios.put(
        `http://localhost:8080/api/v1/${userType}/${userId}`,
        {
          certifications: [certification],
          specialties: [specialty],
          bio: bio,
          hourlyRate: hourValue,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigation.navigate("Profile" as never);
    } catch (error) {
      console.error("Erro ao salvar perfil:", error);
    }
  };

  useEffect(() => {
    getUserId().then((id) => {
      setUserId(id || "");
    });

    getUserType().then((type) => {
      setUserType(type || "");
    });

    getToken().then((token) => {
      setToken(token || "");
    });
  }, []);

  return (
    <ScrollView
      style={styles.backgroundView}
      contentContainerStyle={{ paddingBottom: 80 }}
    >
      <AccountHeader
        name="Heitor Dib"
        description="Edite suas informações"
        hasTitle={false}
        goBack="Profile"
      />

      <FormAssessor
        certification={certification}
        setCertification={setCertification}
        specialty={specialty}
        setSpecialty={setSpecialty}
        hourValue={hourValue}
        setHourValue={setHourValue}
        bio={bio}
        setBio={setBio}
        handleButtonClick={handleSave}
        showPopup={showPopup}
        fadeAnim={fadeAnim}
        buttonTitle="Salvar"
      />
    </ScrollView>
  );
}
