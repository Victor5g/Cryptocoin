import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import HeaderBar from "../components/HeaderBar";
import { COLORS, FONTS, SIZES } from "../constants";
import CurrencyLabel from "../components/CurrencyLabel";
import TextButton from "../components/TextButton";
import TransactionHistory from "../components/TransactionHistory";

const RenderTRade =({icon, currency, value, code, crypto, onPress})=>{
  return(
    <View style={{
      marginTop:SIZES.padding,
      marginHorizontal:SIZES.padding,
      padding:SIZES.padding,
      borderRadius:SIZES.radius,
      backgroundColor:COLORS.white,
      ...styles.shadow
      }} >
        <CurrencyLabel
        icon={icon}
        currency={currency}
        code={code}
        />
        <View style={{
          marginTop:SIZES.padding,
          marginBottom:SIZES.padding * 1.5,
          alignItems:'center',
          justifyContent:'center'
          }}>
          <Text style={{...FONTS.h2}} >{crypto}{code}</Text>
          <Text style={{color:COLORS.gray, ...FONTS.body4}} >${value}</Text>
        </View>
        <TextButton
        label={"Trade"}
        onPress ={onPress}
        />

    </View>
  )
}

const Transaction = ({route}) => {
  const [selectedCurrency, setSelectedCurrency] = useState()
  const {navigate} = useNavigation()

  useEffect(()=>{
    const { currency } = route.params
    setSelectedCurrency(currency)
  })

  return (
    <SafeAreaView style={{flex:1}}>
     <HeaderBar right={false} onPress={()=>navigate("CryptoDetail")}/>
     <ScrollView>
      <View style={{flex:1, paddingBottom:SIZES.padding}}>
        <RenderTRade 
            icon={selectedCurrency?.image}
            currency={selectedCurrency?.currency}
            code={selectedCurrency?.code}
            crypto={selectedCurrency?.wallet.crypto}
            value={selectedCurrency?.wallet.value}
            onPress={()=>console.log("Trade")}       
        />
        <TransactionHistory
        customContainerStyle={{...styles.shadow}}
        history={selectedCurrency?.transactionHistory}
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

export default Transaction;
