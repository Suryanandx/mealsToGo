
import {FlatList, TouchableOpacity} from 'react-native';
import {useContext, useState} from 'react'
import {Colors} from 'react-native-paper'
import styled from 'styled-components/native';
import { Spacer } from '../../../components/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantContext } from '../../../services/restaurants/mock/restaurants.context';
import RestaurantInfoCard from '../components/restaurant-info-card.component';
import { ActivityIndicator } from 'react-native-paper';
import Search from '../components/search.component';
import { FavouritesContext } from '../../../services/favourites/favourites.context';
import FavouritesBar from '../../../components/favourite/favourites-bar.component';




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

export const RestaurantScreen = ({navigation}) => {
  const {restaurants, isLoading, error} = useContext(RestaurantContext)
  const {favourites} = useContext(FavouritesContext)
  const [isToggled, setIsToggled] = useState(false)
  
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
  <Search 
  isFavouritesToggled={isToggled}
  onFavouritesToggle={() => setIsToggled(!isToggled)}/>

  {
    isToggled && <FavouritesBar onNavigate={navigation.navigate}/>
  }

    <RestaurantList
      data={restaurants}
      renderItem={({item}) => {
      
        return(
          <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", {restaurant: item})}>
              <Spacer position="bottom" size="large">
          <RestaurantInfoCard key={item.id} restaurant={item} />
        </Spacer>
          </TouchableOpacity>
      
      )}}
      keyExtractor={(item) => item.name}
    />
  </SafeArea>
)};
