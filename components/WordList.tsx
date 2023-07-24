import React, {useEffect, useState} from 'react';
import { View, Text, Pressable, ScrollView, FlatList, ActivityIndicator, SafeAreaView, StyleSheet } from 'react-native';
import { IRootDictionary } from '../services/types';
import { BigText } from '../services/styles';
import { baseDictionary } from '../services/rootDictionary';
import useCommonDispatch from '../services/hooks/useCommonDispatch';
import { setActiveCategory } from '../redux/slices/dictionarySlice';
import useDictionaryData from '../services/hooks/useDictionaryData';

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
    <View style={styles.scrollView}>
     <Pressable style={styles.returnButton} onPress={returnHandler}>
       <BigText>Назад</BigText>    
     </Pressable>   
     {
      wordList.length === 0 ?
      <ActivityIndicator size="large" color="#00ff00" /> 
      :
      <ScrollView contentContainerStyle={styles.listStyle}>
       { wordList.map( (item, idx) => {
        return < WordListItem key = {idx} item = {item}/>
       }) }
      </ScrollView>
     } 
    </View>
  )
}

const styles = StyleSheet.create({
    scrollView: {
        paddingTop: 50,
        paddingBottom: 110,
        backgroundColor: "#474A4F",
    },
    listStyle : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    returnButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 25,
      height: 100,
      backgroundColor: "#222629",
      marginBottom: 15
    }
})

export default WordList;
