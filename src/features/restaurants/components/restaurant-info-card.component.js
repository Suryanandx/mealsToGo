import {SvgXml} from 'react-native-svg'
import star from '../../../../assets/star'
import open from '../../../../assets/open'
import { Spacer } from '../../../components/spacer.component'
import { Text } from '../../../components/text.component'
import { Icon, Info, Rating, RestaurantCard, RestaurantCardCover, Section, SectionEnd } from './reastaurant-info-card.styles'
import Favourite from '../../../components/favourite/favourite.component'

function RestaurantInfoCard({restaurant = {}}) {

  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    vicinity = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;


    const ratingArray = Array.from(new Array(Math.floor(rating)))

  return (
    <RestaurantCard elevation={5} >
      <Favourite restaurant={restaurant}/>
        <RestaurantCardCover key={name}  source={{uri: photos[0]}}/>
        <Info>
           <Text variant="body">{name}</Text>
           <Section>
               <Rating>
               {
             ratingArray.map((_,idx) => (
               <SvgXml key={`star-${name}-${idx}`} width={20} height={20} xml={star}/>
             ))
           }
           </Rating>
           <SectionEnd>
           {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
           <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
           </Spacer>
            
             <Spacer position="left" size="large">
                 <Icon source={{uri: icon}}/>
             </Spacer>
           
           </SectionEnd>
           </Section>
         
         
           <Text variant="label">{vicinity}</Text>

        </Info>
    </RestaurantCard>
  )
}

export default RestaurantInfoCard

