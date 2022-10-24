import { ImageSourcePropType } from "react-native";

export type CoinCardType = {
  item: itemType;
  index: number;
  pressItem: () => void;
};

type itemType = {
  image: ImageSourcePropType;
  currency: string;
  code: string;
  amount: number;
  type: string;
  changes: string;
};
