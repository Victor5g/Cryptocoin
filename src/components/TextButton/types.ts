import { StyleSheetProperties } from "react-native";

export type TextButtonType = {
  label: string;
  customContainerStyle: StyleSheetProperties;
  customLabelStyle: StyleSheetProperties;
  onPress: () => void;
};
