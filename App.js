import { NavigationContainer } from '@react-navigation/native';
import { ComprasProvider } from './src/context/GlobalContext';
import StackRotas from './src/rotas/StackRotas';

export default function App() {
  return (
    <NavigationContainer>
      <ComprasProvider>
        <StackRotas />
      </ComprasProvider>
    </NavigationContainer>
  );
}

