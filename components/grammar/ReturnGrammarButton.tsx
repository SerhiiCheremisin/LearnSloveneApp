import React from 'react'
import { Text, Pressable, StyleSheet } from 'react-native';
import useCommonDispatch from '../../services/hooks/useCommonDispatch';
import { setActiveGrammarCategory } from '../../redux/slices/grammarSlice';

const ReturnGrammarButton = () => {

const dispatch = useCommonDispatch();

  return (
      <Pressable style={styles.returnButton} onPress={() => dispatch(setActiveGrammarCategory(""))}>
        <Text>Назад</Text>
      </Pressable>
  )
}

const styles = StyleSheet.create({
    returnButton : {
      width: 150,
      height: 50,
      backgroundColor: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10,
      marginBottom: 10,
      borderRadius:10
    }
})

export default ReturnGrammarButton;