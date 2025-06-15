import { PickerStyle } from "react-native-picker-select";

export type Item = {
  label: string;
  value: string | number | null;
};

export type CustomSelectProps = {
  items: Item[];
  placeholder?: { label: string; value: string | number | null };
  onValueChange: (value: any) => void;
  value?: string | number | null;
  style?: PickerStyle;
};
