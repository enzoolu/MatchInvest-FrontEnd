import { PickerStyle } from "react-native-picker-select";
import { StyleSheet, TextStyle } from "react-native";

export const defaultStyles: PickerStyle = StyleSheet.create({
  inputIOS: {
    color: "#fff",
    padding: 10,
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 8,
    backgroundColor: "#333",
  } as TextStyle,
  inputAndroid: {
    color: "#fff",
    padding: 10,
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 8,
    backgroundColor: "#333",
  } as TextStyle,
  placeholder: {
    color: "#aaa",
  } as TextStyle,
});
