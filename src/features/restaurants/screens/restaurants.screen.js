
import {  StyleSheet, FlatList, View} from 'react-native';
import {useContext} from 'react'
import {Colors, Searchbar} from 'react-native-paper'
import styled from 'styled-components/native';
import { Spacer } from '../../../components/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantContext } from '../../../services/restaurants/mock/restaurants.context';
import RestaurantInfoCard from '../components/restaurant-info-card.component';
import { ActivityIndicator } from 'react-native-paper';
import Search from '../components/search.component';



const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%
`

export const RestaurantScreen = () => {
  const {restaurants, isLoading, error} = useContext(RestaurantContext)

  return(
  <SafeArea>
  {
    isLoading && (
      <LoadingContainer>
        <Loading
        size={50}
        animating={true}
        color={Colors.blue300}
        />
      </LoadingContainer>
    )
  }
  <Search/>
    <RestaurantList
      data={restaurants}
      renderItem={({item}) => {
      
        return(
        <Spacer position="bottom" size="large">
          <RestaurantInfoCard key={item.id} restaurant={item} />
        </Spacer>
      )}}
      keyExtractor={(item) => item.name}
    />
  </SafeArea>
)};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  