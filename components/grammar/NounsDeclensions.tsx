import React from 'react'
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Container, TableCell, TableRow, SmallTableNounTitle } from '../../services/styles';
import ReturnGrammarButton from './ReturnGrammarButton';
import { TableNounTitleBlock, TableNounTitle } from '../../services/styles';
// grammar
import { nounDeclension, nounDeclensionRules, nounsQuestions } from '../../services/grammarRules';
import { headerOption, sklon } from '../../services/types';

const NounsDeclensions = () => {

const headerTitleRender = (sklon:sklon) => {
     return (
          <TableCell><SmallTableNounTitle>{`${nounsQuestions[sklon].ukrName}`}</SmallTableNounTitle><Text>{`${nounsQuestions[sklon].questions}`}</Text></TableCell> 
         )
}
const headerRender = () => {
    return nounDeclension.nounsTitle.map( (el:string, idx) => {
          return <TableCell key={idx}><Text>{`${el.toUpperCase()}`}</Text></TableCell>  
        })
}

const renderCell = (gender:headerOption, sklon: sklon) => {
     return nounDeclensionRules[gender].declensions[sklon].map( (el: string, idx: number) => {
          return <TableCell key={idx}><Text>{el}</Text></TableCell> 
     })
}
  return (
   <ScrollView style={{paddingTop: 50}}>
    <Container style={{marginBottom: 40}}> 
      <ReturnGrammarButton/>
    <TableNounTitleBlock><TableNounTitle>Чоловічий рід</TableNounTitle></TableNounTitleBlock>
      <TableRow>
        { headerRender() }
      </TableRow> 
      <TableRow>
       { headerTitleRender("nominative") }   
       { renderCell("masculine", "nominative") }
      </TableRow> 
      <TableRow>
      { headerTitleRender("genitive") } 
      { renderCell("masculine", "genitive") }
      </TableRow>
      <TableRow> 
       { headerTitleRender("dative") }
       { renderCell("masculine", "dative") }
      </TableRow> 
      <TableRow> 
       { headerTitleRender("accusative") }
       { renderCell("masculine", "accusative") }
      </TableRow> 
      <TableRow> 
      { headerTitleRender("locative") }
       { renderCell("masculine", "locative") }
      </TableRow> 
      <TableRow> 
     { headerTitleRender("instrumental") }
       { renderCell("masculine", "instrumental") }
      </TableRow> 
    <TableNounTitleBlock><TableNounTitle>Жіночий рід</TableNounTitle></TableNounTitleBlock>
    <TableRow>
    { headerRender() }
      </TableRow> 
      <TableRow>
      { headerTitleRender("nominative") }  
       { renderCell("feminine", "nominative") }
      </TableRow> 
      <TableRow>
      { headerTitleRender("genitive") }  
       {  renderCell("feminine", "genitive") }
      </TableRow>
      <TableRow> 
      { headerTitleRender("dative") } 
       {  renderCell("feminine", "dative") }
      </TableRow> 
      <TableRow> 
      { headerTitleRender("accusative") } 
       {  renderCell("feminine", "accusative") }
      </TableRow> 
      <TableRow> 
      { headerTitleRender("locative") } 
       { renderCell("feminine", "locative") } 
      </TableRow> 
      <TableRow> 
      { headerTitleRender("instrumental") } 
       { renderCell("feminine", "instrumental") }
      </TableRow> 
      <TableNounTitleBlock><TableNounTitle>Середній рід</TableNounTitle></TableNounTitleBlock>
      <TableRow>
      { headerRender() }
      </TableRow> 
      <TableRow>
      { headerTitleRender("nominative") }  
       { renderCell("neuter", "nominative") }
      </TableRow> 
      <TableRow>
      { headerTitleRender("genitive") } 
       { renderCell("neuter", "genitive") }
      </TableRow>
      <TableRow> 
      { headerTitleRender("dative") }  
       { renderCell("neuter", "dative") }
      </TableRow> 
      <TableRow> 
      { headerTitleRender("accusative") }  
       { renderCell("neuter", "accusative") }
      </TableRow> 
      <TableRow> 
      { headerTitleRender("locative") }  
       { renderCell("neuter", "locative") }
      </TableRow> 
      <TableRow> 
      { headerTitleRender("instrumental") }  
       { renderCell("neuter", "instrumental") }
      </TableRow> 
    </Container>
    </ScrollView>  
  )
}
export default NounsDeclensions;