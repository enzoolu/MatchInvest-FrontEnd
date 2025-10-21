// ...existing code...
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backgroundView: {
    backgroundColor: "#2C2C2E",
    height: "100%",
    flex: 1,
  },

  videoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
    gap: 25,
  },

  videoWrapper: {
    position: "relative",
    width: 275,
    height: 400,
    backgroundColor: "#f1c40f",
    borderRadius: "50%",
    overflow: "hidden",
  },

  // new bubble styles
  bubble: {
    display: "flex",
    width: "auto",
    maxWidth: "60%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
    zIndex: 40,
  },

  bubbleText: {
    color: "#fff",
    fontSize: 12,
  },
});
