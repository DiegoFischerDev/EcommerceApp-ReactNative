import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SingIn from "../telas/SignIn";
import TelaPrincipal from "../telas/TelaPrincipal";
import DetalhesDoProduto from "../telas/DetalhesDoProduto";
import CarrinhoDeCompras from "../telas/CarrinhoDeCompras";
import Loja from "../telas/Loja";
import TabRotas from "./TabRotas";

const Stack = createNativeStackNavigator();

const StackRotas = () => {

  return (
    <Stack.Navigator
      initialRouteName="TelaPrincipal"
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen name="TelaPrincipal" component={TelaPrincipal}/>
      <Stack.Screen name="SignIn" component={SingIn}/>
      <Stack.Screen name="TabRotas" component={TabRotas}/>
      <Stack.Screen name="DetalhesDoProduto" component={DetalhesDoProduto}/>
      <Stack.Screen name="CarrinhoDeCompras" component={CarrinhoDeCompras}/>
      <Stack.Screen name="Loja" component={Loja}/>

    </Stack.Navigator>
  )
}


export default StackRotas