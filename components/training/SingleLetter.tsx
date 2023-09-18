import React, { useEffect, useState } from 'react';
import { IRootDictionary } from '../../services/types';
import { Pressable, Text } from "@react-native-material/core";
import { singleLetter } from '../../services/styles/buttons';
interface ISingleLetterProps {
    letter : string,
    answerIndex: number,
    setAnswerIndex: Function,
    questions : IRootDictionary[],
    wordCount: number,
    setAnswer: Function
}

const SingleLetter = ( {letter, answerIndex, setAnswerIndex , questions, wordCount, setAnswer } : ISingleLetterProps ):JSX.Element => {
    const [answerCustomBG, setAnswerCustomBG] = useState<object>({
        backgroundColor: "grey"
       });
    const [changeBG, setChangeBG] = useState<boolean>(false);   
    const defaultBG = {
        backgroundColor: "grey"
      };
    const correctBG = {
        backgroundColor: "green"
      };
    const incorrectBG = {
        backgroundColor: "red"
      };

      useEffect( () => {
         if (changeBG) {
            makeCustomBGDefault();
            setChangeBG(false);
            return
         }
         return
      },[changeBG])

    const makeCustomBGDefault = () => {
        setTimeout( () => {
          setAnswerCustomBG( {...defaultBG});
        },500)
      }  

      const checkTheCorrectLetter = (letter:string):void => {
        if (letter.toLowerCase() === questions[wordCount].sloWord[answerIndex].toLowerCase()) {  
        setAnswer(questions[wordCount].sloWord.slice(0, answerIndex+1))
        setAnswerIndex(answerIndex+1);
        setAnswerCustomBG( {...correctBG});
        setChangeBG(true);
        return
        }
        setChangeBG(true); 
        setAnswerCustomBG( {...incorrectBG});
        return
    }

    return (
        <Pressable onPress={ () => checkTheCorrectLetter(letter)} style={[singleLetter, answerCustomBG]}>
        <Text style={{ color: "black", fontSize: 25 }}> {`${letter}`} </Text>   
       </Pressable>
  )
}

export default SingleLetter;