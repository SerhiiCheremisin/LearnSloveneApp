import React, {useEffect, useState} from 'react';
import { View, Text, ActivityIndicator, ScrollView, StyleSheet, Pressable } from 'react-native';
//Styles
import { Container, H2, ExitButton } from '../services/styles';

//Components
import SingleCard from '../components/SingleCard';
import WordList from '../components/WordList';

import { baseDictionary } from '../services/rootDictionary';
import { IRootDictionary } from '../services/types';
import useDictionaryData from '../services/hooks/useDictionaryData';
import useUserData from '../services/hooks/useUserData';
import { getLocalDataName } from '../services/functions';
import { setUserLogged, setUserName } from '../redux/slices/userSlice';
import useCommonDispatch from '../services/hooks/useCommonDispatch';
import { removeLocalUser } from '../services/functions';


const VocabularyScreen = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [categories, setCategories] = useState<[]>([]);
    const activeDictionaryCategory = useDictionaryData();
    const user = useUserData();
    const dispatch = useCommonDispatch();
  
  useEffect( () => {
   const categories: string[] = [];
   const categoriesSet = new Set();
   baseDictionary.map( (word:IRootDictionary) => {
    if (categoriesSet.has(word.category)) {
        return
    }
    categoriesSet.add(word.category);
   });
   categoriesSet.forEach( (category:string) => {
    categories.push(category);
   })
   getLocalDataName().then( data => dispatch(setUserName(data.userName)))
   setCategories(categories);
   setIsLoading(false);
  },[])

  const exitHandler = () => {
    removeLocalUser();
    dispatch(setUserLogged(false));
  }
   
   if (activeDictionaryCategory !== '') {
    return (
     <WordList/>
    )
   }
    
    return (
    <Container>
      {
       isLoading === true ? 
       <ActivityIndicator size="large" color="#00ff00" /> 
       :
       <View style={{paddingTop: 50}}>
       <H2>{`Вітаю ${user.name}`}</H2>
       <ExitButton style={{margin: 20}} onPress={exitHandler}>
         <Text>Вийти</Text>
       </ExitButton>
       <ScrollView>
       <H2>{`Словник`}</H2>
        { categories.map( (element:string, idx: number) => {
        return (
            <SingleCard key={idx} categoryTitle = {element}/>
        )
      })  }
       </ScrollView>
       </View>
      }  
    </Container>
  )
}

export default VocabularyScreen;
