import React, { Fragment } from "react";
import { View, Text, FlatList, ScrollView } from "react-native";

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
      <ScrollView contentContainerStyle={styles.containerList}>
        {history?.map((item, index) => (
          <Fragment key={index}>
            <RenderItem item={item} />
            {index !== history.length - 1 && <View style={styles.separator} />}
          </Fragment>
        ))}
      </ScrollView>
    </View>
  );
};

export default TransactionHistory;
