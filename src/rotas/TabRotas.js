import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useContext } from "react";
import Home from "../telas/home";
import Loja from "../telas/Loja";
import CarrinhoDeCompras from "../telas/CarrinhoDeCompras"
import Ionicons from "react-native-vector-icons/Ionicons";
import { GlobalContext } from '../context/GlobalContext';

const Tab = createBottomTabNavigator();

const TabRotas = () => {

  const { itens } = useContext(GlobalContext);

  let variavel = {}

  itens.length ? variavel = {tabBarBadge: itens.length} : variavel = {}

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Loja") {return <Ionicons name={"basket"} size={size} color={color} />}
          if (route.name === "Carrinho") {return <Ionicons name={"cart"} size={size} color={color} />}
          return <Ionicons name={"home"} size={size} color={color} />
        },
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "#000"
      })}>

        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Loja" component={Loja} />
        <Tab.Screen name="Carrinho" component={CarrinhoDeCompras} options={ variavel } />

    </Tab.Navigator>
  )
}

export default TabRotas;