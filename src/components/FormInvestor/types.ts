import { Animated } from "react-native";

export interface FormInvestorProps {
  capital: string;
  setCapital: (value: string) => void;
  selected: string;
  setSelected: (value: string) => void;
  handleButtonClick: () => void;
  showPopup: boolean;
  fadeAnim: Animated.Value;
  buttonTitle: string;
}
