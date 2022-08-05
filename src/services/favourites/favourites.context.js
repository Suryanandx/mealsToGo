import React, {createContext, useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';



export const FavouritesContext = createContext();

export const FavouriteContextProvider = ({children}) => {
    const [favourites, setFavourites] = useState([]);

    const saveFavourites = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('@favourites', jsonValue)
        } catch (err) {
          console.log(err);
        }
    }
    
    
    const loadFavourites = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@favourites')
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
        loadFavourites();
    }, [])

    useEffect(() => {
        saveFavourites(favourites);
    }, [favourites])

    return(
        <FavouritesContext.Provider value={{favourites, addToFavourites: add, removeFromFavourites: remove}}>
            {children}
        </FavouritesContext.Provider>
    )
}