import React from 'react'
import { Card, Text } from 'react-native-paper'
import styled from 'styled-components/native'


const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading} ;
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: ${(props) => props.theme.fontSizes.body }
`

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body} ;
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: ${(props) => props.theme.fontSizes.caption }
`


const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`

const RestaurantCard = styled(Card)`
  background-color : white;
`

const RestaurantCardCover = styled(Card.Cover)`
  background-color : white;
  padding: ${(props) => props.theme.space[3]};
`

function RestaurantInfoCard({restaurant = {}}) {
   const {name = "Some Restaurant",
    icon, 
    photos = [ "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80"],
    address = "Some random street", 
    isOpenNow = true,
    rating = 4, 
    isClosedTemporarily} = restaurant

  return (
    <RestaurantCard elevation={5} >
        <RestaurantCardCover key={name}  source={{uri: photos[0]}}/>
        <Info>
           <Title>{name}</Title>
           <Address>{address}</Address>
        </Info>
       
        
    </RestaurantCard>
  )
}

export default RestaurantInfoCard

