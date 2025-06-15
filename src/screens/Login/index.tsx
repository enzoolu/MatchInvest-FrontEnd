import { LoginForm } from "./components/loginForm";
import { Header } from "../../components/Header";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Login() {
  const router = useRouter();

  return (
    <View style={styles.backgroundView}>
      <Header subtitle="Faça login na sua conta" />
      <LoginForm />

      <Text style={styles.styledText}>
        Novo por aqui ?{" "}
        <Text style={styles.linkText} onPress={() => router.push("/(tabs)")}>
          Registre-se já !
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundView: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2C2C2E",
    height: "100%",
    fontFamily: "DidactGothic",
  },
  styledText: {
    color: "white",
    paddingBottom: 25,
    fontFamily: "DidactGothic",
  },
  linkText: { color: "orange" },
});
