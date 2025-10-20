import { View, Text, TextInput, Animated } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import CustomButton from "../../components/CustomButton";
import { styles } from "./styles";
import { Feather, AntDesign } from "@expo/vector-icons";
import { useState, useRef } from "react";
import React from "react";

export default function AssessorDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const { investor }: any = route.params;

  const [showPopup, setShowPopup] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handleSendMessage = () => {
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
        navigation.navigate("PickInvestor" as never);
      });
    }, 1000);
  };

  const traduzirRisco = (risk: string) => {
    if (!risk) return "não informado";
    const traduz = {
      LOW: "baixo",
      MEDIUM: "médio",
      HIGH: "alto",
    };
    return traduz[risk as keyof typeof traduz] ?? risk.toLowerCase();
  };

  return (
    <View style={styles.backgroundView}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>MatchInvest</Text>
      </View>

      <View style={styles.screenContainer}>
        <View style={styles.profileContainer}>
          <View style={styles.avatar} />
          <View>
            <Text style={styles.name}>{investor.name}</Text>
          </View>
        </View>

        <View style={styles.CapitalContainer}>
          <Text style={styles.sectionTitle}>Capital Disponível</Text>
          <Text style={styles.bio}>
            {investor.capitalAvailable
              ? `R$ ${investor.capitalAvailable}`
              : "Não informado"}
          </Text>
        </View>

        <View style={styles.RiscoContainer}>
          <Text style={styles.sectionTitle}>Risco</Text>
          <Text style={styles.bio}>{traduzirRisco(investor.riskAppetite)}</Text>
        </View>

        <View style={styles.msgContainer}>
          <Text style={styles.sectionTitle}>Enviar Mensagem</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua mensagem"
            placeholderTextColor="#A5ACAF"
            multiline
          />
        </View>
      </View>

      <View style={styles.footerContainer}>
        <Feather name="home" size={26} color="orange" />
        <CustomButton title="Enviar" onClick={handleSendMessage} />
        <AntDesign name="user" size={26} color="orange" />
      </View>

      {showPopup && (
        <Animated.View style={[styles.popup, { opacity: fadeAnim }]}>
          <Text style={styles.popupText}>Mensagem enviada!</Text>
        </Animated.View>
      )}
    </View>
  );
}
