import { View, Text } from "react-native";

import styles from "./style";

import CurrencyLabel from "../../components/CurrencyLabel";
import TextButton from "../../components/TextButton";

const Trade = ({ icon, currency, value, code, crypto, onPress }) => {
  return (
    <View style={{ ...styles.container, ...styles.shadow }}>
      <CurrencyLabel icon={icon} currency={currency} code={code} />
      <View style={styles.content}>
        <Text style={styles.labelTitle}>
          {crypto}
          {code}
        </Text>
        <Text style={styles.labelValue}>${value}</Text>
      </View>
      <TextButton label={"Trade"} onPress={onPress} />
    </View>
  );
};

export default Trade;
