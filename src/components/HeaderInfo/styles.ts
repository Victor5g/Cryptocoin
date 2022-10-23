import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONTS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 290,
  },
  backgroundImage: {
    flex: 1,
    alignItems: "center",
  },
  headerBar: {
    marginTop: SIZES.padding * 2,
    width: "100%",
    alignItems: "flex-end",
    paddingHorizontal: SIZES.padding,
  },
  buttonNotifications: {
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  iconNotification: {
    flex: 1,
  },
  contentBalance: {
    alignItems: "center",
    justifyContent: "center",
  },
  labelBalance: {
    color: COLORS.white,
    ...FONTS.h3,
  },
  valueBalance: {
    marginTop: SIZES.base,
    color: COLORS.white,
    ...FONTS.h1,
    fontWeight: "600",
  },
  changeValueBalance: {
    color: COLORS.white,
    ...FONTS.body5,
  },
  contentTreading: {
    position: "absolute",
    bottom: "-30%",
  },
  titleTreanding: {
    marginLeft: SIZES.padding,
    color: COLORS.white,
    ...FONTS.h2,
  },
  containerList: {
    marginTop: SIZES.base,
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
