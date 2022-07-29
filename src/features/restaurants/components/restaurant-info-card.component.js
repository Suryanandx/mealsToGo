import React from 'react'
import {StyleSheet} from 'react-native'
import { Card, Text } from 'react-native-paper'
import styled from 'styled-components/native'


const Title = styled.Text`
  padding : 16px;
  color: red

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
    <Card elevation={5} style={styles.card}>
        <Card.Cover key={name} style={styles.cover} source={{uri: photos[0]}}/>
        <Title>{name}</Title>
        
    </Card>
  )
}

export default RestaurantInfoCard

const styles = StyleSheet.create({
    card: {backgroundColor: 'white'},
    cover: {padding :20, backgroundColor: 'white'},
    title: {padding: 16}
})