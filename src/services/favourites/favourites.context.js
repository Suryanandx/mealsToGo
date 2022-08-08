import React, {createContext, useState, useEffect, useContext} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationContext } from '../authentication/authentication.context';



export const FavouritesContext = createContext();

export const FavouriteContextProvider = ({children}) => {
    const [favourites, setFavourites] = useState([]);
    const {user} = useContext(AuthenticationContext);

    const saveFavourites = async (value, uid) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue)
        } catch (err) {
          console.log(err);
        }
    }
    
    
    const loadFavourites = async (uid) => {
        try {
          const jsonValue = await AsyncStorage.getItem(`@favourites-${uid}`)
          return jsonValue != null ? setFavourites(JSON.parse(jsonValue)) : null;
        } catch(e) {
          console.log(e)
        }
    }
    

    const add =(restaurant) => {
        setFavourites([...favourites, restaurant]);
    }

    const remove = (restaurant) => {
        const newFav = favourites.filter((x) => x.placeId !== restaurant.placeId);
        setFavourites(newFav);
    }

    useEffect(() => {
       
        if(user){
            loadFavourites(user.uid);
        }
    }, [user])

    useEffect(() => {
        if(user){
          saveFavourites(favourites, user.uid);  
        }
        
    }, [favourites, user])

    return(
        <FavouritesContext.Provider value={{favourites, addToFavourites: add, removeFromFavourites: remove}}>
            {children}
        </FavouritesContext.Provider>
    )
}