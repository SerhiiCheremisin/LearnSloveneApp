import AsyncStorage from '@react-native-async-storage/async-storage';
import { ILocalStorageData } from './types';

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