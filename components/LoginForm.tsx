import React, {useState} from 'react'
import { View, Text, Alert, StyleSheet, Pressable, TextInput } from 'react-native';
import useCommonDispatch from '../services/hooks/useCommonDispatch';
import { setLocalDataName } from '../services/functions';
import { setUserDictionary, setUserLogged } from '../redux/slices/userSlice';

import useUserData from '../services/hooks/useUserData';
import { Box } from '@react-native-material/core';

const LoginForm = () => {

  const [userName, setUserName] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const dispatch = useCommonDispatch();

  const nameHandler = (text:string):void => {
    setUserName(text);
  }
  const passwordHandler = (text:string):void => {
    setUserPassword(text);
  }
  const buttonHandler = ():void => {
    if (userName === '' || userPassword === '') {
      Alert.alert('Якесь поле порожнє', 'Всі поля мають бути заповнені', [
        {
          text: 'Зрозумів',
        },
             ]);
        return     
    }
    setLocalDataName({
      userName: userName,
      userPassword: userPassword,
      userDictionary: []
    });
    dispatch(setUserLogged(true));
  }

  return (
    <Box style={styles.wrapper}>
      <Box style={styles.formBox}>
       <Text>Ім'я користувача</Text> 
       <TextInput style={styles.textInput}
         value={userName}
         onChangeText={nameHandler}/>
       <Text>Пароль користувача</Text> 
       <TextInput style={styles.textInput}
         secureTextEntry={true}
         value={userPassword}
         onChangeText={passwordHandler}
         />
         <Pressable style={styles.button}
          onPress={buttonHandler}
           >
           <Text>Увійти або зареєструватися</Text>
         </Pressable>
      </Box>
    </Box>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  }, 
  formBox : {
    height: "80%",
    width: "100%",
    borderRadius: 50,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#22c1c3",
  } ,
   textInput : {
    borderRadius: 50,
    height: 50,
    width: 300,
    borderWidth: 2,
    paddingLeft: 50,
   },
   button : {
    width: 200,
    height: 50,
    color: "black",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#71D5E4"
   }
 })

export default LoginForm;
