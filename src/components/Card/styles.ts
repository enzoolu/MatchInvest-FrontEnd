import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2C2C2E",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    maxWidth: 320,
    height: 90,
    justifyContent: "space-between",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    color: "#FFD500",
    fontStyle: "italic",
    fontWeight: "600",
  },
  description: {
    fontSize: 14,
    color: "#FFD500",
    marginTop: 4,
  },
  rightContainer: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: "100%",
    paddingVertical: 8,
  },
  time: {
    fontSize: 10,
    color: "#A3A3A3",
  },
});
