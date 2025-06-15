import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#2C2C2E",
    height: 250,
    width: 200,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  cardName: {
    fontSize: 24,
    color: "#FFD500",
    fontWeight: "semibold",
    textAlign: "center",
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 16,
    color: "#FFD500",
    marginTop: 12,
    textAlign: "left",
  },
  customButton: {
    width: 100,
    height: 40,
  },
});
