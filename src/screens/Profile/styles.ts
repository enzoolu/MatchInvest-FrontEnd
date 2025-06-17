import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backgroundView: {
    backgroundColor: "#2C2C2E",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    overflow: "scroll",
  },
  screenContainer: {
    paddingHorizontal: 25,
    gap: 12,
  },
  popup: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -150 }, { translateY: -100 }],
    width: 300,
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
  popupButtons: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});
