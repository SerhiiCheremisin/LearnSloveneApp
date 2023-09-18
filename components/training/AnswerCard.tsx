import React, {useEffect, useState} from 'react'
import { Pressable, Text } from "@react-native-material/core";
import { IRootDictionary } from '../../services/types';
import { answerButton } from '../../services/styles/buttons';
import { h3 } from '../../services/styles/typography';

interface ISingleCardProps {
    currentWord : IRootDictionary,
    respondFunction: Function,
    correctRespond: string,
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
    <Pressable onPress={() => respondHandler(currentWord?.ukrWord)} style={[answerButton, customBackground]}>
    <Text style={h3}>{currentWord?.ukrWord.toUpperCase()}</Text>
   </Pressable>
  )
}
 
export default AnswerCard;