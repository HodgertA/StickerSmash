import React from "react";
import { Main, Settings} from "../screens";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const options = {
  headerShown: false,
  gestureEnabled: true,
};

function AppNavigator({ initialRoute }) {
  return (
    <Stack.Navigator screenOptions={options} initialRouteName={initialRoute}>
      <Stack.Screen name="main" component={Main} />
      <Stack.Screen name="settings" component={Settings} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
