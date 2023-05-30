import { useEffect, useState } from 'react';
import {SafeAreaView, StyleSheet, TextInput, View, Pressable, Button, Text, ScrollView,Modal } from 'react-native';
import { IRootDictionary } from '../../services/types';
import { baseDictionary } from '../../services/rootDictionary';
import { H2, PressableButton } from '../../services/styles';
import useUserData from '../../services/hooks/useUserData';
import { addNewWord, getLocalDataName, setLocalDataName } from '../../services/functions';
import { ILocalStorageData } from '../../services/types';
import ErrorModal from './ErrorModal';
import useCommonDispatch from '../../services/hooks/useCommonDispatch';
import { setUserDictionary } from '../../redux/slices/userSlice';

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

const backgroundButtomRender = newWord.isIrregular ? "green" : "#71D5E4";
const backgroundButtomRenderNegative = newWord.isIrregular ? "#71D5E4" : "green";
    return(
        <ScrollView nestedScrollEnabled = {true}>
        <SafeAreaView>
          { isModalVisible && <ErrorModal setModalVisible={setIsModalVisible} isVisible={isModalVisible}/> }
         <View style={styles.rowWrapper}>
          { uniqueLetters.map( (letter:string, idx:number) => {
            return (
                <Pressable key={idx}
                 style={styles.button}
                 onPress={() => addUniqueLetter(letter)}
                 >
                 <Text>{letter.toLocaleUpperCase()}</Text>
                </Pressable>    
            ) }) }
         </View> 
         <TextInput
         style={styles.input}
         placeholder="Словенське слово"
         onChangeText={(value) => adjustNewWord("sloWord", value)}
         value={newWord.sloWord}
      />
      <TextInput
         style={styles.input}
         onChangeText={(value) => adjustNewWord("ukrWord", value)}
         value={newWord.ukrWord}
         placeholder="Переклад на українську"
      />
      <View>
        { newWord.category === "" ? <H2>Оберіть категорію</H2> : <H2>{`Обрана категорія: ${newWord.category}`}</H2> }
        <ScrollView nestedScrollEnabled = {true} style={styles.cateoryWrapper}>
           { selection.map( (el:string, idx:number) => {
                return(
                    <Pressable onPress={() => setNewWord( {...newWord, category: el}) } style={styles.choseCategotyButton} key={idx}>
                        <Text>{el}</Text>
                    </Pressable>
                )
           })} 
        </ScrollView>
      </View>
        <View style={styles.rowWrapper}>
            <Text>Неправильне дієслово?</Text>
            <Pressable onPress={() => setNewWord({...newWord, isIrregular: true})} style={[styles.pressableButton, {backgroundColor: backgroundButtomRender}]}><Text>Так</Text></Pressable>
            <Pressable onPress={() => setNewWord({...newWord, isIrregular: false})} style={[styles.pressableButton, {backgroundColor: backgroundButtomRenderNegative}]}><Text>Ні</Text></Pressable>
        </View>
        { newWord.isIrregular === true &&
                <View>
                <TextInput
                 style={styles.input}
                 onChangeText={(value) => irregularAdder( "present" , value)}
                 value={newWord.irregulars?.present}
                 placeholder="Теперішній час"
              />
                    <TextInput
                 style={styles.input}
                 onChangeText={(value) => irregularAdder("pastAndFuture", value)}
                 value={newWord.irregulars?.pastAndFuture}
                 placeholder="Минулий та майбутній"
              />
                </View> }
            <PressableButton onPress={addTheWord} style={{marginTop: 25, marginBottom: 55}}>
             <Text>Додати слово</Text>    
            </PressableButton>    
        </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    rowWrapper: {
     display: "flex",
     flexDirection: "row",
     justifyContent: "space-around",
        },
    button: {
      width: 70,
      height: 30,
      backgroundColor: "#71D5E4",
      justifyContent:"center",
      alignItems:"center",
      borderRadius: 10,
    },
    pressableButton: {
      width: 70,
      height: 30,
      display: "flex",
      justifyContent:"center",
      alignItems:"center",
      borderRadius: 10
    },
    choseCategotyButton : {
        width: "100%",
        height: 50,
        backgroundColor: "#71D5E4",
        marginBottom: 10,
        justifyContent:"center",
        alignItems:"center", 
        borderRadius: 10,
    },
    cateoryWrapper : {
        backgroundColor: "#fff",
        height: 230,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 25
    } 
});

export default AddWord;