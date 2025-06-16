import { View, Text, TextInput, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/CustomButton";
import { styles } from './styles';
import { Feather, AntDesign } from "@expo/vector-icons";
import { useState, useRef } from "react";

export default function InvestorDetails() {
  const navigation = useNavigation();
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
        navigation.goBack();
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
            <Text style={styles.name}>Heitor Dib</Text>
            <Text style={styles.followers}>10 mil investidores</Text>
          </View>
        </View>

        <View style={styles.BioContainer}>
          <Text style={styles.sectionTitle}>Biografia</Text>
          <Text style={styles.bio}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>

        <View style={styles.msgContainer}>
          <Text style={styles.sectionTitle}>Enviar Mensagem</Text>
          <TextInput
            style={styles.input}
            placeholder="Lorem ipsum"
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