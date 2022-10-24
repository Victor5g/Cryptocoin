import { ImageSourcePropType } from "react-native";

export type ChartType = {
  icon: ImageSourcePropType;
  currency: string;
  code: string;
  amount: string;
  changes: string;
  type: string;
  chartData: Array<typeDataChart>;
};

type typeDataChart = {
  x: number;
  y: number;
};
