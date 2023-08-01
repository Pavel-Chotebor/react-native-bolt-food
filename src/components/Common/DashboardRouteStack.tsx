import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dashboard } from "../../screens/Dashboard";
import { UpperHeader } from "../UpperHeader/UpperHeader";
import { RestaurantDetail } from "../RestaurantDetail/RestaurantDetail";

const Stack = createNativeStackNavigator();
export const DashboardRouteStack = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerTitle: () => <UpperHeader />,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={RestaurantDetail}
        options={{headerShown: false, statusBarColor: 'red'}}
      />
    </Stack.Navigator>
  );
};
