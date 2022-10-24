import { useState } from "react";
import { View, Text, Animated } from "react-native";

import {
  VictoryScatter,
  VictoryLine,
  VictoryChart,
  VictoryAxis,
} from "victory-native";

import CurrencyLabel from "../CurrencyLabel";
import TextButton from "../TextButton";
import Dots from "../Dots";

import styles from "./styles";

import { ChartType } from "./types";

import { DummyData, COLORS, SIZES, FONTS } from "../../constants";
import { VictoryCustomTheme } from "../../styles";

const Chart = ({
  icon,
  currency,
  code,
  amount,
  changes,
  type,
  chartData,
}: ChartType) => {
  const scrollX = new Animated.Value(0);
  const numberOfCharts = [1, 2, 3];
  const [chartOptions, setChartOprions] = useState(DummyData.chartOptions);
  const [selectedOption, setSelectedOption] = useState(chartOptions[0]);

  const optionOnClickHandler = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={{ ...styles.container, ...styles.shadow }}>
      {/* Header */}
      <View style={styles.headerChart}>
        <View style={styles.contentLabel}>
          <CurrencyLabel icon={icon} currency={currency} code={code} />
        </View>
        <View>
          <Text style={styles.textAmount}>${amount}</Text>
          <Text
            style={type === "I" ? styles.changesGood : styles.changesNotGood}
          >
            {changes}
          </Text>
        </View>
      </View>
      {/* Chart */}
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment={"center"}
        snapToInterval={SIZES.width - 40}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      >
        {numberOfCharts.map((_, index) => (
          <View
            key={`chart-${index}`}
            style={{ marginLeft: index === 0 ? SIZES.base : 0 }}
          >
            <View style={{ marginTop: -25 }}>
              <VictoryChart
                theme={VictoryCustomTheme}
                height={220}
                width={SIZES.width - 40}
              >
                <VictoryLine
                  style={{
                    data: { stroke: COLORS.secondary },
                    parent: { border: "1px solid #ccc" },
                  }}
                  data={chartData}
                  categories={{
                    x: ["15 MIN", "30 MIN", "45 MIN", "60 MIN"],
                    y: ["15", "30", "45"],
                  }}
                />
                <VictoryScatter
                  data={chartData}
                  size={7}
                  style={{
                    data: {
                      fill: COLORS.secondary,
                    },
                  }}
                />
                <VictoryAxis
                  style={{
                    grid: {
                      stroke: "transparent",
                    },
                  }}
                />
                <VictoryAxis
                  dependentAxis
                  style={{
                    axis: { stroke: "transparent" },
                    grid: { stroke: "grey" },
                  }}
                />
              </VictoryChart>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
      {/* Options */}
      <View style={styles.contentOptions}>
        {chartOptions.map((option) => {
          return (
            <TextButton
              key={`options-${option.id}`}
              label={option.label}
              customContainerStyle={{
                ...styles.containerOption,
                backgroundColor:
                  selectedOption.id == option.id
                    ? COLORS.primary
                    : COLORS.lightGray,
              }}
              customLabelStyle={{
                color:
                  selectedOption.id == option.id ? COLORS.white : COLORS.gray,
                ...FONTS.body5,
              }}
              onPress={() => optionOnClickHandler(option)}
            />
          );
        })}
      </View>
      {/* Dots */}
      <Dots numberOfCharts={numberOfCharts} scrollX={scrollX} />
    </View>
  );
};

export default Chart;
