import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Other } from "../../screens/Other";
import { ReactElement } from "react";

const Stack = createNativeStackNavigator();

export const OtherRouteStack = (): ReactElement => (
  <Stack.Navigator>
    <Stack.Screen name="Testing area" component={Other} />
  </Stack.Navigator>
);
