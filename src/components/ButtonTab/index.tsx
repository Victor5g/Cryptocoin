import React from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";

import styles from "./styles";
import { ButtonTabType } from "./types";

import { COLORS } from "../../constants";

const ButtonTab = ({ children, onPress }: ButtonTabType) => {
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
