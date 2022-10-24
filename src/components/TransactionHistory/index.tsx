import React from "react";
import { View, Text, FlatList } from "react-native";

import styles from "./styles";
import { TransactionType } from "./types";

import RenderItem from "./render";

const TransactionHistory = ({
  customContainerStyle,
  history,
}: TransactionType) => {
  return (
    <View style={{ ...styles.containerTrasaction, ...customContainerStyle }}>
      <Text style={styles.transactionTitle}>Transaction History</Text>
      <FlatList
        contentContainerStyle={styles.containerList}
        scrollEnabled={true}
        data={history}
        keyExtractor={(item) => `${item.id}`}
        renderItem={RenderItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
      />
    </View>
  );
};

export default TransactionHistory;
