
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens";

const { Navigator, Screen } = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="Portfolio" component={Home} />
      <Screen name="Transaction" component={Home} />
      <Screen name="Prices" component={Home} />
      <Screen name="Settings" component={Home} />
    </Navigator>
  );
};

export default Tabs;
