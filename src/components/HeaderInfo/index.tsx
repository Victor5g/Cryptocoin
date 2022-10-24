import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
} from "react-native";

import styles from "./styles";

import { Icons, Images } from "../../constants";
import { HeaderInfoType } from "./types";

const HeaderInfo = ({
  data,
  trending,
  RenderItem,
  navigate,
}: HeaderInfoType) => {
  return (
    <View style={{ ...styles.container, ...styles.shadow }}>
      <ImageBackground
        style={styles.backgroundImage}
        source={Images.banner}
        resizeMode="cover"
      >
        {/* Header-Bar */}
        <View style={styles.headerBar}>
          <TouchableOpacity
            style={styles.buttonNotifications}
            onPress={() => console.log("Notification Press")}
          >
            <Image
              source={Icons.notification_white}
              resizeMode="contain"
              style={styles.iconNotification}
            />
          </TouchableOpacity>
        </View>
        {/* Balance */}
        <View style={styles.contentBalance}>
          <Text style={styles.labelBalance}> Your Portifolio Balance</Text>
          <Text style={styles.valueBalance}>${data.portfolio.balance}</Text>
          <Text style={styles.changeValueBalance}>
            {data.portfolio.changes} Last 24 hours{" "}
          </Text>
        </View>
        {/* Treading */}
        <View style={styles.contentTreading}>
          <Text style={styles.titleTreanding}>Trending</Text>
          <FlatList
            contentContainerStyle={styles.containerList}
            data={trending}
            renderItem={({ index, item }) => (
              <RenderItem
                index={index}
                item={item}
                pressItem={() => navigate("CryptoDetail", { currency: item })}
              />
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

export default HeaderInfo;
