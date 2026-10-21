import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';

import HomeScreen from './screens/HomeScreen';

const Tab = createBottomTabNavigator();
 
export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#6200ee',
            tabBarInactiveTintColor: '#999',
            headerStyle: { backgroundColor: '#6200ee' },
            headerTintColor: '#fff',
          }}
        >
          <Tab.Screen name="Home"     component={HomeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
