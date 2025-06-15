import { View, Text, TextInput } from "react-native";
import CustomButton from "../../components/CustomButton";
import { styles } from './styles';
import { Feather, AntDesign } from "@expo/vector-icons";

export default function AssessorDetails() {
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
          </View>
        </View>


        <View style={styles.CapitalContainer}>
          <Text style={styles.sectionTitle}>Capital Disponível</Text>
          <Text style={styles.bio}>
            Lorem ipsum dolor sit amet
          </Text>
        </View>

        <View style={styles.RiscoContainer}>
          <Text style={styles.sectionTitle}>Risco</Text>
          <Text style={styles.bio}>
            Lorem ipsum dolor
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
