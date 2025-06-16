import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backgroundView: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#2C2C2E",
    height: "100%",
    overflow: "scroll",
  },
  screenContainer: {
    width: "100%",
    paddingHorizontal: 35,
  },
  styledTitle: {
    fontSize: 40,
    color: "#FFD500",
    fontWeight: "bold",
    marginTop: 35,
    textAlign: "center",
    marginBottom: 30,
  },
  styledSubtitle: {
    fontSize: 12,
    color: "#A5ACAF",
    textAlign: "center",
    paddingHorizontal: 50,
  },
  footerContainer: {
    width: "100%",
    display: "flex",
    paddingVertical: 20,
    paddingHorizontal: 35,
    backgroundColor: "#2C2C2E",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});
