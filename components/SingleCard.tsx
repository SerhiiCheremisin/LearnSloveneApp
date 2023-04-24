import React from 'react'
import { View, Text, Pressable } from 'react-native';
import { Card } from '../services/styles';
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
     <Card>
       <Text>{`${categoryTitle}`}</Text>
     </Card>
    </Pressable>

  )
}

export default SingleCard;
