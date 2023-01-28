import { createNativeStackNavigator } from "@react-navigation/native-stack";
import react from "react";
import SingIn from "../telas/SignIn";
import TelaPrincipal from "../telas/TelaPrincipal";

const Stack = createNativeStackNavigator();

const StackRotas = () => {

  return (
    <Stack.Navigator
      initialRouteName="Tela Principal"
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen name="Tela Principal" component={TelaPrincipal}/>
      <Stack.Screen name="Sign In" component={SingIn}/>

    </Stack.Navigator>
  )
}


export default StackRotas