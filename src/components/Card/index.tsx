import { View, Image, Text } from "react-native";
import CustomButton from "../CustomButton";
import { styles } from "./styles";
import { CardProps } from "./types";
import React from "react";

export const Card = ({ imgPath, name, description, onClick }: CardProps) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={require("../../../assets/images/income-amico.png")}
        style={styles.avatar}
      />

      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>

      <View style={styles.rightContainer}>
        <Text style={styles.time}>Há 20 horas</Text>
        <CustomButton
          height="25px"
          width="95px"
          fontSize="12px"
          onClick={onClick}
          title="Saiba Mais"
        />
      </View>
    </View>
  );
};
