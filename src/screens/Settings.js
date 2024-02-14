import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View
} from "react-native";
import MenuIcon from "../assets/icons/menu";
import { MainHeader } from "../components";

const { width, height } = Dimensions.get("window");

const Settings = ({ navigation }) => {

  return (
    <>
      <View style={styles.container}>
        <MainHeader
          leftComponent={
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MenuIcon />
            </TouchableOpacity>
          }
        />
        <>
          <View style={{paddingTop:15, justifyContent:"center", height: height*0.6}}>
            <Text style={styles.itemTitle}>Settings</Text>
          </View>
        </>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 5,
  },
  contentContainerStyle: {
    paddingBottom: 40,
  },
  item: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 40,
    padding: 15,
    marginHorizontal: 20,
    marginTop: 30,
  },
  itemHead: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  itemImg: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  itemTitle: {
    fontFamily: "Sego-Bold",
    color: "#25436B",
    fontSize: 28,
  },
  child: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    paddingRight: 15,
  },
  childTitle: {
    fontFamily: "Sego",
    color: "#25436B",
    fontSize: 22,
  },
  arrowRight: {
    width: 10,
    height: 20,
    marginTop:6
  },
  itemTitle: {
    fontFamily: "Sego-Bold",
    color: "#25436B",
    fontSize: 28,
    textAlign: "center"
  },
});

export default Settings;
