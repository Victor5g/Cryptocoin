import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./styles";

import { SIZES } from "../../constants";

import { CoinCardType } from "./types";

const CoinCard = ({ item, index, pressItem }: CoinCardType) => {
  return (
    <TouchableOpacity
      onPress={pressItem}
      style={{
        ...styles.container,
        marginLeft: index == 0 ? SIZES.padding : 0,
      }}
    >
      {/* currency */}
      <View style={{ flexDirection: "row" }}>
        <View>
          <Image
            source={item.image}
            resizeMode="cover"
            style={styles.iconCoin}
          />
        </View>
        <View style={styles.contentText}>
          <Text style={styles.labelCurrency}>{item.currency}</Text>
          <Text style={styles.labelCode}>{item.code}</Text>
        </View>
      </View>
      {/* Value */}
      <View style={styles.contentValue}>
        <Text style={styles.labelAmount}>${item.amount}</Text>
        <Text
          style={item.type == "I" ? styles.goodChange : styles.notGoodChange}
        >
          {item.changes}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CoinCard;
