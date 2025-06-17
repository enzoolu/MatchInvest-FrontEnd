import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles"; // Certifique-se de que o caminho está correto
import { ProfileCardProps } from "./types"; // Certifique-se de que o caminho está correto
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const ProfileCard = ({
  iconName,
  title,
  description,
  onPress,
}: ProfileCardProps) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <MaterialCommunityIcons
        name={iconName}
        size={20}
        color="#C28800"
        style={styles.icon}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};
