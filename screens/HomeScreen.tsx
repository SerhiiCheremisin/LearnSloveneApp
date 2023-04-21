import React from 'react'
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reduxStore';

const HomeScreen = () => {
  const isUserLogged:boolean = useSelector( (state:RootState) => state.userSlice.isUserLogged);
  return (
    <View>
    <Text>{`HomeScreen`}</Text>
    </View>
  )
}

export default HomeScreen;