import { View, Text } from "react-native";

import styles from "./styles";

const About = ({ desctiption, currency }) => {
  return (
    <View style={{ ...styles.container, ...styles.shadow }}>
      <Text style={styles.titleAbout}>About {currency}</Text>
      <Text style={styles.describeAbout}>{desctiption}</Text>
    </View>
  );
};

export default About;
