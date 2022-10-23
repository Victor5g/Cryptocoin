import { View, Image, ImageSourcePropType, Text } from "react-native";

import styles from "./styles";

interface PropTabIcon {
  focused?: Boolean;
  label: String;
  icon: ImageSourcePropType;
}

const TabIcon = ({ focused, label, icon }: PropTabIcon) => {
  return (
    <View style={styles.container}>
      <Image
        source={icon}
        resizeMode={"contain"}
        style={[
          styles.iconArea,
          focused ? styles.inFocusedIcon : styles.notFocusedIcon,
        ]}
      />
      <Text style={focused ? styles.inFocusedLabel : styles.notFocusLabel}>
        {label}
      </Text>
    </View>
  );
};

export default TabIcon;
