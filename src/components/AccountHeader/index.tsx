import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { AccountHeaderProps } from "./types";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const AccountHeader = ({ name, description }: AccountHeaderProps) => {
  const navigation = useNavigation();

  return (
    <View style={styles.backgroundView}>
      <Feather
        name="arrow-left"
        size={25}
        color="#C28800"
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      />

      <View style={styles.headerContainer}>
        <Text style={styles.title}>MatchInvest</Text>
      </View>

      <View style={styles.screenContainer}>
        <View style={styles.profileContainer}>
          <View style={styles.avatar} />
          <View>
            <Text style={styles.name}>{name}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};
