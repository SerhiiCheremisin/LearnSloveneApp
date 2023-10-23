import React from 'react'
import { ScrollView } from 'react-native'
import ReturnGrammarButton from './ReturnGrammarButton';
import { IChangeFormCommon, IChangeFormsParticularCases } from '../../services/types';
import { Box, Text } from "@react-native-material/core";
import { changeFormCommon, changeFormsParticularCases } from '../../services/grammarRules';
import ViewContainer from '../generalComponent/ViewContainer';
import { scrollViewMargin } from '../../services/styles/views';

const ChangeFormOvWord = () => {

const changeFormOvWordPadding = {
  paddingBottom: 10
}

  return (
    <ViewContainer>
    <ScrollView style={scrollViewMargin}>
     <ReturnGrammarButton/>  
         <Text variant="h4" style={changeFormOvWordPadding}>Ось список найпоширеніших:</Text>   
         { changeFormCommon.map( (el:IChangeFormCommon) => {
             return (
              <Text key={el?.ukr} variant="h5">{el?.ukr}</Text>
             )
         }) }  
         {
           changeFormsParticularCases.map( (element:IChangeFormsParticularCases, idx:number) => {
              return(
                <Box key={idx}>
                 <Text variant="h4" style={changeFormOvWordPadding}>{element.exampleUkr}</Text>
                 { element.cases.map( (item:IChangeFormCommon) => {
                    return <Text key={item?.ukr} variant="h5">{item?.ukr}</Text>
                 }) }
                </Box>
              )
           })
         }
         </ScrollView>
     </ViewContainer>   

  )
}

export default ChangeFormOvWord;
