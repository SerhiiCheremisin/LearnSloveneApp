import { ActivityIndicator, View, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { IRootDictionary } from "../../services/types";
import useUserData from "../../services/hooks/useUserData";
import { shuffleArray } from "../../services/functions";

const WordConstructor = () => {

    const [wordCount, setWordCount] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [questions, setQuestions] = useState<IRootDictionary[]>([]);
    const [letters, setLetters] = useState<string[]>([]);

    const userData = useUserData();
    const {name, dictionary} = userData;

    const choseTenQuestions = ():void => {
        const shuffledArray = shuffleArray([...dictionary]);
        const trainingArray = shuffledArray.slice(0, 11);
        setQuestions(trainingArray);
        setIsLoading(false);
      }

    const makeLetterArray = ():void =>{
        const letterArray: string[] = questions[wordCount]?.sloWord.split(''); 
        console.log(letterArray)
        setLetters(letterArray);
    }    
         useEffect(() => {
          makeLetterArray();
          choseTenQuestions();
        },[])

        useEffect(() => {
            makeLetterArray();
        },[wordCount])

    if (isLoading) {
        return <ActivityIndicator size="large" color="#00ff00" /> 
      }

  return(
    <View style={styles.constructorWrapper}>
      <View style={styles.button}>
      <Text style={styles.text}>{questions[wordCount].ukrWord.toUpperCase()}</Text>
      </View>  
      <View style={styles.resultField}>
       
      </View>
      <View style={styles.letterBox}>
       { letters.length !== 0 && letters.map( (letter:string, idx:number) => {
        return (
          <View key={idx} style={styles.letter}>
           <Text> {`${letter}`} </Text>   
          </View>
        )
       }) }
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
  constructorWrapper : {
    alignItems: "center",
    display: "flex",
    justifyContent: "center"
  } ,
  text: {
    fontSize: 35
  } ,
  button: {
   width: 300,
   height:100,
   backgroundColor:"white",
   alignItems: "center",
   display: "flex",
   justifyContent: "center",
   borderRadius: 15
  } , 
  resultField: {
   width: 300,
   height:200,
   backgroundColor:"white",
   alignItems: "center",
   display: "flex",
   justifyContent: "center",
   borderRadius: 15,
   marginTop: 10
  } ,
  letterBox: {
    width: 300,
    height:200,
    backgroundColor:"white",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 15,
    marginTop: 10
  } ,
  letter : {
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: "blue",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  }
})

export default WordConstructor;