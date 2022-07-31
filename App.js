
import { ThemeProvider } from 'styled-components/native';
import { RestaurantScreen } from './src/features/restaurants/screens/restaurants.screen';
import { theme } from './src/infrastructure/theme';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { restaurantsRequest } from './src/services/restaurants/mock/restaurants.service';

const TAB_ICON = {
    Restaurants: "restaurant",
    Map: "ios-map",
    Settings: 'ios-settings'
}

const Settings = () => {
  return  (
    <Text>Settings here</Text>
  )
}

const Maps = () => {
  return  (
    <Text>Maps here</Text>
  )
}

restaurantsRequest()

const Tab = createBottomTabNavigator();

export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

const tabBarIcon = (iconName) => ({size, color}) => {
  return <Ionicons name={iconName} size={size} color={color} />;
  }

const screenOptions = ({route}) => {
  const iconName = TAB_ICON[route.name]
  return{
    tabBarIcon : tabBarIcon(iconName),
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  }
}
  return (
    <>
    <ThemeProvider theme={theme}>
      <NavigationContainer >
        <Tab.Navigator
          screenOptions={screenOptions} 
        >
          <Tab.Screen name="Restaurants" component={RestaurantScreen} />
          <Tab.Screen name="Map" component={Maps} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>

  </>
  );
}
