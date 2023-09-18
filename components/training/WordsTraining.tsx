import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import useUserData from '../../services/hooks/useUserData';
import { Text, Pressable, Box } from "@react-native-material/core";
import { IRootDictionary } from '../../services/types';
import { shuffleArray } from '../../services/functions';

import AnswerCard from './AnswerCard';

//styles
import { returnButton } from '../../services/styles/buttons';
import { h2, h3 } from '../../services/styles/typography';

const WordsTraining = () => {

    const [trainigDictionary, setTrainingDictionary] = useState<IRootDictionary[]>([]);
    const [correctAnswers, setCorrectAnswers] = useState<number>(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState<number>(0);
    const [pace, setPace] = useState<number>(0);
    const userData = useUserData();
    const {name, dictionary} = userData;
    const [answers, setAnswers] = useState<IRootDictionary[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const getAnswers = ():void => {
      const answers:IRootDictionary[] = dictionary.filter( (el:IRootDictionary) => el?.sloWord !== trainigDictionary[pace]?.sloWord);
      const shuffledAnswers:IRootDictionary[] = shuffleArray(answers);   
      const tempAnswers:IRootDictionary[] = [...shuffledAnswers.slice(0,3), ...[trainigDictionary[pace]]];
      const anotherShuffleArray:IRootDictionary[] = shuffleArray(tempAnswers);
      setAnswers(anotherShuffleArray);
  }

  const choseTenQuestions = ():void => {
    const shuffledArray = shuffleArray([...dictionary]);
    const trainingArray = shuffledArray.slice(0, 11);
    setTrainingDictionary(trainingArray);
  }
     useEffect(() => {
      choseTenQuestions();
    },[])

    useEffect( () => {
      getAnswers();
      setIsLoading(false);
    }, [trainigDictionary])

    useEffect( () => {
      getAnswers();
  }, [pace])

  const startNewGame = ():void => {
    choseTenQuestions();
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setPace(0);
  }
 
  const answerHandler = (answer: string) => {
    if (answer === trainigDictionary[pace].ukrWord) {
      setPace(pace+1);
      setCorrectAnswers(correctAnswers+1);
    }
      setPace(pace+1);
      setIncorrectAnswers(incorrectAnswers+1);
  }

const motivationText = ():string => {
  if (correctAnswers >= 8 ) {
    return "гарний результат."
  }
  if (correctAnswers >= 5 ) {
    return "треба трохи повчити."
  }
  if (correctAnswers >= 2 ) {
    return "знання наразі слабкі."
  }
  return "треба більше приділяти уваги навчанню."
}

  if (isLoading) {
    return <ActivityIndicator size="large" color="#00ff00" /> 
  }

  if (pace <= 9) {
    return (
        <Box>
          <Box style={{ alignItems: "center", paddingTop: 25}}>
           <Text style={h2}>{`${trainigDictionary[pace]?.sloWord.toUpperCase()}`}</Text>
            {answers.map( (el: IRootDictionary, idx: number) => {
             return(
              <AnswerCard key={idx} currentWord={el} respondFunction={answerHandler} correctRespond={trainigDictionary[pace].ukrWord}/>
             )
        })}
        </Box>
        </Box>
    )
  }

  if (pace === 10) {
    return (
      <Box style={{ alignItems: "center", paddingTop: 25}}>
        <Text style={h2}>Тест закінчився</Text> 
        <Text style={h3}>{`Кількість правильних відповідей : ${correctAnswers} , ${motivationText()}`}</Text> 
        <Pressable onPress={startNewGame} style={returnButton}><Text>Ще раз</Text></Pressable>  
      </Box>
    )
  }
}

export default WordsTraining;