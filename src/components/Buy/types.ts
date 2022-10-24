import { ImageSourcePropType } from "react-native";

export type BuyType = {
  icon: ImageSourcePropType;
  currency: string;
  code: string;
  value: string;
  crypto: string;
  onPress: () => void;
  icon_action: ImageSourcePropType;
};
