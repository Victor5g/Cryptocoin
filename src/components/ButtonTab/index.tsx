import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import styles from "./styles";

import { COLORS } from "../../constants";

const ButtonTab = ({ children, onPress }: any) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <LinearGradient
        colors={[COLORS.primary, COLORS.secondary]}
        style={styles.gradientArea}
      >
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ButtonTab;
