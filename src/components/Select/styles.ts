import { StyleSheet, TextStyle } from "react-native";
import { PickerStyle } from "react-native-picker-select";

export const pickerSelectStyles: PickerStyle = StyleSheet.create({
  inputIOS: {
    backgroundColor: "#4A4A4C",
    height: 48,
    borderRadius: 10,
    paddingHorizontal: 16,
    color: "orange",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    marginBottom: 20,
    borderWidth: 1,
    fontSize: 16,
  } as TextStyle,

  inputAndroid: {
    backgroundColor: "#4A4A4C",
    height: 48,
    borderRadius: 10,
    paddingHorizontal: 16,
    color: "orange",
    borderWidth: 1,
    fontSize: 16,
    marginBottom: 20,
  } as TextStyle,

  placeholder: {
    color: "#C28800",
    fontStyle: "italic",
    fontSize: 16,
  } as TextStyle,
});
