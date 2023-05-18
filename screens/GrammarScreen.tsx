import React from 'react'
import { Text, StyleSheet, Pressable } from 'react-native';
import { Container } from '../services/styles';
import useActiveGrammar from '../services/hooks/useActiveGrammar';
import useCommonDispatch from '../services/hooks/useCommonDispatch';
import { setActiveGrammarCategory } from '../redux/slices/grammarSlice';

//components
import VerbsDeclensions from '../components/grammar/VerbsDeclensions';
import NounsDeclensions from '../components/grammar/NounsDeclensions';
import ToBeVerb from '../components/grammar/ToBeVerb';
import ChangeFormOvWord from '../components/grammar/ChangeFormOvWord';

const GrammarScreen = () => {

 const dispatch = useCommonDispatch();
 const activeGrammar = useActiveGrammar();

  const grammarChooserHandler = (page:string):void => {
    dispatch(setActiveGrammarCategory(page));
  }

  switch( activeGrammar ) {
   case "verbs": 
    return <VerbsDeclensions/>
   case "toBe": 
    return <ToBeVerb/>
   case "nouns": 
    return <NounsDeclensions/>
   case "changeWord": 
    return <ChangeFormOvWord/>
   default : 
    return (
      <Container>
        <Pressable onPress={() => grammarChooserHandler("verbs")} style={styles.chooserButton}>
        <Text>Відмінювання дієслів</Text>
        </Pressable>
        <Pressable onPress={() => grammarChooserHandler("toBe")}  style={styles.chooserButton}>
        <Text>Дієслово "Бути" та "Мати"</Text>
        </Pressable>
        <Pressable onPress={() => grammarChooserHandler("nouns")}  style={styles.chooserButton}>
        <Text>Відмінювання іменників</Text>
        </Pressable>
        <Pressable onPress={() => grammarChooserHandler("changeWord")}  style={styles.chooserButton}>
        <Text>Зміна значення слів через префікси</Text>
        </Pressable>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
    chooserButton : {
       display: "flex",
       width: 300,
       height: 100,
       justifyContent: "center",
       alignItems: "center",
       backgroundColor: "#71D5E4",
       borderRadius: 15, 
       marginBottom: 15 
    }
})

export default GrammarScreen;
