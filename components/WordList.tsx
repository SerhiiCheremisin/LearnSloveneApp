import React, {useEffect, useState} from 'react';
import { View, Text, Pressable, ScrollView, FlatList, ActivityIndicator, SafeAreaView, StyleSheet } from 'react-native';
import { IRootDictionary } from '../services/types';
import { H2 } from '../services/styles';
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
     <Pressable onPress={returnHandler}>
       <H2>{`<- Назад`}</H2>    
     </Pressable>   
     {
      wordList.length === 0 ?
      <ActivityIndicator size="large" color="#00ff00" /> 
      :
      <SafeAreaView style={styles.listStyle}>
       <FlatList
        data={wordList}
        renderItem={({item}) => <WordListItem item = {item}/>}
        keyExtractor={item => item.sloWord}
      />
      </SafeAreaView>

     } 
    </View>
  )
}

const styles = StyleSheet.create({
    scrollView: {
        paddingTop: 50
    },
    listStyle : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default WordList;
