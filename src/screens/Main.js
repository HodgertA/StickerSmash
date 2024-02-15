import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Text
} from "react-native";
import MenuIcon from "../assets/icons/menu";
import { MainHeader } from "../components";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Habits from "./Habits";
import DrawerScreen from "./DrawerScreen";

const Drawer = createDrawerNavigator();

const { width, height } = Dimensions.get("window");

const Main = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPreferencesOnLoad = async() =>{
      if(isLoading){
        setIsLoading(false)
      }    
    }
    getPreferencesOnLoad()
  }, []);


  return (
    <>
      <View style={styles.container}>
        <MainHeader
          leftComponent={
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <MenuIcon />
            </TouchableOpacity>
          }
        />
        <>
          <View style={{paddingTop:15, justifyContent:"center", height: height*0.6}}>
            <Text style={styles.itemTitle}>Main Screen</Text>
          </View>
        </>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  button: {
    height: 170,
    borderRadius: 50,
    marginHorizontal: 20,
  },
  image: {
    width: 130,
    height: 130,
  },
  errorToast: {
    textColor: "#25436B",
  },
  itemTitle: {
    fontFamily: "Sego-Bold",
    color: "#25436B",
    fontSize: 28,
    textAlign: "center"
  },
});

function MainDrawer() {
  return (

      <Drawer.Navigator
      drawerContent={DrawerScreen}
      screenOptions={{
        headerShown: false,
        drawerType: "front",
        drawerStyle: { width: 210 },
      }}
    >
        <Drawer.Screen name="mainscreen" component={Main} />
        <Drawer.Screen name="habitsPage" component={Habits} />
      </Drawer.Navigator>


  );
}

export default MainDrawer;
