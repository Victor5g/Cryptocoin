import { View, Text } from "react-native";
import styles from "./styles";

import { AboutType } from "./types";

const About = ({ desctiption, currency }: AboutType) => {
  return (
    <View style={{ ...styles.container, ...styles.shadow }}>
      <Text style={styles.titleAbout}>About {currency}</Text>
      <Text style={styles.describeAbout}>{desctiption}</Text>
    </View>
  );
};

export default About;
