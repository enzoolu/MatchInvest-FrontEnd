import React from "react";
import { View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { CustomSelectProps } from "./types";
import { defaultStyles } from "./styles";

export default function CustomSelect({
  items,
  placeholder = { label: "Selecione uma opção...", value: null },
  onValueChange,
  value,
  style = defaultStyles,
}: CustomSelectProps) {
  return (
    <View>
      <RNPickerSelect
        onValueChange={onValueChange}
        items={items}
        value={value}
        placeholder={placeholder}
        style={style}
        useNativeAndroidPickerStyle={false}
      />
    </View>
  );
}
