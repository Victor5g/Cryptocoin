import { ImageSourcePropType } from "react-native";

export type Tradeype = {
  icon: ImageSourcePropType;
  currency: string;
  value: string;
  code: string;
  crypto: string;
  onPress: () => void;
};
