import React, {useEffect, useState} from 'react';
import { View, Text, ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
//Styles
import { Container, CardWrapper, H2 } from '../services/styles';
//Components
import SingleCard from '../components/SingleCard';
import WordList from '../components/WordList';

import { baseDictionary } from '../services/rootDictionary';
import { IRootDictionary } from '../services/types';
import useDictionaryData from '../services/hooks/useDictionaryData';
import useUserData from '../services/hooks/useUserData';
import { getLocalDataName } from '../services/functions';
import { setUserName } from '../redux/slices/userSlice';
import useCommonDispatch from '../services/hooks/useCommonDispatch';

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
       <ScrollView style={style.scrollBlock}>
       <H2>{`Словник`}</H2>
        { categories.map( (element:string) => {
        return (
            <SingleCard categoryTitle = {element}/>
        )
      })  }
       </ScrollView>
       </View>
      }  
    </Container>
  )
}

const style = StyleSheet.create({
  scrollBlock: {
    
  }
})

export default VocabularyScreen;
