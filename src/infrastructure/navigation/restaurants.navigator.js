

import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import { Text } from 'react-native-paper';
import RestaurantDetail from '../../features/restaurants/screens/restaurant-detail.screen';
import { RestaurantScreen } from '../../features/restaurants/screens/restaurants.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
    return(
        <RestaurantStack.Navigator
        screenOptions={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}}
        >
            <RestaurantStack.Screen name='Restaurants' component={RestaurantScreen} />
            <RestaurantStack.Screen name='RestaurantDetail' component={RestaurantDetail} />
        </RestaurantStack.Navigator>
    )
}