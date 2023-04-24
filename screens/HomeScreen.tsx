import React from 'react'
import { View, Text } from 'react-native';

import useLoggedUser from '../services/hooks/useLoggedUser';
import { Container } from '../services/styles';
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
                <Text>Main menu</Text>
              </View>
             ) 
          } }}/>
           <Tab.Screen name="Тренування слів" component={TrainingScreen} options={{ tabBarIcon: () => {
             return(
              <View>
                <Text>Training area</Text>
              </View>
             ) 
          } }}/>
            <Tab.Screen name="Граматика" component={GrammarScreen} options={{ tabBarIcon: () => {
             return(
              <View>
                <Text>Grammar</Text>
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