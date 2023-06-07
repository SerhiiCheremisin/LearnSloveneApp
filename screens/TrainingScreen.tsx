import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Container } from '../services/styles';
import { getLocalDataName } from '../services/functions';
import { ILocalStorageData } from '../services/types';
import useCommonDispatch from '../services/hooks/useCommonDispatch';
import { setUserDictionary } from '../redux/slices/userSlice';
import useUserData from '../services/hooks/useUserData';

//components
import ReturnToTraining from '../components/training/ReturnToTraining';
import MyDictionary from '../components/training/MyDictionary';
import WordsTraining from '../components/training/WordsTraining';
import AddWord from '../components/training/AddWord';

const TrainingScreen = () =>  {

 const dispatch = useCommonDispatch();
 const dictionary = useUserData();

 const [activeTraining, setActiveTraining] = useState<string>("");

useEffect( () => {
  getLocalDataName().then( (data:ILocalStorageData) => {
    dispatch(setUserDictionary(data.userDictionary));
  })
}, [])

const viewHandler = (page: string):void => {
  setActiveTraining(page)
}

const ViewTemplate = ( {children} ) => {
return(
  <ScrollView style={styles.basicView}>
  <ReturnToTraining getBack={setActiveTraining}/>
  {children}
 </ScrollView>
)
}

switch(activeTraining ) {
  case "" :
    if (dictionary.dictionary.length <= 9) {
      return (
        <Container>
          <Text>{`У Вас замало слів для тренувань, наразі у Вас всього ${dictionary.dictionary.length} слів у словнику`}</Text>
        </Container>
      )
    } else {
      return (
        <Container>
          <Pressable onPress={() => viewHandler("dictionary")} style={styles.trainingButton}>
          <Text>{`Мій словник`}</Text>
          </Pressable>
          <Pressable onPress={() => viewHandler("wordsTraining")} style={styles.trainingButton}>
          <Text>{`Тренування слів`}</Text>
          </Pressable>
          <Pressable onPress={() => viewHandler("addWord")} style={styles.trainingButton}>
          <Text>{`Додати своє слово`}</Text>
          </Pressable>
        </Container>
      )
    }
  case "dictionary" :
    return (
     <ViewTemplate>
      <MyDictionary/>
     </ViewTemplate>
    );
  case "wordsTraining" : 
  return (
    <ViewTemplate>
     <WordsTraining/>
   </ViewTemplate>
  );
  case "addWord" : 
  return (
    <ViewTemplate>
    <AddWord/>
    </ViewTemplate>
  );
  }
}
 
const styles = StyleSheet.create({
  trainingButton : {
    width: 250,
    height: 50,
    backgroundColor: "#a8692a",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    padding: 5
  },
  basicView : {
    display: "flex",
    paddingTop: 50,
    paddingBottom: 250,
    backgroundColor: "#a8692a",
    paddingHorizontal: 10
   }
})

export default TrainingScreen;
