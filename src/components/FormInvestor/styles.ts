import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
  popup: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -100 }, { translateY: -50 }],
    width: 200,
    padding: 15,
    backgroundColor: "rgba(0,0,0,0.9)",
    borderRadius: 10,
    alignItems: "center",
    zIndex: 100,
  },
  popupText: {
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
  },
});
