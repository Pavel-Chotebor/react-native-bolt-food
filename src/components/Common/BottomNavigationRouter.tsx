import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Profile } from "../../screens/Profile";
import { DashboardRouteStack } from "./DashboardRouteStack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { OtherRouteStack } from "./OtherRouteStack";

export type NavigationRouterStack = {
  Dashboard: undefined;
  DashboardStack: undefined;
  Detail: { id: string };
  CameraTest: undefined;
  Other: undefined;
  Profile: undefined;
};

export const BottomNavigationRouter = () => {
  const Tab = createMaterialBottomTabNavigator<NavigationRouterStack>();

  return (
    <NavigationContainer>
      <Tab.Navigator
        barStyle={{ padding: 20, backgroundColor: "#f59e0b" }}
        initialRouteName={"Dashboard"}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="home"
                color={focused ? "white" : "black"}
                size={28}
              />
            ),
            tabBarLabel: "",
          }}
          name="DashboardStack"
          component={DashboardRouteStack}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="account-settings"
                color={focused ? "white" : "black"}
                size={28}
              />
            ),
            tabBarLabel: "",
          }}
        />
        <Tab.Screen
          name="Other"
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="menu"
                color={focused ? "white" : "black"}
                size={24}
              />
            ),
            tabBarLabel: "",
          }}
          component={OtherRouteStack}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
