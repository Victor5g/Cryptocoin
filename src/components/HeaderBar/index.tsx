import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { HeaderBarType } from "./types";

import { Icons } from "../../constants";

const HeaderBar = ({ right, onPress }: HeaderBarType) => {
  return (
    <View style={styles.container}>
      <View style={styles.areaButtonBack}>
        <TouchableOpacity style={styles.buttonBack} onPress={onPress}>
          <Image
            source={Icons.back_arrow}
            resizeMode="contain"
            style={styles.iconBack}
          />
          <Text style={styles.labelButton}>Back</Text>
        </TouchableOpacity>
      </View>
      {right && (
        <View style={styles.buttonStar}>
          <TouchableOpacity>
            <Image
              source={Icons.star}
              resizeMode="contain"
              style={styles.iconStar}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default HeaderBar;
