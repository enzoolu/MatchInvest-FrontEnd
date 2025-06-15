import { View, Image, Text } from "react-native";
import CustomButton from "../CustomButton";
import { styles } from "./styles";
import { CardProps } from "./types";

export const Card = ({ imgPath, name, description }: CardProps) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={require(`../../../assets/images/income-amico.png`)}
        style={styles.image}
      />

      <Text style={styles.cardName}>{name}</Text>
      <Text style={styles.cardDescription}>{description}</Text>

      <CustomButton
        height="25px"
        width="95px"
        fontSize="12px"
        onClick={() => console.log("teste")}
        title="Saiba Mais"
      />
    </View>
  );
};
