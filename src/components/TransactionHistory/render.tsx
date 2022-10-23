import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./styles";

import { Icons } from "../../constants";

const RenderItem = ({ item }) => (
  <TouchableOpacity
    style={styles.containerRender}
    onPress={() => console.log(item)}
  >
    <Image source={Icons.transaction} style={styles.imageArea} />
    <View style={styles.contentTexts}>
      <Text style={styles.textDescription}>{item.description}</Text>
      <Text style={styles.textDate}>{item.date}</Text>
    </View>
    <View style={styles.contentDetails}>
      <Text
        style={[
          styles.textDetail,
          item.type == "B" ? styles.itemColorInput : styles.itemColorOutput,
        ]}
      >
        {item.amount} {item.currency}
      </Text>
      <Image source={Icons.right_arrow} style={styles.iconArrow} />
    </View>
  </TouchableOpacity>
);

export default RenderItem;
