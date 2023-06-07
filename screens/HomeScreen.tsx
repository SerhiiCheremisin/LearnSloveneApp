import React, { useEffect } from 'react'
import { Image } from 'react-native';
import { getLocalDataName } from '../services/functions';
import useCommonDispatch from '../services/hooks/useCommonDispatch';
import { setUserName } from '../redux/slices/userSlice';
import { ILocalStorageData } from '../services/types';
import { setUserDictionary } from '../redux/slices/userSlice';
import { setUserLogged } from '../redux/slices/userSlice';

import useLoggedUser from '../services/hooks/useLoggedUser';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import VocabularyScreen from './VocabularyScreen';
import TrainingScreen from './TrainingScreen';
import GrammarScreen from './GrammarScreen';

import LoginForm from '../components/LoginForm';

const HomeScreen = () => {
 const isUserLogged = useLoggedUser();
 const Tab = createBottomTabNavigator();
 const dispatch = useCommonDispatch();

  useEffect( () => {
    getLocalDataName().then( (data: ILocalStorageData | null) => {
      if (data === null) {
        return
      }
      dispatch(setUserName(data.userName));
      dispatch(setUserDictionary(data.userDictionary));
      dispatch(setUserLogged(true));
    })
  }, [])

  if (isUserLogged) {
    return (
    <NavigationContainer>
       <Tab.Navigator screenOptions={({route}) => ({
          headerShown: false,
          tabBarInactiveTintColor: '#1c130f',
          tabBarActiveTintColor: '#dc9d71',
          })} >
          <Tab.Screen name="Словник" component={VocabularyScreen} options={{ tabBarIcon: () => {
             return(
              <Image
              style={{ width: 20, height: 20}}
              source={require('./../assets/dictionary.png')}
            />
             ) 
          } }}/>
           <Tab.Screen name="Тренування" component={TrainingScreen} options={{ tabBarIcon: () => {
             return(
              <Image
              style={{ width: 20, height: 20 }}
              source={require('./../assets/analysis.png')}
            />
             ) 
          } }}/>
            <Tab.Screen name="Граматика" component={GrammarScreen} options={{ tabBarIcon: () => {
             return(
              <Image
              style={{ width: 20, height: 20 }}
              source={require('./../assets/book.png')}
            />
             ) 
          } }}/>

      </Tab.Navigator>
         </NavigationContainer> 
    )
  }
  return (
   <LoginForm/>
  )
}

export default HomeScreen;