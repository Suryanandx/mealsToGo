import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import { StatusBar, StyleSheet, FlatList, View, SafeAreaView,} from 'react-native';
import {Searchbar} from 'react-native-paper'
import styled from 'styled-components/native';
import { Spacer } from '../../../components/spacer.component';
import RestaurantInfoCard from '../components/restaurant-info-card.component';

const SafeArea = styled(SafeAreaView)`
    flex: 1;
   ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`} 
`;

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs`
padding: ${(props) => props.theme.space[3]};
`
export const RestaurantScreen = () => {
    return (
        <SafeArea>
        <SearchContainer >
          <Searchbar/>
        </SearchContainer>
        <FlatList
          data={[1,2,3,4,5]}
          renderItem={() => 
          <>
          <Spacer position="bottom"  size="large">
            <RestaurantInfoCard/>
          </Spacer>
          
          </>}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{padding: 16}}
        />
         
        <ExpoStatusBar/>
        </SafeArea>
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
  