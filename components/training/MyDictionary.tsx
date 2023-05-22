import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import useUserData from '../../services/hooks/useUserData';
import { IRootDictionary } from '../../services/types';
import { MyDictionaryCard, H3, PressableButton } from '../../services/styles';
import { addNewWord } from '../../services/functions';
import { setUserDictionary } from '../../redux/slices/userSlice';
import { getLocalDataName } from '../../services/functions';
import { ILocalStorageData } from '../../services/types';
import { useDispatch } from 'react-redux';

const MyDictionary = () => {
  const userData = useUserData();
  const { name, dictionary } = userData;
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();

  useEffect( () => {
    getLocalDataName().then( (data:ILocalStorageData) => setPassword(data.userPassword));
  },[dictionary])

  const deleteWordFromDictionary = (currentWord: IRootDictionary):void => {
    const newDictionary = [...dictionary].filter( (word:IRootDictionary) => word.sloWord !== currentWord.sloWord);
    addNewWord({
        userName: name,
        userPassword: password,
        userDictionary: newDictionary
    });
    dispatch(setUserDictionary(newDictionary));
  } 

  return (
    <View style={{marginBottom: 50}}>
     {dictionary.map( (item:IRootDictionary, idx: number) => {
          return (
            <MyDictionaryCard key={idx}>
               <H3>{`${item.sloWord.toUpperCase()} - ${item.ukrWord.toUpperCase()}`}</H3>
               {item.irregulars && <H3>{`Теперішній час "${item.irregulars.present.toUpperCase()}", майбутній та минулий час "${item.irregulars.pastAndFuture.toUpperCase()}"`}</H3>}
               <PressableButton onPress={() => deleteWordFromDictionary(item)}>
                <Text>Видалити це слово</Text>
               </PressableButton>
            </MyDictionaryCard>
          )
     } )} 
    </View>

  )
}


export default MyDictionary;