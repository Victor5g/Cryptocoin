import { View, Animated } from "react-native";

import styles from "./styles";

import { COLORS, SIZES } from "../../constants";

const Dots = ({ numberOfCharts, scrollX }) => {
  const dotPosition = Animated.divide(scrollX, SIZES.width);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {numberOfCharts.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [SIZES.base * 0.8, 10, SIZES.base * 0.8],
            extrapolate: "clamp",
          });

          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [COLORS.gray, COLORS.primary, COLORS.gray],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={{
                ...styles.animationContent,
                width: dotSize,
                height: dotSize,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Dots;
