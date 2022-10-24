import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  ScrollView,
  LogBox, //Monitoring
} from "react-native";

import styles from "./styles";

import { DummyData } from "../../constants";

import PriceAlert from "../../components/PriceAlert";
import TransactionHistory from "../../components/TransactionHistory";
import News from "../../components/News";
import CoinCard from "../../components/CoinCard";
import HeaderInfo from "../../components/HeaderInfo";

const Home = () => {
  const { navigate } = useNavigation();
  const [trending, setTrending] = useState(DummyData.trendingCurrencies);
  const [transactionHistory, setTransactionHistory] = useState(
    DummyData.transactionHistory
  );

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <HeaderInfo
          data={DummyData}
          trending={trending}
          RenderItem={CoinCard}
          navigate={navigate}
        />
        <PriceAlert customContainerStyle={undefined} />
        <News
          title={"Investing Safety"}
          description={`It's very difficult to time an investments, especially when ther market is colatile. Learn how to use dollar cost averaging to your advantage.`}
        />
        <TransactionHistory
          customContainerStyle={styles.shadow}
          history={transactionHistory}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
