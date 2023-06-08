import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
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

  const CardList = () => {
    return (
        <>
        <Pressable onPress={() => setActiveCategory("")} style={styles.backButton}>
          <Text>{`До списку категорій`}</Text>
        </Pressable>
         {dictionary.filter( (item: IRootDictionary) => item.category === activeCategoty)
         .map( (item:IRootDictionary, idx: number) => {
          return (
        <MyDictionaryCard key={idx}>
           <H3>{`${item.sloWord.toUpperCase()} - ${item.ukrWord.toUpperCase()}`}</H3>
           {item.isIrregular === true && <H3>{`Теперішній час "${item.irregulars.present.toUpperCase()}", майбутній та минулий час "${item.irregulars.pastAndFuture.toUpperCase()}"`}</H3>}
           <PressableButton onPress={() => deleteWordFromDictionary(item)}>
            <Text>Видалити це слово</Text>
           </PressableButton>
        </MyDictionaryCard>
      )
 } )} 
        </>
     )
  }

  return (
    <View style={{marginBottom: 50}}>
     { activeCategoty === "" ?
        <ScrollView style={styles.viewWrapper}>
        { dictionaryCategories.map( (el:string) =>  {
         return (
          <Pressable onPress={() => setActiveCategory(el)} style={styles.viewCard}>
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

const styles = StyleSheet.create({
  viewWrapper: {
    display: "flex",
  },
  viewCard : {
    width: 250,
    height: 100,
    backgroundColor: "#dfff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderRadius:10,
  } ,
  backButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 15
  }
})

export default MyDictionary;