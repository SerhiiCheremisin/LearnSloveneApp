import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, ActivityIndicator, Modal, Alert } from 'react-native';
import useUserData from '../../services/hooks/useUserData';
import { IRootDictionary } from '../../services/types';
import { shuffleArray } from '../../services/functions';
import { H2, H3 } from '../../services/styles';
import AnswerCard from './AnswerCard';

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
    if (answer === trainigDictionary[pace].urkWord) {
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
        <View>
          <View style={styles.respondView}>
           <H2>{`${trainigDictionary[pace]?.sloWord.toUpperCase()}`}</H2>
           <View>
            {answers.map( (el: IRootDictionary, idx: number) => {
            return(
             <AnswerCard key={idx} currentWord={el} respondFunction={answerHandler} correctRespond={trainigDictionary[pace].urkWord}/>
            )
        })}
       </View>
        </View>
        </View>
    )
  }

  if (pace === 10) {
    return (
      <View style={styles.respondView}>
        <H2>Тест закінчився</H2> 
        <H3>{`Кількість правильних відповідей : ${correctAnswers} , ${motivationText()}`}</H3> 
        <Pressable onPress={startNewGame} style={styles.runAgainButton}><Text>Ще раз</Text></Pressable>  
      </View>
    )
  }
}
const styles = StyleSheet.create({
  runAgainButton: {
    width: 300,
    height:50,
    marginTop: 20,
    backgroundColor: "#fff" ,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom:15
  },
  respondView: {
    alignItems: "center", 
    paddingTop: 25,
  }
})

export default WordsTraining;