import { View, Text, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { AccountHeader } from "../../components/AccountHeader";
import { ProfileCard } from "../../components/ProfileCard";
import { use, useEffect, useRef, useState } from "react";
import CustomButton from "../../components/CustomButton";
import {
  getToken,
  getUserId,
  getUserType,
  saveToken,
  saveUserId,
  saveUserType,
} from "../../AsyncStorage";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import axios from "axios";

export default function Profile() {
  const navigation = useNavigation();
  const [confirmDeletePopup, setConfirmDeletePopup] = useState(false);
  const [userId, setUserId] = useState("");
  const [userType, setUserType] = useState("");
  const [token, setToken] = useState("");

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handleDeleteButtonClick = () => {
    setConfirmDeletePopup(true);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();

    return;
  };

  const confirmDeleteAccount = (confirm: boolean) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setConfirmDeletePopup(false);
    });

    if (confirm) {
      axios.delete(`http://localhost:8080/api/v1/${userType}/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return navigation.navigate("Login" as never);
    }
  };

  const handleExit = () => {
    saveToken("");
    saveUserId("");
    saveUserType("");

    navigation.navigate("Login" as never);
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
    <View style={styles.backgroundView}>
      <AccountHeader name="Perfil" hasTitle />

      <View style={styles.screenContainer}>
        <ProfileCard
          iconName="square-edit-outline"
          title="Editar conta"
          description="Edite a sua descrição, interesses e detalhes da conta"
          onPress={() => navigation.navigate(`EditAccount${userType}` as never)}
        />
        <ProfileCard
          iconName="trash-can-outline"
          title="Deletar conta"
          description="Delete a sua conta e todos os seus dados"
          onPress={handleDeleteButtonClick}
        />
        <ProfileCard
          iconName="exit-to-app"
          title="Sair da conta"
          description="Saia da sua conta e volte para a tela de login"
          onPress={handleExit}
        />
      </View>

      {confirmDeletePopup && (
        <Animated.View style={[styles.popup, { opacity: fadeAnim }]}>
          <Text style={styles.popupText}>
            Tem certeza que deseja deletar a conta?
          </Text>

          <View style={styles.popupButtons}>
            <CustomButton
              title="Sim!"
              color="red"
              height="45px"
              width="75px"
              onClick={() => confirmDeleteAccount(true)}
            />

            <CustomButton
              title="Nao!"
              color="red"
              height="45px"
              width="75px"
              onClick={() => confirmDeleteAccount(false)}
            />
          </View>
        </Animated.View>
      )}
    </View>
  );
}
