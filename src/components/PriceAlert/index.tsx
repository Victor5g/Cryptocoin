import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./styles";

import { Icons } from "../../constants";

const PriceAlert = ({ customContainerStyle }: any) => {
  return (
    <TouchableOpacity
      style={{ ...styles.container, ...customContainerStyle, ...styles.shadow }}
    >
      <Image source={Icons.notification_color} style={styles.iconBell} />
      <View style={styles.contentText}>
        <Text style={styles.labelText}>Set Price Alert</Text>
        <Text style={styles.subLabelText}>
          Get notified when coins are moving
        </Text>
      </View>
      <Image source={Icons.right_arrow} style={styles.iconRight} />
    </TouchableOpacity>
  );
};

export default PriceAlert;
