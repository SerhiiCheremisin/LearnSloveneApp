import React from 'react'
import useActiveGrammar from '../services/hooks/useActiveGrammar';
import useCommonDispatch from '../services/hooks/useCommonDispatch';
import { setActiveGrammarCategory } from '../redux/slices/grammarSlice';
import { Pressable, Text } from "@react-native-material/core";
import { chooserButton } from '../services/styles/buttons';

//components
import VerbsDeclensions from '../components/grammar/VerbsDeclensions';
import NounsDeclensions from '../components/grammar/NounsDeclensions';
import ToBeVerb from '../components/grammar/ToBeVerb';
import ChangeFormOvWord from '../components/grammar/ChangeFormOvWord';
import ViewContainer from '../components/generalComponent/ViewContainer';

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
      <ViewContainer>
        <Pressable onPress={() => grammarChooserHandler("verbs")} style={chooserButton}>
        <Text>Відмінювання дієслів</Text>
        </Pressable>
        <Pressable onPress={() => grammarChooserHandler("toBe")} style={chooserButton}>
        <Text>Дієслово "Бути" та "Мати"</Text>
        </Pressable>
        <Pressable onPress={() => grammarChooserHandler("nouns")} style={chooserButton}>
        <Text>Відмінювання іменників</Text>
        </Pressable>
        <Pressable onPress={() => grammarChooserHandler("changeWord")} style={chooserButton}>
        <Text>Зміна значення слів через префікси</Text>
        </Pressable>
      </ViewContainer>
    )
  }
}

export default GrammarScreen;
