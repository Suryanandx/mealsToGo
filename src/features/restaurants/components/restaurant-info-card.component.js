import {SvgXml} from 'react-native-svg'
import star from '../../../../assets/star'
import open from '../../../../assets/open'
import { Spacer } from '../../../components/spacer.component'
import { Text } from '../../../components/text.component'
import { Icon, Info, Rating, RestaurantCard, RestaurantCardCover, Section, SectionEnd } from './reastaurant-info-card.styles'

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
           <Text variant="body">{name}</Text>
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
              !isClosedTemporarily && ( <Text variant="error" >
                CLOSED TEMPORARILY
              </Text>)
            }
           <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
           </Spacer>
            
             <Spacer position="left" size="large">
                 <Icon source={{uri: icon}}/>
             </Spacer>
           
           </SectionEnd>
           </Section>
         
         
           <Text variant="label">{address}</Text>

        </Info>
    </RestaurantCard>
  )
}

export default RestaurantInfoCard

