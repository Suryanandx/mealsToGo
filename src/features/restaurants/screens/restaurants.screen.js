import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import {Searchbar} from 'react-native-paper'
import RestaurantInfoCard from '../components/restaurant-info-card.component';

export const RestaurantScreen = () => {
    return (
        <SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight}}>
        <View style={{padding: 16}}>
          <Searchbar/>
        </View>
        <View style={{flex: 1,padding: 16}}>
         <RestaurantInfoCard/>
        </View>
         <ExpoStatusBar/>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  