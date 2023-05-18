import AsyncStorage from '@react-native-async-storage/async-storage';
import { ILocalStorageData, IRootDictionary } from './types';

export const setLocalDataName = async (value:ILocalStorageData) => {
    try {
      const wholeUserData = JSON.stringify(value)
      await AsyncStorage.setItem('userName', wholeUserData);
    } catch (e) {
      console.log(e);
    }
  }

  export const getLocalDataName = async () => {
    try {
        const userName = await AsyncStorage.getItem('userName');
        return userName != null ? JSON.parse(userName) : null;
    } catch(e) {
      console.log(e);
    }
  }

  export const removeLocalUser = async () => {
    try {
      await AsyncStorage.removeItem('userName')
    } catch(e) {
      console.log(e)
    }
   }

   export const addNewWord = async ( data: ILocalStorageData ) => {
    try {
      await AsyncStorage.setItem('userName', JSON.stringify(data));
    } catch(e) {
      console.log(e)
    }
   }

   export const shuffleArray = (array: IRootDictionary[]) => {
    return [...array].sort(() => Math.random() - 0.5);
   }