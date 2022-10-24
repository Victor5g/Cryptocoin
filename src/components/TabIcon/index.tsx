import React from "react";
import { View, Image, Text } from "react-native";

import styles from "./styles";
import { TabIconType } from "./types";

const TabIcon = ({ focused, label, icon }: TabIconType) => {
  return (
    <View style={styles.container}>
      <Image
        source={icon}
        resizeMode={"contain"}
        style={[
          styles.iconArea,
          focused ? styles.inFocusedIcon : styles.notFocusedIcon,
        ]}
      />
      <Text style={focused ? styles.inFocusedLabel : styles.notFocusLabel}>
        {label}
      </Text>
    </View>
  );
};

export default TabIcon;
