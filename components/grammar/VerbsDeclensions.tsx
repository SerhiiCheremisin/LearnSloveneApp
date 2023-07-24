import React from 'react'
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Container } from '../../services/styles';
import ReturnGrammarButton from './ReturnGrammarButton';
import { verbDeclension } from '../../services/grammarRules';

import { TableRow, TableCell } from '../../services/styles';

const VerbsDeclensions = () => {

  return (
    <Container> 
   <ScrollView style={{paddingTop: "7%"}}>

      <ReturnGrammarButton/>
       { verbDeclension.map( (el, idx) => {
             return (
              <TableRow key={idx}>
              <TableCell><Text>{el[0]}</Text></TableCell>  
              <TableCell><Text>{el[1]}</Text></TableCell> 
              <TableCell><Text>{el[2]}</Text></TableCell> 
              <TableCell><Text>{el[3]}</Text></TableCell> 
             </TableRow> 
             )
       }) }
           </ScrollView> 
    </Container>
  )
}

export default VerbsDeclensions;