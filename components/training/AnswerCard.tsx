import React, {useEffect, useState} from 'react'
import { H3 } from '../../services/styles';
import { StyleSheet, Pressable} from 'react-native';
import { IRootDictionary } from '../../services/types';

interface ISingleCardProps {
    currentWord : IRootDictionary,
    respondFunction: Function,
    correctRespond: string
}

const AnswerCard = ( { currentWord, respondFunction, correctRespond } : ISingleCardProps) => {
    
    const [customBackground, setCustomBackground] = useState<object>({
     backgroundColor: "#fff"
    })

    const respondHandler = (respondWord: string):void => {
       if (respondWord === correctRespond) {
        setCustomBackground({backgroundColor: "green"});
        setTimeout( () => {
          setCustomBackground({backgroundColor: "#fff"});
          respondFunction(respondWord)
        }, 1000);
        return
       }
       setCustomBackground({backgroundColor: "red"});
       setTimeout( () => {
        setCustomBackground({backgroundColor: "#fff"});
        respondFunction(respondWord);
       }, 1000);
       return
    } 

  return (
    <Pressable onPress={() => respondHandler(currentWord?.urkWord)} style={[styles.answerButton, customBackground]}>
    <H3>{currentWord?.urkWord.toUpperCase()}</H3>
   </Pressable>
  )
}

const styles = StyleSheet.create({
    answerButton: {
      width: 300,
      height:100,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      marginBottom:15
    }
  })
export default AnswerCard;