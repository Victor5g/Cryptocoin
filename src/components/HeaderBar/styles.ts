import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONTS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.padding,
    flexDirection: "row",
  },
  areaButtonBack: {
    flex: 1,
    alignItems: "flex-start",
  },
  buttonBack: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconBack: {
    width: 25,
    height: 25,
    tintColor: COLORS.gray,
  },
  labelButton: {
    marginLeft: SIZES.base,
    ...FONTS.h2,
  },
  buttonStar: {
    flex: 1,
    alignItems: "flex-end",
  },
  iconStar: {
    width: 30,
    height: 30,
  },
});

export default styles;
