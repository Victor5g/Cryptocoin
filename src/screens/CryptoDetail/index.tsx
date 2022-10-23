import { useState, useEffect } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/native";

import HeaderBar from "../../components/HeaderBar";
import PriceAlert from "../../components/PriceAlert";
import About from "../../components/About";
import Buy from "../../components/Buy";
import Chart from "../../components/Chart";

import styles from "./styles";

import { SIZES, Icons } from "../../constants";

const CryptoDetail = ({ route }) => {
  const [selectedCurrency, setSelctedCurrency] = useState(null);
  const { navigate } = useNavigation();

  useEffect(() => {
    const { currency } = route.params;
    setSelctedCurrency(currency);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar right={true} onPress={() => navigate("HomeTab")} />
      <ScrollView>
        <View style={{ flex: 1, paddingBottom: SIZES.padding }}>
          <Chart
            icon={selectedCurrency?.image}
            currency={selectedCurrency?.currency}
            code={selectedCurrency?.code}
            amount={selectedCurrency?.amount}
            changes={selectedCurrency?.changes}
            type={selectedCurrency?.type}
            chartData={selectedCurrency?.chartData}
          />
          <Buy
            icon={selectedCurrency?.image}
            currency={selectedCurrency?.currency}
            code={selectedCurrency?.code}
            value={selectedCurrency?.wallet.value}
            crypto={selectedCurrency?.wallet.crypto}
            icon_action={Icons.right_arrow}
            onPress={() =>
              navigate("Transaction", { currency: selectedCurrency })
            }
          />
          <About
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

export default CryptoDetail;
