import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./styles";
import { TextButtonType } from "./types";

const TextButton = ({
  label,
  customContainerStyle,
  customLabelStyle,
  onPress,
}: TextButtonType) => {
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
