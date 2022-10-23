import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
  Animated,
} from "react-native";

import {
  VictoryScatter,
  VictoryLine,
  VictoryChart,
  VictoryAxis,
} from "victory-native";

import { useNavigation } from "@react-navigation/native";

import HeaderBar from "../components/HeaderBar";
import CurrencyLabel from "../components/CurrencyLabel";
import TextButton from "../components/TextButton";
import PriceAlert from "../components/PriceAlert";

import { DummyData, COLORS, SIZES, FONTS, Icons } from "../constants";
import { VictoryCustomTheme } from "../styles";

const RenderChart = ({
  icon,
  currency,
  code,
  amount,
  changes,
  type,
  chartData,
}) => {
  const scrollX = new Animated.Value(0);
  const numberOfCharts = [1, 2, 3];
  const [chartOptions, setChartOprions] = useState(DummyData.chartOptions);
  const [selectedOption, setSelectedOption] = useState(chartOptions[0]);

  const optionOnClickHandler = (option) => {
    setSelectedOption(option);
  };

  const RenderDots = ({ numberOfCharts }) => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <View style={{ height: 30, marginTop: 15 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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
                  borderRadius: SIZES.radius,
                  marginHorizontal: 6,
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

  return (
    <View
      style={{
        marginTop: SIZES.padding,
        marginHorizontal: SIZES.radius,
        alignItems: "center",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        ...styles.shadow,
      }}
    >
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          marginTop: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}
      >
        <View style={{ flex: 1 }}>
          <CurrencyLabel icon={icon} currency={currency} code={code} />
        </View>
        <View>
          <Text style={{ ...FONTS.h3 }}>${amount}</Text>
          <Text
            style={{
              color: type === "I" ? COLORS.green : COLORS.red,
              ...FONTS.body3,
            }}
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
        {numberOfCharts.map((item, index) => (
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
      <View
        style={{
          width: "100%",
          paddingHorizontal: SIZES.padding,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {chartOptions.map((option) => {
          return (
            <TextButton
              key={`options-${option.id}`}
              label={option.label}
              customContainerStyle={{
                height: 30,
                width: 60,
                borderRadius: 15,
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
      {<RenderDots numberOfCharts={numberOfCharts} />}
    </View>
  );
};

const RenderBuy = ({ icon, currency, code, value, crypto, onPress }) => {
  return (
    <View
      style={{
        marginTop: SIZES.padding,
        marginHorizontal: SIZES.radius,
        padding: SIZES.radius,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        ...styles.shadow,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: SIZES.radius,
        }}
      >
        {/* Currency */}
        <View style={{ flex: 1 }}>
          <CurrencyLabel
            icon={icon}
            currency={`${currency} Wallet`}
            code={code}
          />
        </View>
        {/* Amount */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ marginRight: SIZES.base }}>
            <Text style={{ ...FONTS.h3 }}>${value}</Text>
            <Text
              style={{ textAlign: "right", color: COLORS.gray, ...FONTS.body4 }}
            >
              {crypto}
              {code}
            </Text>
          </View>
          <Image
            source={Icons.right_arrow}
            resizeMode={"cover"}
            style={{ width: 20, height: 20, tintColor: COLORS.gray }}
          />
        </View>
      </View>
      <TextButton label={"Buy"} onPress={onPress} />
    </View>
  );
};

const RenderAbout = ({ desctiption, currency }) => {
  return (
    <View
      style={{
        marginTop: SIZES.padding,
        marginHorizontal: SIZES.radius,
        padding: SIZES.radius,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        ...styles.shadow,
      }}
    >
      <Text style={{ ...FONTS.h3 }}>About {currency}</Text>
      <Text style={{ marginTop: SIZES.base, ...FONTS.body3 }}>
        {desctiption}
      </Text>
    </View>
  );
};

const CryptoDetail = ({ route }) => {
  const [selectedCurrency, setSelctedCurrency] = useState(null);
  const { navigate } = useNavigation();

  useEffect(() => {
    const { currency } = route.params;
    setSelctedCurrency(currency);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightGray1 }}>
      <HeaderBar right={true} onPress={()=>navigate("HomeTab")}/>
      <ScrollView>
        <View style={{ flex: 1, paddingBottom: SIZES.padding }}>
          <RenderChart
            icon={selectedCurrency?.image}
            currency={selectedCurrency?.currency}
            code={selectedCurrency?.code}
            amount={selectedCurrency?.amount}
            changes={selectedCurrency?.changes}
            type={selectedCurrency?.type}
            chartData={selectedCurrency?.chartData}
          />
          <RenderBuy
            icon={selectedCurrency?.image}
            currency={selectedCurrency?.currency}
            code={selectedCurrency?.code}
            value={selectedCurrency?.wallet.value}
            crypto={selectedCurrency?.wallet.crypto}
            onPress={() =>
              navigate("Transaction", { currency: selectedCurrency })
            }
          />
          <RenderAbout
            desctiption={selectedCurrency?.description}
            currency={selectedCurrency?.currency}
          />
          <PriceAlert
            customContainerStyle={{
              marginTop: SIZES.padding,
              marginRight: SIZES.radius,
              marginLeft: SIZES.radius,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

export default CryptoDetail;
