import React, { useEffect } from 'react'
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getLocalDataName } from '../services/functions';
import useCommonDispatch from '../services/hooks/useCommonDispatch';
import { setUserName } from '../redux/slices/userSlice';
import { ILocalStorageData } from '../services/types';
import { setUserDictionary } from '../redux/slices/userSlice';
import { setUserLogged } from '../redux/slices/userSlice';

import useLoggedUser from '../services/hooks/useLoggedUser';
import useUserData from '../services/hooks/useUserData';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import VocabularyScreen from './VocabularyScreen';
import TrainingScreen from './TrainingScreen';
import GrammarScreen from './GrammarScreen';

import LoginForm from '../components/LoginForm';

const HomeScreen = () => {
 const isUserLogged = useLoggedUser();
 const user = useUserData();
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
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'red',
        })} >
          <Tab.Screen name="Словник" component={VocabularyScreen} options={{ tabBarIcon: () => {
             return(
              <View>
                <Text>Словник</Text>
              </View>
             ) 
          } }}/>
           <Tab.Screen name="Тренування слів" component={TrainingScreen} options={{ tabBarIcon: () => {
             return(
              <View>
                <Text>Тренування слів</Text>
              </View>
             ) 
          } }}/>
            <Tab.Screen name="Граматика" component={GrammarScreen} options={{ tabBarIcon: () => {
             return(
              <View>
                <Text>Граматика</Text>
              </View>
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