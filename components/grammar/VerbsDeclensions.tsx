import React from 'react'
import {  ScrollView } from 'react-native';
import ReturnGrammarButton from './ReturnGrammarButton';
import { verbDeclension } from '../../services/grammarRules';
import ViewContainer from '../generalComponent/ViewContainer';
import { scrollViewMargin, tableCellMedium, tableRow } from '../../services/styles/views';
import { Text , Box } from "@react-native-material/core";

const VerbsDeclensions = () => {

  return (
    <ViewContainer> 
   <ScrollView style={scrollViewMargin}>
      <ReturnGrammarButton/>
       { verbDeclension.map( (el, idx) => {
             return (
              <Box style={tableRow} key={idx}>
              <Box style={tableCellMedium}><Text>{el[0]}</Text></Box>  
              <Box style={tableCellMedium}><Text>{el[1]}</Text></Box> 
              <Box style={tableCellMedium}><Text>{el[2]}</Text></Box> 
              <Box style={tableCellMedium}><Text>{el[3]}</Text></Box>
              </Box> 
             )
       }) }
           </ScrollView> 
    </ViewContainer>
  )
}

export default VerbsDeclensions;