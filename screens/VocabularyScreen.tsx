import React, {useEffect, useState} from 'react';
import { View, ActivityIndicator, ScrollView } from 'react-native';
import { Pressable, Text } from "@react-native-material/core";
//Styles
import { mainExitButton } from '../services/styles/buttons';
import { h2 } from '../services/styles/typography';
//Components
import SingleCard from '../components/SingleCard';
import WordList from '../components/WordList';
import ViewContainer from '../components/generalComponent/ViewContainer';
//Other
import { baseDictionary } from '../services/rootDictionary';
import { removeLocalUser, getLocalDataName } from '../services/functions';
import useDictionaryData from '../services/hooks/useDictionaryData';
import useCommonDispatch from '../services/hooks/useCommonDispatch';
import { setUserLogged, setUserName } from '../redux/slices/userSlice';
import { IRootDictionary } from '../services/types';
import useUserData from '../services/hooks/useUserData';


const VocabularyScreen = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [categories, setCategories] = useState<string[]>([]);
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
    <ViewContainer>
      {
       isLoading === true ? 
       <ActivityIndicator size="large" color="#00ff00" /> 
       :
       <View style={{paddingTop: 50}}>
       <Text style={h2}>{`Вітаю ${user.name}`}</Text>
       <Pressable style={mainExitButton} onPress={exitHandler}>
         <Text>Вийти</Text>
       </Pressable>
       <ScrollView>
       <Text style={h2}>{`Словник`}</Text>
        { categories.map( (element:string, idx: number) => {
        return (
            <SingleCard key={idx} categoryTitle = {element}/>
        )
      })  }
       </ScrollView>
       </View>
      }  
    </ViewContainer>
  )
}

export default VocabularyScreen;
