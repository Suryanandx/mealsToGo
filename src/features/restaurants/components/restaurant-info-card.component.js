import React from 'react'
import {Image , View} from 'react-native'
import { Card, Text } from 'react-native-paper'
import styled from 'styled-components/native'
import {SvgXml} from 'react-native-svg'

import star from '../../../../assets/star'

import open from '../../../../assets/open'
import { Spacer } from '../../../components/spacer.component'

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

const Rating = styled.View`
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  flex-direction: row;
`

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
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
    icon="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Circle-icons-water.svg/2048px-Circle-icons-water.svg.png", 
    photos = [ "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80"],
    address = "Some random street", 
    isOpenNow = true,
    rating = 4, 
    isClosedTemporarily=false} = restaurant

    const ratingArray = Array.from(new Array(Math.floor(rating)))

  return (
    <RestaurantCard elevation={5} >
        <RestaurantCardCover key={name}  source={{uri: photos[0]}}/>
        <Info>
           <Title>{name}</Title>
           <Section>
               <Rating>
               {
             ratingArray.map(() => (
               <SvgXml width={20} height={20} xml={star}/>
             ))
           }
           </Rating>
           <SectionEnd>

            {
              isClosedTemporarily && ( <Text variant="label" style={{color : "red"}} >
                CLOSED TEMPORARILY
              </Text>)
            }
           <Spacer variant="left.large"/>
             {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
             <Spacer variant="left.large"/>
             <Image style={{width: 15, height: 15}} source={{uri: icon}}/>
           </SectionEnd>
           </Section>
         
         
           <Address>{address}</Address>

        </Info>
    </RestaurantCard>
  )
}

export default RestaurantInfoCard

