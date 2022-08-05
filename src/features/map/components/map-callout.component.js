import React from 'react'
import {View} from 'react-native'
import styled from 'styled-components/native'
import { CompactRestaurantInfo } from '../../../components/restaurant/compact-restaurant-info.componet';

const MyText = styled.Text``;


const MapCallout = ({restaurant}) => {
  return (
  <CompactRestaurantInfo restaurant={restaurant}/>
  )
}

export default MapCallout
