import { ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import { IRootDictionary } from "../../services/types";
import useUserData from "../../services/hooks/useUserData";
import { shuffleArray } from "../../services/functions";
import SingleLetter from "./SingleLetter";
import { Text, Box } from "@react-native-material/core";

import { letterAnswerBox } from "../../services/styles/views";
import { h2 } from "../../services/styles/typography";

const WordConstructor = () => {

    const [wordCount, setWordCount] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [questions, setQuestions] = useState<IRootDictionary[]>([]);
    const [letters, setLetters] = useState<string[]>([]);
    const [answer, setAnswer] = useState<string>('');
    const [answerIndex , setAnswerIndex] = useState<number>(0);
    const [answerBG, setAnswerBG] = useState<object>( { backgroundColor : "white"})

    const userData = useUserData();
    const {name, dictionary} = userData;

    const choseTenQuestions = ():void => {
        const shuffledArray = shuffleArray([...dictionary]);
        const trainingArray = shuffledArray.slice(0, 11);
        setQuestions(trainingArray);
        setIsLoading(false);
      }

    const makeLetterArray = ():void => {
        const letterArray: string[] = questions[wordCount]?.sloWord.split('').sort( () => Math.random() - 0.5); 
        setLetters(letterArray);
    }    
         useEffect(() => {
          choseTenQuestions();
        },[])

    useEffect( () => {
      if (answer === questions[wordCount]?.sloWord) {
        setAnswerBG( {...{backgroundColor : "green"} }) 
       setTimeout( () => {
        setWordCount(wordCount+1);
        setAnswerIndex(0);
        setAnswer('');
        setAnswerBG({...{ backgroundColor : "white"}})
       }, 500)
      }
    }, [answer])

        useEffect(() => {
          makeLetterArray();
      },[questions])

        useEffect(() => {
          if (wordCount > 10) {
            choseTenQuestions();
            setWordCount(0);
           }
            makeLetterArray();
        },[wordCount])

    if (isLoading) {
        return <ActivityIndicator size="large" color="#00ff00" /> 
      }

  return(
    <Box style={ { alignItems: "center", display: "flex", justifyContent: "center"} }>
      <Text style={h2}>{questions[wordCount]?.ukrWord.toUpperCase()}</Text>
      <Box style={[letterAnswerBox, answerBG ]}>
       <Text>{`${answer}`}</Text>
      </Box>
      <Box style={letterAnswerBox}>
       { Array.isArray(letters) && letters.map( (letter:string, idx:number) => {
            return (
               <SingleLetter key={idx} letter={letter} setAnswer={setAnswer} answerIndex={answerIndex} setAnswerIndex={setAnswerIndex} questions={questions} wordCount={wordCount} />
            )
           }) }
     </Box>
    </Box>
  )
}

export default WordConstructor;