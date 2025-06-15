import { View, Text, TextInput } from "react-native";
import CustomButton from "../../components/CustomButton";
import { styles } from './styles';
import { Feather, AntDesign } from "@expo/vector-icons";

export default function InvestorDetails() {
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ...
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
        <CustomButton title="Enviar" onClick={() => {}} />
        <AntDesign name="user" size={26} color="orange" />
      </View>
    </View>
  );
}
