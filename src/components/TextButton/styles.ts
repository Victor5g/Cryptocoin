import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONTS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.green,
  },
  labelButton: {
    color: COLORS.white,
    ...FONTS.h3,
  },
});

export default styles;
