import React, { useEffect, useState } from 'react'
import { View, Text, Pressable, ScrollView, FlatList, ActivityIndicator, SafeAreaView, StyleSheet } from 'react-native';
import { IRootDictionary } from '../services/types';
import { WordItem, WordItemPartition, WordAdder } from '../services/styles';
import { addNewWord } from '../services/functions';
import useCommonDispatch from '../services/hooks/useCommonDispatch';
import { setUserDictionary } from '../redux/slices/userSlice';
import { getLocalDataName } from '../services/functions';
import { ILocalStorageData } from '../services/types';
import useUserData from '../services/hooks/useUserData';

interface IWordListItemProps {
    item: IRootDictionary
}

const WordListItem = ( {item}:IWordListItemProps ) => {

  const [password, setPassword] = useState<string>('');
  const name = useUserData();

  useEffect( () => {
    getLocalDataName().then(
      (data:ILocalStorageData) => {
        setPassword(data.userPassword);
      }
    )
  }, [])

  const dispatch = useCommonDispatch();
  const dictionary = useUserData();

  const dictionaryHandler = ():void => {

   const newDictionary = [...dictionary.dictionary, ...[item]];
   dispatch(setUserDictionary(newDictionary));
   addNewWord({
    userName: name.name,
    userPassword: password,
    userDictionary: newDictionary
   })
  }

  const currentWord = item.sloWord;
  const isInDictionaryCheck = dictionary.dictionary.some( el => el.sloWord === currentWord);

  return (
     <WordItem>
        <WordItemPartition>{`${item.sloWord} - ${item.ukrWord}`}</WordItemPartition>
        { item.isIrregular && <Text>{ `теперешній час ${item.irregulars.present} , майбутній та минулий час ${item.irregulars.pastAndFuture}` }</Text> }
        { !isInDictionaryCheck ? 
          <Pressable onPress = {dictionaryHandler}>
          <WordAdder style={{backgroundColor: "green"}}><Text>{`Додати до мого словника`}</Text></WordAdder>   
        </Pressable> 
        : 
        <Pressable onPress = {dictionaryHandler}>
        <WordAdder style={{backgroundColor: "teal"}}><Text>{`У словнику`}</Text></WordAdder>   
      </Pressable> }
     </WordItem>
  )
}

export default WordListItem;
