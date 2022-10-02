import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  ImageBackground,
  LogBox, //Monitoring
} from "react-native";

import PriceAlert from "../components/PriceAlert";
import TransactionHistory from "../components/TransactionHistory";

import { DummyData, COLORS, SIZES, FONTS, Icons, Images } from "../constants";

const RenderHeader = ({data, trending, RenderItem, navigate }) => {
  return (
    <View style={{ width: "100%", height: 290, ...styles.shadow }}>
      <ImageBackground
        style={{ flex: 1, alignItems: "center" }}
        source={Images.banner}
        resizeMode="cover"
      >
        {/* Header-Bar */}
        <View
          style={{
            marginTop: SIZES.padding * 2,
            width: "100%",
            alignItems: "flex-end",
            paddingHorizontal: SIZES.padding,
          }}
        >
          <TouchableOpacity
            style={{
              width: 35,
              height: 35,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => console.log("Notification Press")}
          >
            <Image
              source={Icons.notification_white}
              resizeMode="contain"
              style={{ flex: 1 }}
            />
          </TouchableOpacity>
        </View>
        {/* Balance */}
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
            {" "}
            Your Portifolio Balance
          </Text>
          <Text
            style={{
              marginTop: SIZES.base,
              color: COLORS.white,
              ...FONTS.h1,
              fontWeight: "600",
            }}
          >
            ${data.portfolio.balance}
          </Text>
          <Text style={{ color: COLORS.white, ...FONTS.body5 }}>
            {data.portfolio.changes} Last 24 hours
          </Text>
        </View>
        {/* Treading */}
        <View style={{ position: "absolute", bottom: "-30%" }}>
          <Text
            style={{
              marginLeft: SIZES.padding,
              color: COLORS.white,
              ...FONTS.h2,
            }}
          >
            Trending
          </Text>
          <FlatList
            contentContainerStyle={{ marginTop: SIZES.base }}
            data={trending}
            renderItem={({ index, item }) => (
              <RenderItem index={index} item={item} pressItem={()=>navigate("CryptoDetail",{currency:item})} />
            )}
            keyExtractor={(item) => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const renderItem = ({ item, index, pressItem }) => {
  return (
    <TouchableOpacity
      onPress={pressItem}
      style={{
        width: 180,
        paddingVertical: SIZES.padding,
        paddingHorizontal: SIZES.padding,
        marginLeft: index == 0 ? SIZES.padding : 0,
        marginRight: SIZES.radius,
        borderRadius: 10,
        backgroundColor: COLORS.white,
      }}
    >
      {/* currency */}
      <View style={{ flexDirection: "row" }}>
        <View>
          <Image
            source={item.image}
            resizeMode="cover"
            style={{ marginTop: 5, width: 25, height: 25 }}
          />
        </View>
        <View style={{ marginLeft: SIZES.base }}>
          <Text style={{ ...FONTS.h2 }}>{item.currency}</Text>
          <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
            {item.code}
          </Text>
        </View>
      </View>
      {/* Value */}
      <View style={{ marginTop: SIZES.radius }}>
        <Text style={{ ...FONTS.h2 }}>${item.amount}</Text>
        <Text
          style={{
            color: item.type == "I" ? COLORS.green : COLORS.red,
            ...FONTS.h3,
          }}
        >
          {item.changes}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const RenderAlert = () => {
  return <PriceAlert customContainerStyle={undefined} />;
};

const RenderNotice = () => {
  return (
    <View
      style={{
        marginTop: SIZES.padding,
        marginHorizontal: SIZES.padding,
        padding: 20,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.secondary,
        ...styles.shadow,
      }}
    >
      <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Investing Safety</Text>
      <Text
        style={{
          marginTop: SIZES.base,
          color: COLORS.white,
          ...FONTS.body4,
          lineHeight: 18,
        }}
      >
        It's very difficult to time an investments, especially when ther market
        is colatile. Learn how to use dollar cost averaging to your advantage.
      </Text>
      <TouchableOpacity
        style={{ marginTop: SIZES.base }}
        onPress={() => console.log("Learn More")}
      >
        <Text
          style={{
            textDecorationLine: "underline",
            color: COLORS.green,
            ...FONTS.h3,
          }}
        >
          Learn More
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const RenderTransactionHistory = ({transactionHistory}) => {
  return (
    <TransactionHistory
      customContainerStyle={{ ...styles.shadow }}
      history={transactionHistory}
    />
  );
};

const Home = () => {
  const { navigate } = useNavigation();
  const [trending, setTrending] = useState(DummyData.trendingCurrencies);
  const [transactionHistory, setTransactionHistory] = useState(DummyData.transactionHistory);

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  });

  return (
    <ScrollView>
      <View style={{ flex: 1, paddingBottom: 130 }}>
        <RenderHeader
          data={DummyData}
          trending={trending}
          RenderItem={renderItem}
          navigate={navigate}
        />
        <RenderAlert />
        <RenderNotice />
        <RenderTransactionHistory transactionHistory={transactionHistory} />
      </View>
    </ScrollView>
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

export default Home;

