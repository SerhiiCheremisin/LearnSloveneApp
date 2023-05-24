import React, {useState} from 'react'
import { View, Text, Alert } from 'react-native';
import { Container } from '../services/styles';
import { TextField, TextForm, PressableButton } from '../services/styles';
import useCommonDispatch from '../services/hooks/useCommonDispatch';
import { setLocalDataName } from '../services/functions';
import { setUserDictionary, setUserLogged } from '../redux/slices/userSlice';

import useUserData from '../services/hooks/useUserData';

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
    <Container>
      <TextForm>
       <Text>Ім'я користувача</Text> 
       <TextField 
         value={userName}
         onChangeText={nameHandler}/>
       <Text>Пароль користувача</Text> 
       <TextField 
         secureTextEntry={true}
         value={userPassword}
         onChangeText={passwordHandler}
         />
         <PressableButton
         style={{backgroundColor: "#71D5E4"}}
          onPress={buttonHandler}
           >
           <Text>Увійти або зареєструватися</Text>
         </PressableButton>
      </TextForm>
    </Container>
  )
}

export default LoginForm;
