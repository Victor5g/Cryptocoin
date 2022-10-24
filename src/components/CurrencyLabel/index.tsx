import React from "react";
import { View, Image, Text } from "react-native";

import styles from "./styles";
import { CurrencyLabelType } from "./types";

const CurrencyLabel = ({ icon, currency, code }: CurrencyLabelType) => {
  return (
    <View style={styles.container}>
      <Image source={icon} resizeMode="cover" style={styles.imageArea} />
      <View style={styles.boxText}>
        <Text style={styles.textCurrency}>{currency}</Text>
        <Text style={styles.textCode}>{code}</Text>
      </View>
    </View>
  );
};

export default CurrencyLabel;
