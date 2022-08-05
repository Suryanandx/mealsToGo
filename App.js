
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
import { RestaurantContextProvider } from './src/services/restaurants/mock/restaurants.context';
import { LocationProvider } from './src/services/location/location.context';
import { Navigation } from './src/infrastructure/navigation';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

export default function App (){


  return (
    <>
    <ThemeProvider theme={theme}>
    <LocationProvider>
      <RestaurantContextProvider>
      <Navigation/>
    </RestaurantContextProvider>
    </LocationProvider>
    </ThemeProvider>
    <ExpoStatusBar style='auto' />
  </>
  );
}
