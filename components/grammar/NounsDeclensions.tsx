import React from 'react'
import { ScrollView } from 'react-native';
import ReturnGrammarButton from './ReturnGrammarButton';
import { scrollViewMargin, tableCell, tableCellSmall, tableCellMedium, tableRow, tableRowTitle } from '../../services/styles/views';
import ViewContainer from '../generalComponent/ViewContainer';
import { Text , Box } from "@react-native-material/core";
// grammar
import { nounDeclension, nounDeclensionRules, nounsQuestions } from '../../services/grammarRules';
import { headerOption, sklon } from '../../services/types';

const NounsDeclensions = () => {

const headerTitleRender = (sklon:sklon) => {
     return (
          <Box style={tableCellMedium}><Text>{`${nounsQuestions[sklon].ukrName}`}</Text><Text>{`${nounsQuestions[sklon].questions}`}</Text></Box> 
         )
}
const headerRender = () => {
    return nounDeclension.nounsTitle.map( (el:string, idx) => {
          return <Box style={tableCellMedium} key={idx}><Text>{`${el.toUpperCase()}`}</Text></Box>  
        })
}

const renderCell = (gender:headerOption, sklon: sklon) => {
     return nounDeclensionRules[gender].declensions[sklon].map( (el: string, idx: number) => {
          return <Box style={tableCellMedium} key={idx}><Text>{el}</Text></Box> 
     })
}
  return (
    <ViewContainer> 
      <ScrollView style={scrollViewMargin}>
      <ReturnGrammarButton/>
    <Box style={tableRowTitle}><Text>Чоловічий рід</Text></Box>
      <Box style={tableRow}>
        { headerRender() }
      </Box> 
      <Box style={tableRow}>
       { headerTitleRender("nominative") }   
       { renderCell("masculine", "nominative") }
      </Box> 
      <Box style={tableRow}>
      { headerTitleRender("genitive") } 
      { renderCell("masculine", "genitive") }
      </Box>
      <Box style={tableRow}> 
       { headerTitleRender("dative") }
       { renderCell("masculine", "dative") }
      </Box> 
      <Box style={tableRow}> 
       { headerTitleRender("accusative") }
       { renderCell("masculine", "accusative") }
      </Box> 
      <Box style={tableRow}> 
      { headerTitleRender("locative") }
       { renderCell("masculine", "locative") }
      </Box> 
      <Box style={tableRow}> 
     { headerTitleRender("instrumental") }
       { renderCell("masculine", "instrumental") }
      </Box> 
    <Box style={tableRowTitle}><Text>Жіночий рід</Text></Box>
    <Box style={tableRow}>
    { headerRender() }
      </Box> 
      <Box style={tableRow}>
      { headerTitleRender("nominative") }  
       { renderCell("feminine", "nominative") }
      </Box> 
      <Box style={tableRow}>
      { headerTitleRender("genitive") }  
       {  renderCell("feminine", "genitive") }
      </Box>
      <Box style={tableRow}> 
      { headerTitleRender("dative") } 
       {  renderCell("feminine", "dative") }
      </Box> 
      <Box style={tableRow}> 
      { headerTitleRender("accusative") } 
       {  renderCell("feminine", "accusative") }
      </Box> 
      <Box style={tableRow}> 
      { headerTitleRender("locative") } 
       { renderCell("feminine", "locative") } 
      </Box> 
      <Box style={tableRow}> 
      { headerTitleRender("instrumental") } 
       { renderCell("feminine", "instrumental") }
      </Box> 
      <Box  style={tableRowTitle}><Text>Середній рід</Text></Box>
      <Box style={tableRow}>
      { headerRender() }
      </Box> 
      <Box style={tableRow}>
      { headerTitleRender("nominative") }  
       { renderCell("neuter", "nominative") }
      </Box> 
      <Box style={tableRow}>
      { headerTitleRender("genitive") } 
       { renderCell("neuter", "genitive") }
      </Box>
      <Box style={tableRow}> 
      { headerTitleRender("dative") }  
       { renderCell("neuter", "dative") }
      </Box> 
      <Box style={tableRow}> 
      { headerTitleRender("accusative") }  
       { renderCell("neuter", "accusative") }
      </Box> 
      <Box style={tableRow}> 
      { headerTitleRender("locative") }  
       { renderCell("neuter", "locative") }
      </Box> 
      <Box style={tableRow}> 
      { headerTitleRender("instrumental") }  
       { renderCell("neuter", "instrumental") }
      </Box> 
      </ScrollView> 
    </ViewContainer>
  )
}
export default NounsDeclensions;