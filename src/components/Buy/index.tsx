import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";
import CurrencyLabel from "../CurrencyLabel";
import TextButton from "../TextButton";

import { BuyType } from "./types";

const Buy = ({ icon, currency, code, value, crypto, onPress, icon_action }:BuyType) => {
  return (
    <View style={{ ...styles.container, ...styles.shadow }}>
      <View style={styles.content}>
        {/* Currency */}
        <View style={styles.contentCurrency}>
          <CurrencyLabel
            icon={icon}
            currency={`${currency} Wallet`}
            code={code}
          />
        </View>
        {/* Amount */}
        <View style={styles.contentAmount}>
          <View style={styles.textArea}>
            <Text style={styles.labelValue}>${value}</Text>
            <Text style={styles.legendAbout}>
              {crypto}
              {code}
            </Text>
          </View>
          <Image
            source={icon_action}
            resizeMode={"cover"}
            style={styles.imageArea}
          />
        </View>
      </View>
      <TextButton label={"Buy"} onPress={onPress} />
    </View>
  );
};

export default Buy;
