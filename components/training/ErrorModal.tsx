import React from 'react'
import {SafeAreaView, StyleSheet, TextInput, View, Pressable, Button, Text, Alert ,Modal } from 'react-native';
import { errorType } from '../../services/types';

interface IErrorModalProps {
    setModalVisible : Function,
    isVisible: boolean,
}

const  ErrorModal = ( { setModalVisible, isVisible } : IErrorModalProps) => {
   let errorDescription = "";
   switch(errorType) {
    case "basic" : 
    errorDescription = 'Поле "Слово" або "Переклад" порожнє, чи Ви не вибрали категорію';
    break;
    case "irregular" :
    errorDescription = `При додаванні неправильного дієслова, обов'язкове додавання форм дієслова`;
    break;
    }
  
    return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={isVisible}
    onRequestClose={() => {
      Alert.alert('Modal has been closed.');
      setModalVisible(!isVisible);
    }}>
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>{`Якесь із полів порожнє, або Ви не обрали категорію`}</Text>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(!isVisible)}>
          <Text style={styles.textStyle}>Зрозумів</Text>
        </Pressable>
      </View>
    </View>
  </Modal>
  )
}
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });
export default ErrorModal;
