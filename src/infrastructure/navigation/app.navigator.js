import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, Text } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { RestaurantNavigator } from './restaurants.navigator';
import MapScreen from '../../features/map/screens/map.screen';
import { AuthenticationContext } from '../../services/authentication/authentication.context';
import {useContext} from 'react'
import { SafeArea } from '../../components/utility/safe-area.component';
import { Navigation } from '.';
import { FavouriteContextProvider } from '../../services/favourites/favourites.context';
import { LocationProvider } from '../../services/location/location.context';
import { RestaurantContextProvider } from '../../services/restaurants/mock/restaurants.context';

const TAB_ICON = {
    Restaurants: "restaurant",
    Map: "ios-map",
    Settings: 'ios-settings'
}

const Settings = ({navigation}) => {
  const {onLogout} = useContext(AuthenticationContext)
  return  (
    <SafeArea>
      <Button onPress={() => onLogout()}>Logout</Button>
    </SafeArea>
    
  )
}


const Tab = createBottomTabNavigator();

export default function AppNavigator() {

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
      headerShown: false
    }
  }


    return (
      <FavouriteContextProvider>
      <LocationProvider>
        <RestaurantContextProvider>
        <Tab.Navigator
          screenOptions={screenOptions} 
        >
          <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
        </RestaurantContextProvider>
    </LocationProvider>
   </FavouriteContextProvider>
   
    )
}