import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONTS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.padding,
    marginHorizontal: SIZES.padding,
    padding: SIZES.padding,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
  },
  content: {
    marginTop: SIZES.padding,
    marginBottom: SIZES.padding * 1.5,
    alignItems: "center",
    justifyContent: "center",
  },
  labelTitle: {
    ...FONTS.h2,
  },
  labelValue: {
    color: COLORS.gray,
    ...FONTS.body4,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

export default styles;
