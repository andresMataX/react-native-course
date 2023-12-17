import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Pokemon } from '../screens/Pokemon';
import { SimplePokemon } from '../interfaces/pokemonIntefaces';

export type RootStackParams = {
  Home: undefined;
  Pokemon: { simplePokemon: SimplePokemon, color: string };
  Search: undefined;
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
}