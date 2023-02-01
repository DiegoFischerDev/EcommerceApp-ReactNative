import { NavigationContainer } from '@react-navigation/native';
import StackRotas from './src/rotas/StackRotas';

export default function App() {
  return (
    <NavigationContainer initialRouteName="TelaPrincipal">
      <StackRotas />
    </NavigationContainer>
  );
}

