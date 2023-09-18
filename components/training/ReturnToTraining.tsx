import React from 'react';
import { Pressable, Text } from "@react-native-material/core";
import { returnButton } from '../../services/styles/buttons';

interface returnToTrainingProps {
    getBack : Function
}

const ReturnToTraining = ( { getBack }: returnToTrainingProps ) => {
  
const returnHandler = () => {
    getBack("")
}

  return (
    <Pressable onPress={returnHandler} style={returnButton}>
     <Text>Назад</Text>
    </Pressable>
  )
}

export default ReturnToTraining;
