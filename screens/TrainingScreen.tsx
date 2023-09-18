import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { Pressable, Text } from "@react-native-material/core";
import { getLocalDataName } from '../services/functions';
import { ILocalStorageData } from '../services/types';
import useCommonDispatch from '../services/hooks/useCommonDispatch';
import { setUserDictionary } from '../redux/slices/userSlice';
import useUserData from '../services/hooks/useUserData';
import { basicTrainingTempalte } from '../services/styles/views';
import { chooserButton } from '../services/styles/buttons';

//components
import ReturnToTraining from '../components/training/ReturnToTraining';
import MyDictionary from '../components/training/MyDictionary';
import WordsTraining from '../components/training/WordsTraining';
import AddWord from '../components/training/AddWord';
import WordConstructor from '../components/training/WordConstructor';
import ViewContainer from '../components/generalComponent/ViewContainer';

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

const ViewTemplate = ( {children}:any ) => {
return(
  <ScrollView style={basicTrainingTempalte}>
  <ReturnToTraining getBack={setActiveTraining}/>
  {children}
 </ScrollView>
)
}

switch(activeTraining ) {
  case "" :
    if (dictionary.dictionary.length <= 9) {
      return (
        <ViewContainer>
          <Text>{`У Вас замало слів для тренувань, наразі у Вас всього ${dictionary.dictionary.length} слів у словнику`}</Text>
        </ViewContainer>
      )
    } else {
      return (
        <ViewContainer>
          <Pressable onPress={() => viewHandler("dictionary")} style={chooserButton}>
          <Text>{`Мій словник`}</Text>
          </Pressable>
          <Pressable onPress={() => viewHandler("wordsTraining")} style={chooserButton}>
          <Text>{`Тренування слів`}</Text>
          </Pressable>
          <Pressable onPress={() => viewHandler("constructor")} style={chooserButton}>
          <Text>{`Конструктор слів`}</Text>
          </Pressable>
          <Pressable onPress={() => viewHandler("addWord")} style={chooserButton}>
          <Text>{`Додати своє слово`}</Text>
          </Pressable>
        </ViewContainer>
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
  case "constructor" :
    return (
      <ViewTemplate>
      <WordConstructor/>
      </ViewTemplate>
    );
  }
}
 
export default TrainingScreen;
