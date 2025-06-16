import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backgroundView: {
    width: "100%",
    height: "auto",
  },
  screenContainer: {
    paddingHorizontal: 25,
    gap: 12,
    flexGrow: 1,
  },
  headerContainer: {
    display: "flex",
    justifyContent: "center",
    paddingVertical: 45,
  },
  title: {
    color: "#FFD500",
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
  },
  profileContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 36,
  },
  avatar: {
    width: 125,
    height: 125,
    borderRadius: "100%",
    backgroundColor: "#ddd",
  },
  name: {
    color: "#C28800",
    fontSize: 24,
    fontStyle: "italic",
  },
  backButton: {
    position: "absolute",
    top: 60,
    left: 35,
    zIndex: 999,
  },
});
