import { View, Text, TextInput, Animated } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import CustomButton from "../../components/CustomButton";
import { styles } from "./styles";
import { useState, useRef } from "react";

export default function InvestorDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const { assessor }: any = route.params; // Aqui recebe o assessor da tela anterior

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
        navigation.navigate("PickAssessor" as never);
      });
    }, 1000);
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
            <Text style={styles.name}>{assessor.fullName}</Text>
          </View>
        </View>

        <View style={styles.BioContainer}>
          <Text style={styles.sectionTitle}>Biografia</Text>
          <Text style={styles.bio}>{assessor.bio}</Text>
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
        <CustomButton title="Enviar" onClick={handleSendMessage} />
      </View>

      {showPopup && (
        <Animated.View style={[styles.popup, { opacity: fadeAnim }]}>
          <Text style={styles.popupText}>Mensagem enviada!</Text>
        </Animated.View>
      )}
    </View>
  );
}
