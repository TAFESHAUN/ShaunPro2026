//Libs/Comps
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle:  { backgroundColor: "#6200ee" },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="Home"    component={HomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
}


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
          <Tab.Screen
            name="HomeTab"
            component={HomeStack}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              headerStyle:     { backgroundColor: "#6200ee" },
              headerTintColor: "#fff",
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
