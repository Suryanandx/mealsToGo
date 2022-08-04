
import React, {useContext, useState, useEffect} from 'react'
import {Colors, Searchbar} from 'react-native-paper'
import styled from 'styled-components/native';
import { LocationContext } from '../../../services/location/location.context';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Search = () => {
    const {keyword, search} = useContext(LocationContext)
    const [searchKeyword , setSearchKeyword] = useState(keyword)

    useEffect(() => {
        search(keyword)
    }, [])

  return (
    <SearchContainer>
    <Searchbar
        placeholder='Search Location'
        value={searchKeyword}
        onSubmitEditing={() => {
            search(searchKeyword)
        }}
        onChangeText={(text) => {
            setSearchKeyword(text)
        }}
     />
  </SearchContainer>
  )
}

export default Search
