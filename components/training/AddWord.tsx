import { useEffect, useState } from 'react';
import { SafeAreaView, TextInput, ScrollView } from 'react-native';
import { IRootDictionary } from '../../services/types';
import { baseDictionary } from '../../services/rootDictionary';
import useUserData from '../../services/hooks/useUserData';
import { addNewWord, getLocalDataName } from '../../services/functions';
import { ILocalStorageData } from '../../services/types';
import useCommonDispatch from '../../services/hooks/useCommonDispatch';
import { setUserDictionary } from '../../redux/slices/userSlice';
import { Pressable, Text, Box } from "@react-native-material/core";
//styles
import { inputView, rowWrapperView, categoryWrapper, addwordWrapper } from '../../services/styles/views';
import { returnButton, singleAdderButton } from '../../services/styles/buttons';
import { h2 } from '../../services/styles/typography';

import ErrorModal from './ErrorModal';

const AddWord = () => {

 const emptyState: IRootDictionary = {
    isIrregular:false, 
    sloWord: "",
    ukrWord: "",
    category: "",
    irregulars: {
        present: "",
        pastAndFuture: ""
    }
}
const [newWord, setNewWord] = useState<IRootDictionary>(emptyState);
const [selection, setSelection] = useState<string[]>([]);
const [password, setPassword] = useState<string>("");
const user = useUserData();
const dispatch = useCommonDispatch();
const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

useEffect( () => {
    const categories: string[] = [];
    const categoriesSet = new Set();
    baseDictionary.map( (word:IRootDictionary) => {
     if (categoriesSet.has(word.category)) {
         return
     }
     categoriesSet.add(word.category);
    });
    categoriesSet.forEach( (category:string) => {
     categories.push(category);
    })
    getLocalDataName().then( data => {
        setPassword(data.userPassword);
        setSelection(categories);
    })
},[])

const uniqueLetters: string[] = ["č", "š", "ž", ]
const addTheWord = ():void => {
  if (newWord.sloWord === "" || newWord.ukrWord === "" || newWord.category === "" ) {
    setIsModalVisible(true);
    return
  }
  if (newWord.isIrregular === true && (newWord.irregulars.present === "" || newWord.irregulars.pastAndFuture === "") ) {
    setIsModalVisible(true);
      return
  }
  const sendDataToPhone = [...user.dictionary, ...[newWord]];
  const addedgWord:ILocalStorageData = {
    userName: user.name,
    userPassword: password,
    userDictionary: sendDataToPhone
  }; 
  addNewWord(addedgWord);
  dispatch(setUserDictionary(sendDataToPhone));
  setNewWord(emptyState);
}

const addUniqueLetter = (letter: string):void => {
 setNewWord( {...newWord, sloWord:`${newWord.sloWord}${letter}`});
}

const adjustNewWord = ( key:string, value: string ): void => {
    setNewWord( {...newWord, [key]: value});
}

const irregularAdder = (key: string, value: string):void => {
    const irregularValue = {...newWord.irregulars , [key]: value};
    const newState = {...newWord, irregulars:irregularValue };
    setNewWord(newState);
}

const backgroundButtomRender = newWord.isIrregular ? "green" : "#ffffff";
const backgroundButtomRenderNegative = newWord.isIrregular ? "#ffffff" : "green";
    return(
        <ScrollView nestedScrollEnabled = {true}>
        <SafeAreaView>
          { isModalVisible && <ErrorModal setModalVisible={setIsModalVisible} isVisible={isModalVisible}/> }
         <Box style={rowWrapperView}>
          { uniqueLetters.map( (letter:string, idx:number) => {
            return (
                <Pressable key={idx}
                 style={singleAdderButton}
                 onPress={() => addUniqueLetter(letter)}
                 >
                 <Text>{letter.toLocaleUpperCase()}</Text>
                </Pressable>    
            ) }) }
         </Box> 
         <TextInput
         style={inputView}
         placeholder="Словенське слово"
         onChangeText={(value) => adjustNewWord("sloWord", value)}
         value={newWord.sloWord}
      />
      <TextInput
         style={inputView}
         onChangeText={(value) => adjustNewWord("ukrWord", value)}
         value={newWord.ukrWord}
         placeholder="Переклад на українську"
      />
      <Box>
        { newWord.category === "" ? <Text style={h2}>Оберіть категорію</Text> : <Text style={h2}>{`Обрана категорія: ${newWord.category}`}</Text> }
        <ScrollView nestedScrollEnabled = {true} style={addwordWrapper}>
           { selection.map( (el:string, idx:number) => {
                return(
                    <Pressable onPress={() => setNewWord( {...newWord, category: el}) } style={categoryWrapper} key={idx}>
                        <Text>{el}</Text>
                    </Pressable>
                )
           })} 
        </ScrollView>
      </Box>
        <Box style={rowWrapperView}>
            <Text>Неправильне дієслово?</Text>
            <Pressable onPress={() => setNewWord({...newWord, isIrregular: true})} style={[singleAdderButton, {backgroundColor: backgroundButtomRender}]}><Text>Так</Text></Pressable>
            <Pressable onPress={() => setNewWord({...newWord, isIrregular: false})} style={[singleAdderButton, {backgroundColor: backgroundButtomRenderNegative}]}><Text>Ні</Text></Pressable>
        </Box>
        { newWord.isIrregular === true &&
                <Box>
                <TextInput
                 style={inputView}
                 onChangeText={(value) => irregularAdder( "present" , value)}
                 value={newWord.irregulars?.present}
                 placeholder="Теперішній час"
              />
                    <TextInput
                 style={inputView}
                 onChangeText={(value) => irregularAdder("pastAndFuture", value)}
                 value={newWord.irregulars?.pastAndFuture}
                 placeholder="Минулий та майбутній"
              />
                </Box> }
            <Pressable style={returnButton} onPress={addTheWord}>
             <Text>Додати слово</Text>    
            </Pressable>    
        </SafeAreaView>
        </ScrollView>
    )
}

export default AddWord;