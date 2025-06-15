import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backgroundView: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#2C2C2E",
    height: "100%",
  },
  screenContainer: {
    width: "100%",
    paddingHorizontal: 35,
  },
  styledText: {
    fontSize: 16,
    color: "#A5ACAF",
    marginTop: 12,
    textAlign: "center",
    marginBottom: 50,
  },
  styledTextOrange: {
    fontSize: 16,
    color: "orange",
    marginTop: 12,
    textAlign: "center",
    marginBottom: 50,
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
  styledSelect: {},
});
