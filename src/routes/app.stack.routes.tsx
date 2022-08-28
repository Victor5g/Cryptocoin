
import { CryptoDetail, Transaction } from "../screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Tabs from "./app.tab.routes";

const { Navigator, Screen } = createStackNavigator();

const Stack = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Home"}
      >
        <Screen name="Home" component={Tabs} />
        <Screen name="CryptoDetail" component={CryptoDetail} />
        <Screen name="Transaction" component={Transaction} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Stack;
