import TelaPrincipal from './src/telas/TelaPrincipal';
import SingIn from './src/telas/SignIn';
import Home from './src/telas/home';
import Loja from './src/telas/Loja'
import DetalhesDoProduto from './src/telas/DetalhesDoProduto';
import CarrinhoDeCompras from './src/telas/CarrinhoDeCompras';
import { NavigationContainer } from '@react-navigation/native';
import StackRotas from './src/rotas/StackRotas';

export default function App() {
  return (
    <NavigationContainer initialRouteName="Tela Principal">
      <StackRotas />
    </NavigationContainer>
  );
}

