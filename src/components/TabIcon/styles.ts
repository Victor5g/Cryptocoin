import { StyleSheet } from "react-native";

import { COLORS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconArea: {
    width: 30,
    height: 30,
  },
  inFocusedIcon: {
    tintColor: COLORS.primary,
  },
  notFocusedIcon: {
    tintColor: COLORS.black,
  },
  inFocusedLabel: {
    color: COLORS.primary,
  },
  notFocusLabel: {
    color: COLORS.black,
  },
});

export default styles;
