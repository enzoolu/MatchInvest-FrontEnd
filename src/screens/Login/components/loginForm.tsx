import React, { useState } from "react";
import { Alert, TextInput, View } from "react-native";
import CustomButton from "../../../components/CustomButton";
import { styles } from "./styles";

export const LoginForm = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!user || !password) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    // Aqui você poderia enviar os dados para uma API ou salvar localmente
  };

  return (
    <View style={styles.formBody}>
      <TextInput
        placeholder="Usuario"
        value={user}
        onChangeText={setUser}
        keyboardType="email-address"
        style={styles.formInput}
        placeholderTextColor="#A5ACAF"
      />

      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.formInput}
        placeholderTextColor="#A5ACAF"
      />

      <CustomButton title="Fazer login" onClick={handleLogin} />
    </View>
  );
};
