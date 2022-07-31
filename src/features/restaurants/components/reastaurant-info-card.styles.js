import {Image , View} from 'react-native'
import { Card} from 'react-native-paper'
import styled from 'styled-components/native'

export const Info = styled.View`
padding: ${(props) => props.theme.space[3]};
`

export const Rating = styled.View`
padding-top: ${(props) => props.theme.space[2]};
padding-bottom: ${(props) => props.theme.space[2]};
flex-direction: row;
`

export const Section = styled.View`
flex-direction: row;
align-items: center;
`

export const SectionEnd = styled.View`
flex: 1;
flex-direction: row;
justify-content: flex-end;
`

export const RestaurantCard = styled(Card)`
background-color : white;

`

export const RestaurantCardCover = styled(Card.Cover)`
background-color : white;
padding: ${(props) => props.theme.space[3]};


`
export const Icon = styled.Image`
width: 15px;
height: 15px;
`
