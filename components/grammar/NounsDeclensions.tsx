import React from 'react'
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Container, TableCell, TableRow, SmallTableNounTitle } from '../../services/styles';
import ReturnGrammarButton from './ReturnGrammarButton';
import { TableNounTitleBlock, TableNounTitle } from '../../services/styles';

const NounsDeclensions = () => {

  return (
   <ScrollView style={{paddingTop: 50}}>
    <Container style={{marginBottom: 40}}> 
      <ReturnGrammarButton/>
    <TableNounTitleBlock><TableNounTitle>Чоловічий рід</TableNounTitle></TableNounTitleBlock>
      <TableRow>
       <TableCell><Text>Відмінок</Text></TableCell>  
       <TableCell><Text>Однина</Text></TableCell> 
       <TableCell><Text>Двоїна</Text></TableCell> 
       <TableCell><Text>Множина</Text></TableCell> 
      </TableRow> 
      <TableRow>
       <TableCell><SmallTableNounTitle>Називний</SmallTableNounTitle><Text>Kdo- хто, kaj -що</Text>
       </TableCell>  
       <TableCell><Text>- (Velik pes)</Text></TableCell> 
       <TableCell><Text>a (Velika psa)</Text></TableCell> 
       <TableCell><Text>i (Veliki psi)</Text></TableCell> 
      </TableRow> 
      <TableRow>
       <TableCell><SmallTableNounTitle>Родовий</SmallTableNounTitle><Text>Koga - кого, česa - чого</Text>
       </TableCell>  
       <TableCell><Text>ega + a</Text></TableCell> 
       <TableCell><Text>ih + ov/ev</Text></TableCell> 
       <TableCell><Text>ih + ov/ev</Text></TableCell> 
      </TableRow>
      <TableRow> 
      <TableCell><SmallTableNounTitle>Давальний</SmallTableNounTitle><Text>Komu - кому, čemu - чому</Text>
       </TableCell>  
       <TableCell><Text>emu + u</Text></TableCell> 
       <TableCell><Text>ima + oma/ ema(c, č, ž, š, j) </Text></TableCell> 
       <TableCell><Text>im + om/ em (c, č, ž, š, j)</Text></TableCell> 
      </TableRow> 
      <TableRow> 
      <TableCell><SmallTableNounTitle>Знахідний</SmallTableNounTitle><Text>Koga - кого, Kaj - що,Kam - куди</Text>
       </TableCell>  
       <TableCell><Text>є душа - ega + -a немає душі -</Text></TableCell> 
       <TableCell><Text>a</Text></TableCell> 
       <TableCell><Text>e</Text></TableCell> 
      </TableRow> 
      <TableRow> 
      <TableCell><SmallTableNounTitle>Орудний</SmallTableNounTitle><Text>Z kom - з ким,čim - з чим</Text>
       </TableCell>  
       <TableCell><Text>im + om/em (c, č, ž, š, j)</Text></TableCell> 
       <TableCell><Text>ima + oma/ ema(c, č, ž, š, j)</Text></TableCell> 
       <TableCell><Text>imi + i</Text></TableCell> 
      </TableRow> 
      <TableRow> 
      <TableCell><SmallTableNounTitle>Місцевий</SmallTableNounTitle><Text>Kje - де, o kom - про кого, o čim - про що</Text>
       </TableCell>  
       <TableCell><Text>em + u</Text></TableCell> 
       <TableCell><Text>ih</Text></TableCell> 
       <TableCell><Text>ih</Text></TableCell> 
      </TableRow> 

    <TableNounTitleBlock><TableNounTitle>Жіночий рід</TableNounTitle></TableNounTitleBlock>
    <TableRow>
       <TableCell><Text>Відмінок</Text></TableCell>  
       <TableCell><Text>Однина</Text></TableCell> 
       <TableCell><Text>Двоїна</Text></TableCell> 
       <TableCell><Text>Множина</Text></TableCell> 
      </TableRow> 
      <TableRow>
       <TableCell><SmallTableNounTitle>Називний</SmallTableNounTitle><Text>Kdo- хто, kaj -що</Text>
       </TableCell>  
       <TableCell><Text>a</Text></TableCell> 
       <TableCell><Text>i</Text></TableCell> 
       <TableCell><Text>e</Text></TableCell> 
      </TableRow> 
      <TableRow>
       <TableCell><SmallTableNounTitle>Родовий</SmallTableNounTitle><Text>Koga - кого, česa - чого</Text>
       </TableCell>  
       <TableCell><Text>e (іноді i) </Text></TableCell> 
       <TableCell><Text>ih + -</Text></TableCell> 
       <TableCell><Text>ih + -</Text></TableCell> 
      </TableRow>
      <TableRow> 
      <TableCell><SmallTableNounTitle>Давальний</SmallTableNounTitle><Text>Komu - кому, čemu - чому</Text>
       </TableCell>  
       <TableCell><Text>i</Text></TableCell> 
       <TableCell><Text>ima + ama/ima/ema</Text></TableCell> 
       <TableCell><Text>im + am/im/em</Text></TableCell> 
      </TableRow> 
      <TableRow> 
      <TableCell><SmallTableNounTitle>Знахідний</SmallTableNounTitle><Text>Koga - кого, Kaj - що,Kam - куди</Text>
       </TableCell>  
       <TableCell><Text>o</Text></TableCell> 
       <TableCell><Text>i</Text></TableCell> 
       <TableCell><Text>e,</Text></TableCell> 
      </TableRow> 
      <TableRow> 
      <TableCell><SmallTableNounTitle>Орудний</SmallTableNounTitle><Text>Z kom - з ким,čim - з чим</Text>
       </TableCell>  
       <TableCell><Text>o + o/ojo</Text></TableCell> 
       <TableCell><Text>ima + ama/ema</Text></TableCell> 
       <TableCell><Text>imi + ami</Text></TableCell> 
      </TableRow> 
      <TableRow> 
      <TableCell><SmallTableNounTitle>Місцевий</SmallTableNounTitle><Text>Kje - де, o kom - про кого, o čim - про що</Text>
       </TableCell>  
       <TableCell><Text>i</Text></TableCell> 
       <TableCell><Text>ih + ah/eh</Text></TableCell> 
       <TableCell><Text>ih + ah/eh</Text></TableCell> 
      </TableRow> 

      <TableNounTitleBlock><TableNounTitle>Середній рід</TableNounTitle></TableNounTitleBlock>
      <TableRow>
       <TableCell><Text>Відмінок</Text></TableCell>  
       <TableCell><Text>Однина</Text></TableCell> 
       <TableCell><Text>Двоїна</Text></TableCell> 
       <TableCell><Text>Множина</Text></TableCell> 
      </TableRow> 
      <TableRow>
       <TableCell><SmallTableNounTitle>Називний</SmallTableNounTitle><Text>Kdo- хто, kaj -що</Text>
       </TableCell>  
       <TableCell><Text>o / e</Text></TableCell> 
       <TableCell><Text>i</Text></TableCell> 
       <TableCell><Text>a</Text></TableCell> 
      </TableRow> 
      <TableRow>
       <TableCell><SmallTableNounTitle>Родовий</SmallTableNounTitle><Text>Koga - кого, česa - чого</Text>
       </TableCell>  
       <TableCell><Text>ega + a</Text></TableCell> 
       <TableCell><Text>ih + -</Text></TableCell> 
       <TableCell><Text>ih + -</Text></TableCell> 
      </TableRow>
      <TableRow> 
      <TableCell><SmallTableNounTitle>Давальний</SmallTableNounTitle><Text>Komu - кому, čemu - чому</Text>
       </TableCell>  
       <TableCell><Text>emu + u</Text></TableCell> 
       <TableCell><Text>ima + oma/ ema(c, č, ž, š, j) </Text></TableCell> 
       <TableCell><Text>im + om/ em (c, č, ž, š, j)</Text></TableCell> 
      </TableRow> 
      <TableRow> 
      <TableCell><SmallTableNounTitle>Знахідний</SmallTableNounTitle><Text>Koga - кого, Kaj - що,Kam - куди</Text>
       </TableCell>  
       <TableCell><Text>o / e</Text></TableCell> 
       <TableCell><Text>i</Text></TableCell> 
       <TableCell><Text>a</Text></TableCell> 
      </TableRow> 
      <TableRow> 
      <TableCell><SmallTableNounTitle>Орудний</SmallTableNounTitle><Text>Z kom - з ким,čim - з чим</Text>
       </TableCell>  
       <TableCell><Text>im + om/em (c, č, ž, š, j)</Text></TableCell> 
       <TableCell><Text>ima + oma/ ema(c, č, ž, š, j)</Text></TableCell> 
       <TableCell><Text>imi + i</Text></TableCell> 
      </TableRow> 
      <TableRow> 
      <TableCell><SmallTableNounTitle>Місцевий</SmallTableNounTitle><Text>Kje - де, o kom - про кого, o čim - про що</Text>
       </TableCell>  
       <TableCell><Text>em + u</Text></TableCell> 
       <TableCell><Text>ih</Text></TableCell> 
       <TableCell><Text>ih</Text></TableCell> 
      </TableRow> 
    </Container>
    </ScrollView>  
  )
}

export default NounsDeclensions;