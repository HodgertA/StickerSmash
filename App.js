import React from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigators";
import navigationService from "./src/navigators/navigationService";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store, persistor } from "./src/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  const [fontsLoaded] = useFonts({
    Sego: require("./src/assets/fonts/segoesc.ttf"),
    "Sego-Bold": require("./src/assets/fonts/segoesc_bold.ttf"),
  });

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <StatusBar translucent backgroundColor="transparent" />
        <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer ref={navigationService._navigator}>
              <AppNavigator initialRoute={"main"} />
            </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}