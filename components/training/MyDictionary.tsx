import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { setUserDictionary } from '../../redux/slices/userSlice';
import { useDispatch } from 'react-redux';
import { Pressable, Text, Box } from "@react-native-material/core";
//services
import { getLocalDataName, addNewWord } from '../../services/functions';
import { ILocalStorageData, IRootDictionary } from '../../services/types';
import useUserData from '../../services/hooks/useUserData';
//styles
import { buttonDelete, returnButton } from '../../services/styles/buttons';
import { wordListCard } from '../../services/styles/views';
import { h3 } from '../../services/styles/typography';
import { categoryTrainingCard } from '../../services/styles/views';

const MyDictionary = () => {
  const userData = useUserData();
  const { name, dictionary } = userData;
  const [password, setPassword] = useState<string>("");
  const [dictionaryCategories, setDictionaryCategories] = useState<string[]>([]);
  const [activeCategoty, setActiveCategory] = useState<string>("");
  const dispatch = useDispatch();

  useEffect( () => {
    getLocalDataName().then( (data:ILocalStorageData) => setPassword(data.userPassword));
  },[dictionary]);

  useEffect( () => {
   const uniqueDictionary :string [] = [];
   dictionary.map( (el:IRootDictionary) => {
      uniqueDictionary.push(el.category);
      })
   const set = new Set(uniqueDictionary);
   setDictionaryCategories([...set]);
  }, [])

  const deleteWordFromDictionary = (currentWord: IRootDictionary):void => {
    const newDictionary = [...dictionary].filter( (word:IRootDictionary) => word.sloWord !== currentWord.sloWord);
    addNewWord({
        userName: name,
        userPassword: password,
        userDictionary: newDictionary
    });
    dispatch(setUserDictionary(newDictionary));
  } 

  const CardList = ():JSX.Element => {
    return (
        <>
        <Pressable onPress={() => setActiveCategory("")} style={returnButton}>
          <Text>{`До списку категорій`}</Text>
        </Pressable>
         {dictionary.filter( (item: IRootDictionary) => item.category === activeCategoty)
         .map( (item:IRootDictionary, idx: number) => {
          return (
        <Box style={wordListCard} key={idx}>
           <Text style={h3}>{`${item.sloWord.toUpperCase()} - ${item.ukrWord.toUpperCase()}`}</Text>
           {item.isIrregular === true && <Text style={h3}>{`Теперішній час "${item.irregulars.present.toUpperCase()}", майбутній та минулий час "${item.irregulars.pastAndFuture.toUpperCase()}"`}</Text>}
           <Pressable style={buttonDelete} onPress={() => deleteWordFromDictionary(item)}>
            <Text>Видалити це слово</Text>
           </Pressable>
        </Box>
      )
 } )} 
        </>
     )
  }

  return (
    <View style={{marginBottom: 50}}>
     { activeCategoty === "" ?
        <ScrollView style={{display: "flex"}}>
        { dictionaryCategories.map( (el:string) =>  {
         return (
          <Pressable onPress={() => setActiveCategory(el)} style={categoryTrainingCard}>
            <Text style={{fontSize: 20}}>{`${el}`}</Text>
          </Pressable>
         )
        }
 ) }
        </ScrollView> 
       :
       <CardList/>  } 
    </View>

  )
}

export default MyDictionary;