import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backgroundView: {
    backgroundColor: "#2C2C2E",
    height: "100%",
    flex: 1,
    justifyContent: "space-between",
    overflow: "scroll",
  },
  screenContainer: {
    paddingHorizontal: 25,
    gap: 12,
    flexGrow: 1,
  },
  headerContainer: {
    display: "flex",
    justifyContent: "center",
    paddingVertical: 70,
  },
  title: {
    color: "#FFD500",
    fontSize: 40,
    textAlign: "center",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
  },
  avatar: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: "#ddd",
  },
  name: {
    color: "#C28800",
    fontSize: 24,
    fontWeight: "600",
  },
  followers: {
    color: "#767678",
    fontStyle: "italic",
    fontSize: 20,
  },
  BioContainer: {
    gap: 20,
    marginTop: 30,
  },
  sectionTitle: {
    color: "#C28800",
    fontSize: 24,
    fontStyle: "italic",
  },
  bio: {
    color: "#A5ACAF",
    fontSize: 12,
  },
  msgContainer: {
    gap: 20,
    marginTop: 50,
  },
  input: {
    backgroundColor: "#4A4A4C",
    height: 150,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    color: "#A5ACAF",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    textAlignVertical: "top",
  },
  footerContainer: {
    paddingVertical: 20,
    backgroundColor: "#2C2C2E",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#444",
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
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
