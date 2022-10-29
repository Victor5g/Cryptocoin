import { StyleSheet,Platform } from "react-native";

import { COLORS } from "../../constants";

const styles = StyleSheet.create({
 container:{ 
  flex: 1, 
  backgroundColor: COLORS.lightGray1,
  paddingTop:Platform.OS==='android'? 40:0
}
});

export default styles;
