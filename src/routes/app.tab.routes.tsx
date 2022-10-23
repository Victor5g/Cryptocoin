import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TabIcon from "../components/TabIcon";
import Icon from "../components/Icon";
import ButtonTab from "../components/ButtonTab";

import { COLORS } from "../constants";
import { Icons } from "../constants";

import { Home } from "../screens";

const { Navigator, Screen } = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: COLORS.white,
          borderTopColor: "transparent",
          height: 100,
        },
      }}
    >
      <Screen
        name="HomeTab"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon label={"Home"} icon={Icons.home} focused={focused} />
          ),
        }}
      />

      <Screen
        name="Portfolio"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              label={"Portfolio"}
              icon={Icons.pie_chart}
              focused={focused}
            />
          ),
        }}
      />

      <Screen
        name="Transaction"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Icon
              source={Icons.transaction}
              resizeMode={"contain"}
              style={{ width: 30, height: 30, tintColor: COLORS.white }}
            />
          ),
          tabBarButton: (props) => <ButtonTab {...props} />,
        }}
      />

      <Screen
        name="Prices"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              label={"Prices"}
              icon={Icons.line_graph}
              focused={focused}
            />
          ),
        }}
      />

      <Screen
        name="Settings"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              label={"Settings"}
              icon={Icons.settings}
              focused={focused}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default Tabs;
