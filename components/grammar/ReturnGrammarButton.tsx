import React from 'react'
import useCommonDispatch from '../../services/hooks/useCommonDispatch';
import { setActiveGrammarCategory } from '../../redux/slices/grammarSlice';
import { Text, Pressable } from "@react-native-material/core";
import { returnButton } from '../../services/styles/buttons';

const ReturnGrammarButton = () => {

const dispatch = useCommonDispatch();

  return (
      <Pressable style={returnButton} onPress={() => dispatch(setActiveGrammarCategory(""))}>
        <Text>Назад</Text>
      </Pressable>
  )
}

export default ReturnGrammarButton;