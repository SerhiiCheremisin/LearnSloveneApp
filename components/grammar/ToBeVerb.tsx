import React from 'react'
import { View, Text, ScrollView } from 'react-native';
import { Container } from '../../services/styles';
import { TableCellSmall, TableRow, TableCellLarge } from '../../services/styles';
import ReturnGrammarButton from './ReturnGrammarButton';

const ToBeVerb = () => {
  return (
   <ScrollView style={{paddingTop: 40}}>
     <Container style={{paddingBottom: 40}}>
      <ReturnGrammarButton/> 
      <Text>ДІЄСЛОВА БУТИ ТА МАТИ (ПОЗИТИВНА ТА НЕГАТИВНА ФОРМА ДЛЯ ТЕПЕРІШНЬОГО ТА МИНУЛОГО ЧАСУ)</Text>
      <TableRow>
      <TableCellSmall></TableCellSmall>
      <TableCellSmall><Text>BITI (Бути)</Text></TableCellSmall>
      <TableCellSmall><Text>Негативна форма</Text></TableCellSmall>
      <TableCellSmall><Text>IMETI (Мати)</Text></TableCellSmall>
      <TableCellSmall><Text>Негативна форма</Text></TableCellSmall>
      </TableRow>
      <TableRow>
      <TableCellSmall><Text>Jaz</Text></TableCellSmall>
      <TableCellSmall><Text>sem</Text></TableCellSmall>
      <TableCellSmall><Text>nisem</Text></TableCellSmall>
      <TableCellSmall><Text>imam</Text></TableCellSmall>
      <TableCellSmall><Text>nimam</Text></TableCellSmall>
      </TableRow>
      <TableRow>
      <TableCellSmall><Text>Ti</Text></TableCellSmall>
      <TableCellSmall><Text>si</Text></TableCellSmall>
      <TableCellSmall><Text>nisi</Text></TableCellSmall>
      <TableCellSmall><Text>imaš</Text></TableCellSmall>
      <TableCellSmall><Text>nimaš</Text></TableCellSmall>
      </TableRow>
      <TableRow>
      <TableCellSmall><Text>On, Ona, Ono</Text></TableCellSmall>
      <TableCellSmall><Text>je</Text></TableCellSmall>
      <TableCellSmall><Text>ni</Text></TableCellSmall>
      <TableCellSmall><Text>ima</Text></TableCellSmall>
      <TableCellSmall><Text>nima</Text></TableCellSmall>
      </TableRow>
      <TableRow>
      <TableCellSmall><Text>Midva, Midve / Medve</Text></TableCellSmall>
      <TableCellSmall><Text>sva</Text></TableCellSmall>
      <TableCellSmall><Text>nisva</Text></TableCellSmall>
      <TableCellSmall><Text>imava</Text></TableCellSmall>
      <TableCellSmall><Text>nimava</Text></TableCellSmall>
      </TableRow>
      <TableRow>
      <TableCellSmall><Text>Vidva, Vidve / Vedve</Text></TableCellSmall>
      <TableCellSmall><Text>sta</Text></TableCellSmall>
      <TableCellSmall><Text>nista</Text></TableCellSmall>
      <TableCellSmall><Text>imata</Text></TableCellSmall>
      <TableCellSmall><Text>nimata</Text></TableCellSmall>
      </TableRow>
      <TableRow>
      <TableCellSmall><Text>Onadva, Onidve</Text></TableCellSmall>
      <TableCellSmall><Text>sta</Text></TableCellSmall>
      <TableCellSmall><Text>nista</Text></TableCellSmall>
      <TableCellSmall><Text>imata</Text></TableCellSmall>
      <TableCellSmall><Text>nimata</Text></TableCellSmall>
      </TableRow>
      <TableRow>
      <TableCellSmall><Text>Mi, Me</Text></TableCellSmall>
      <TableCellSmall><Text>smo</Text></TableCellSmall>
      <TableCellSmall><Text>nismo</Text></TableCellSmall>
      <TableCellSmall><Text>imamo</Text></TableCellSmall>
      <TableCellSmall><Text>nimamo</Text></TableCellSmall>
      </TableRow>
      <TableRow>
      <TableCellSmall><Text>Vi, Ve</Text></TableCellSmall>
      <TableCellSmall><Text>ste</Text></TableCellSmall>
      <TableCellSmall><Text>niste</Text></TableCellSmall>
      <TableCellSmall><Text>imate</Text></TableCellSmall>
      <TableCellSmall><Text>nimate</Text></TableCellSmall>
      </TableRow>
      <TableRow>
      <TableCellSmall><Text>Oni, One</Text></TableCellSmall>
      <TableCellSmall><Text>so</Text></TableCellSmall>
      <TableCellSmall><Text>niso</Text></TableCellSmall>
      <TableCellSmall><Text>imajo</Text></TableCellSmall>
      <TableCellSmall><Text>nimajo</Text></TableCellSmall>
      </TableRow>
      <Text>ДІЄСЛОВО БУТИ (ПОЗИТИВНА ТА НЕГАТИВНА ФОРМА ДЛЯ МАЙБУТНЬОГО)</Text>
      <TableRow>
        <TableCellLarge><Text>Jaz</Text></TableCellLarge>
        <TableCellLarge><Text>bom</Text></TableCellLarge>
        <TableCellLarge><Text>ne bom</Text></TableCellLarge>
      </TableRow>
      <TableRow>
        <TableCellLarge><Text>Ti</Text></TableCellLarge>
        <TableCellLarge><Text>boš</Text></TableCellLarge>
        <TableCellLarge><Text>ne boš</Text></TableCellLarge>
      </TableRow>
      <TableRow>
        <TableCellLarge><Text>On, Ona</Text></TableCellLarge>
        <TableCellLarge><Text>bo</Text></TableCellLarge>
        <TableCellLarge><Text>ne bo</Text></TableCellLarge>
      </TableRow>
      <TableRow>
        <TableCellLarge><Text>Midva, Medve</Text></TableCellLarge>
        <TableCellLarge><Text>bova</Text></TableCellLarge>
        <TableCellLarge><Text>ne bova</Text></TableCellLarge>
      </TableRow>
      <TableRow>
        <TableCellLarge><Text>Vidva, Vedve</Text></TableCellLarge>
        <TableCellLarge><Text>bosta</Text></TableCellLarge>
        <TableCellLarge><Text>ne bosta</Text></TableCellLarge>
      </TableRow>
      <TableRow>
        <TableCellLarge><Text>Onadva, Onidve</Text></TableCellLarge>
        <TableCellLarge><Text>bosta</Text></TableCellLarge>
        <TableCellLarge><Text>ne bosta</Text></TableCellLarge>
      </TableRow>
      <TableRow>
        <TableCellLarge><Text>Mi, Me</Text></TableCellLarge>
        <TableCellLarge><Text>bomo</Text></TableCellLarge>
        <TableCellLarge><Text>ne bomo</Text></TableCellLarge>
      </TableRow>
      <TableRow>
        <TableCellLarge><Text>Vi, Ve</Text></TableCellLarge>
        <TableCellLarge><Text>boste</Text></TableCellLarge>
        <TableCellLarge><Text>ne boste</Text></TableCellLarge>
      </TableRow>
      <TableRow>
        <TableCellLarge><Text>Oni, One</Text></TableCellLarge>
        <TableCellLarge><Text>bojo, bodo</Text></TableCellLarge>
        <TableCellLarge><Text>ne bojo, ne bodo</Text></TableCellLarge>
      </TableRow>
     </Container>
   </ScrollView>
  )
}


export default ToBeVerb;