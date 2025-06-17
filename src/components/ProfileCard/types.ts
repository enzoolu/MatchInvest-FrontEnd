import { IconProps } from "react-native-paper/lib/typescript/components/MaterialCommunityIcon";

export interface ProfileCardProps {
  iconName: IconProps["name"];
  title: string;
  description: string;
  onPress: () => void;
}
