import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

interface returnToTrainingProps {
    getBack : Function
}

const ReturnToTraining = ( { getBack }: returnToTrainingProps ) => {
  
const returnHandler = () => {
    getBack("")
}

  return (
    <Pressable onPress={returnHandler} style={styles.returnButton}>
     <Text>Назад</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    returnButton : {
      width: 150,
      height: 50,
      backgroundColor: "#c8772f",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10,
      marginBottom: 10,
      borderRadius:10
    }
})

export default ReturnToTraining;
