import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

const News = ({ title, description }) => {
  return (
    <View style={{ ...styles.container, ...styles.shadow }}>
      <Text style={styles.titleNew}>{title}</Text>
      <Text style={styles.detailNew}>{description}</Text>
      <TouchableOpacity
        style={styles.buttonRedirect}
        onPress={() => console.log("Learn More")}
      >
        <Text style={styles.labelButtonRedirect}>Learn More</Text>
      </TouchableOpacity>
    </View>
  );
};

export default News;
