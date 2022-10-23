import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./styles";

const TextButton = ({
  label,
  customContainerStyle,
  customLabelStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{ ...styles.container, ...customContainerStyle }}
      onPress={onPress}
    >
      <Text style={{ ...styles.labelButton, ...customLabelStyle }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
