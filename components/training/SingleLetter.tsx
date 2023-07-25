import React, { useEffect, useState } from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'
import { IRootDictionary } from '../../services/types'

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
        <Pressable onPress={ () => checkTheCorrectLetter(letter)} style={[styles.letter, answerCustomBG]}>
        <Text style={styles.alphabeticalItem}> {`${letter}`} </Text>   
       </Pressable>
  )
}

const styles = StyleSheet.create({
    letter : {
      width: 50,
      height: 50,
      borderRadius: 15,
      backgroundColor: "black",
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
    },
    alphabeticalItem: {
     color: "black",
     fontSize: 25
    }
  })

export default SingleLetter;