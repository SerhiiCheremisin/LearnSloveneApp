import React from 'react'
import { categoryCard } from '../services/styles/views';
import { Text, Pressable, Box } from "@react-native-material/core";
import { setActiveCategory } from '../redux/slices/dictionarySlice';
import useCommonDispatch from '../services/hooks/useCommonDispatch';

interface ISingleCardProps {
  categoryTitle : string
}

const SingleCard = ( {categoryTitle} : ISingleCardProps ) => {

    const dispatch = useCommonDispatch();
    const cardHandler = ( category : string):void => {
        dispatch(setActiveCategory(category));
    }

  return (
    <Pressable onPress={() => cardHandler(categoryTitle)}>
     <Box style={categoryCard}>
       <Text>{`${categoryTitle}`}</Text>
     </Box>
    </Pressable>
  )
}

export default SingleCard;
