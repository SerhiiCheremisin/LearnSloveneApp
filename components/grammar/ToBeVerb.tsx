import React from 'react'
import { scrollViewMargin } from '../../services/styles/views';
import { ScrollView } from 'react-native';
import ViewContainer from '../generalComponent/ViewContainer';
import ReturnGrammarButton from './ReturnGrammarButton';
import { beAndHaveRules, beInTheFuture } from '../../services/grammarRules';
import { Text , Box } from "@react-native-material/core";
import { tableHeader } from '../../services/styles/typography';
import { tableRow, tableCellSmall, tableCell } from '../../services/styles/views';

const ToBeVerb = () => {
  return (
    <ViewContainer>
    <ScrollView style={scrollViewMargin}>
      <ReturnGrammarButton/> 
      <Text style={tableHeader}>ДІЄСЛОВА БУТИ ТА МАТИ (ПОЗИТИВНА ТА НЕГАТИВНА ФОРМА ДЛЯ ТЕПЕРІШНЬОГО ТА МИНУЛОГО ЧАСУ)</Text>
      <Box style={tableRow}>
      { beAndHaveRules.head.ukr.map( (el:string, idx:number) => {
        return (
          <Box style={tableCellSmall} key={idx}>
          <Text>{el}</Text>
          </Box>
        )
      }) }
      </Box>
     { beAndHaveRules.body.map( (el : string[], idx:number) => {
         return (
           <Box key={idx} style={tableRow}>
            {  el.map( (item:string, idx:number) => {
          return (
            <Box style={tableCellSmall} key={idx}>
              <Text>{item}</Text>
            </Box>
          )
         }) }
           </Box>
         )
     }) }
         <Text style={tableHeader}>ДІЄСЛОВО БУТИ (ПОЗИТИВНА ТА НЕГАТИВНА ФОРМА ДЛЯ МАЙБУТНЬОГО)</Text>
         { beInTheFuture.map( (el: string[], idx:number) => {
           return (
            <Box key={idx} style={tableRow}>
             { el.map( (item:string, idx:number) => {
              return (
                <Box style={tableCell} key={idx}>
                <Text>{item}</Text>
                 </Box>
              )
             }) }
            </Box>
           )
         } ) }
      </ScrollView>
     </ViewContainer>

  )
}


export default ToBeVerb;