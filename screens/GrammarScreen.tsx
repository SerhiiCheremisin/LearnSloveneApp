import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Container } from '../services/styles';
import useActiveGrammar from '../services/hooks/useActiveGrammar';
import useCommonDispatch from '../services/hooks/useCommonDispatch';
import { setActiveGrammarCategory } from '../redux/slices/grammarSlice';

//components
import VerbsDeclensions from '../components/grammar/VerbsDeclensions';
import NounsDeclensions from '../components/grammar/NounsDeclensions';

const GrammarScreen = () => {

 const dispatch = useCommonDispatch();
 const activeGrammar = useActiveGrammar();

  const grammarChooserHandler = (page:string):void => {
    dispatch(setActiveGrammarCategory(page));
  }

  if (activeGrammar === "") {
    return (
      <Container>
        <Pressable onPress={() => grammarChooserHandler("verbs")} style={styles.chooserButton}>
        <Text>Відмінювання дієслів</Text>
        </Pressable>
        <Pressable onPress={() => grammarChooserHandler("nouns")}  style={styles.chooserButton}>
        <Text>Відмінювання іменників</Text>
        </Pressable>
      </Container>
    )
  }

  if (activeGrammar === "verbs") {
     return <VerbsDeclensions/>
  }

  if (activeGrammar === "nouns") {
    return <NounsDeclensions/>
  }

}

const styles = StyleSheet.create({
    chooserButton : {
       display: "flex",
       width: 200,
       height: 100,
       justifyContent: "center",
       alignItems: "center",
       backgroundColor: "red",
       borderRadius: 15, 
       marginBottom: 15 
    }
})

export default GrammarScreen;
