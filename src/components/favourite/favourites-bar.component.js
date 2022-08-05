import React, {useContext} from 'react'
import styled from 'styled-components/native'
import {ScrollView, TouchableOpacity, Text} from 'react-native'
import { CompactRestaurantInfo } from '../restaurant/compact-restaurant-info.componet'
import { Spacer } from '../spacer.component'
import { FavouritesContext } from '../../services/favourites/favourites.context'

    const FavouritesWrapper = styled.View`
        padding: 10px;
    `

const FavouritesBar = ({onNavigate}) => {

    const {favourites} = useContext(FavouritesContext) 

    if(!favourites.length){
        return null
    }

  return (
    <FavouritesWrapper>
    <Text>Favourites</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    favourites.map((restaurant) => {
                        const key = restaurant.name;
                        return(

                            <Spacer key={key} position="left" size="medium">
                            
                            <TouchableOpacity onPress={() => onNavigate("RestaurantDetail", {restaurant})}>
                                <CompactRestaurantInfo isMap={false} restaurant={restaurant}/>
                            </TouchableOpacity>
                            </Spacer>
                        )
                    })
                }
        </ScrollView>
    </FavouritesWrapper>
  )
}

export default FavouritesBar
