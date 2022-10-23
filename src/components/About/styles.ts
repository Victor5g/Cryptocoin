import { StyleSheet } from "react-native";

import { SIZES, COLORS, FONTS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.padding,
    marginHorizontal: SIZES.radius,
    padding: SIZES.radius,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
  },
  titleAbout: {
    ...FONTS.h3,
  },
  describeAbout: {
    marginTop: SIZES.base,
    ...FONTS.body3,
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
