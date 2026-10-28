//Libs/Comps
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';

//Screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();
// #TODO FIX by adding the stack nav
 
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
                tabBarStyle: {
              height: 70,        
              paddingBottom: 5,
              paddingTop: 6,
            },
            tabBarLabelStyle: {
              fontSize: 12,
            },
          }}
        >
          <Tab.Screen name="Home"     component={HomeScreen} />
          <Tab.Screen name="Details"     component={DetailsScreen} />
          <Tab.Screen name="Settings"     component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
