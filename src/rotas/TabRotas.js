import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../telas/home";
import Loja from "../telas/Loja";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const TabRotas = () => {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Loja") {return <SimpleLineIcons name={"handbag"} size={size} color={color} />}
          return <Ionicons name={"home"} size={size} color={color} />
        },
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "#000"
      })}>

        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Loja" component={Loja} />

    </Tab.Navigator>
  )
}

export default TabRotas;