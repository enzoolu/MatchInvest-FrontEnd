import { Animated } from "react-native";

export interface FormAssessorProps {
  certification: string | null;
  setCertification: (value: string | null) => void;
  specialty: string | null;
  setSpecialty: (value: string | null) => void;
  hourValue: string;
  setHourValue: (value: string) => void;
  bio: string;
  setBio: (value: string) => void;
  handleButtonClick: () => void;
  showPopup: boolean;
  fadeAnim: Animated.Value;
  buttonTitle: string;
}
