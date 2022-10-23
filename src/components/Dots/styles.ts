import { StyleSheet } from "react-native";

import { SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    height: 30,
    marginTop: 15,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  animationContent: {
    borderRadius: SIZES.radius,
    marginHorizontal: 6,
  },
});

export default styles;
