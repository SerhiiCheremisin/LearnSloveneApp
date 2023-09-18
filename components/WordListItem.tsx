import React, { useEffect, useState } from 'react'
import { Pressable, Text, View } from 'react-native';
import { IRootDictionary } from '../services/types';
import { addNewWord } from '../services/functions';
import useCommonDispatch from '../services/hooks/useCommonDispatch';
import { setUserDictionary } from '../redux/slices/userSlice';
import { getLocalDataName } from '../services/functions';
import { ILocalStorageData } from '../services/types';
import useUserData from '../services/hooks/useUserData';
//styles
import { h3 } from '../services/styles/typography';
import { wordAdderButton } from '../services/styles/buttons';
import { wordListCard } from '../services/styles/views';

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
     <View style={wordListCard}>
        <Text style={h3}>{`${item.sloWord} - ${item.ukrWord}`}</Text>
        { item.isIrregular && <Text>{ `теперешній час ${item.irregulars.present} , майбутній та минулий час ${item.irregulars.pastAndFuture}` }</Text> }
        { !isInDictionaryCheck ? 
          <Pressable onPress = {dictionaryHandler}>
          <View style={[wordAdderButton, {backgroundColor: "green"}]}><Text>{`Додати до мого словника`}</Text></View>   
        </Pressable> 
        : 
        <Pressable onPress = {dictionaryHandler}>
        <View style={[wordAdderButton, {backgroundColor: "teal"}]}><Text>{`У словнику`}</Text></View>   
      </Pressable> }
     </View>
  )
}

export default WordListItem;
