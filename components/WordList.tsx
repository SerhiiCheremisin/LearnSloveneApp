//other
import React, {useEffect, useState} from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { Pressable, Text } from "@react-native-material/core";
import { IRootDictionary } from '../services/types';
import { baseDictionary } from '../services/rootDictionary';
import useCommonDispatch from '../services/hooks/useCommonDispatch';
import { setActiveCategory } from '../redux/slices/dictionarySlice';
import useDictionaryData from '../services/hooks/useDictionaryData';
//styles
import { wordListStyles, wordListItself } from '../services/styles/views';
import { returnButton } from '../services/styles/buttons';
//components
import WordListItem from './WordListItem';

const WordList = () => {
    
    const dispatch = useCommonDispatch();
    const categoryTitle = useDictionaryData();
    const [wordList, setWordList] = useState<IRootDictionary[]>([])
   
   useEffect( () => {
      const activeWordList = [...baseDictionary].filter( (word:IRootDictionary) => word.category === categoryTitle);
      setWordList(activeWordList);      
   }, [])

   const returnHandler = ():void => {
    dispatch(setActiveCategory(''));
   }

  return (
    <View style={wordListStyles}>
     <Pressable style={returnButton} onPress={returnHandler}>
       <Text>Назад</Text>    
     </Pressable>   
     {
      wordList.length === 0 ?
      <ActivityIndicator size="large" color="#00ff00" /> 
      :
      <ScrollView contentContainerStyle={wordListItself}>
       { wordList.map( (item, idx) => {
        return < WordListItem key = {idx} item = {item}/>
       }) }
      </ScrollView>
     } 
    </View>
  )
}

export default WordList;
