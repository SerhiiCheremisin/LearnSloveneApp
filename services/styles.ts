import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import styled from 'styled-components';


export const Container = styled.View`
 flex: 1;
 justify-content: center;
 align-items: center;
 background-color: #8a09c1;
`
export const TextField = styled.TextInput`
 border-radius: 50px;
 height: 50px;
 width: 300px;
 border: 2px solid black;
 padding-left: 50px;
`
export const TextForm = styled.View`
 height: 550px;
 width: 100%;
 border-radius: 50px;
 border: 2px solid black;
 justify-content: center;
 align-items: center;
 gap: 10px;
 background-color: #22c1c3;
`

export const PressableButton = styled.Pressable`
  width: 200px;
  height: 50px;
  color: black;
  border-radius: 15px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`

export const CardWrapper = styled.View`
  width: 400px;
  height: 700px;
  flex-direction: column;
  gap: 30px;
  border: 1px solid #fff;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`

export const Card = styled.View`
  width: 350px;
  height: 150px;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 20px;
`

export const H2 = styled.Text`
  font-size: 30px;
  padding-bottom: 50px;
`

export const WordItem = styled.View`
  width: 400px;
  height: 300px;
  border: 2px solid blue;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  flex-direction: column;
`

export const WordItemPartition = styled.Text`
 font-size : 20px;
 margin-bottom: 10px;
`
export const WordAdder = styled.View`
 display: flex;
 justify-content: center;
 align-items: center;
 width: 250px;
 height: 50px;
 border: 1px solid black;
 margin-top: 20px;
`

export const TableRow = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
  border: 1px solid black;
`

export const TableCell = styled.View`
  display: flex;
  width: 25%;
  height: 100%;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
`

export const TableNounTitleBlock = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 70px;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
`
export const TableNounTitle = styled.Text`
font-size: 30px;
`
export const SmallTableNounTitle = styled.Text`
font-size: 17px;
font-weight: bold;
`