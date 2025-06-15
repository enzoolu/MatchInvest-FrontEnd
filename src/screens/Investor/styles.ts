import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backgroundView: {
    backgroundColor: "#2C2C2E",
    height: "100%",
  },
  screenContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    width: "100%",
    height: "60%",
    paddingHorizontal: 35,
  },
  capitalContainer: {
    marginTop: 30,
    gap: 30,
  },
  styledText: {
    fontSize: 24,
    color: "#A5ACAF",
    marginTop: 12,
    textAlign: "left",
  },
  styledTextOrange: {
    fontSize: 24,
    color: "orange",
    marginTop: 12,
    textAlign: "center",
  },
  styledInput: {
    backgroundColor: "#4A4A4C",
    height: 48,
    borderRadius: 10,
    paddingHorizontal: 16,
    color: "#A5ACAF",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    marginBottom: 20,
  },
  selectContainer: {
    marginBottom: 20,
  },
});
