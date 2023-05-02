import React from 'react'
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Container } from '../../services/styles';
import ReturnGrammarButton from './ReturnGrammarButton';

import { TableRow, TableCell } from '../../services/styles';

const VerbsDeclensions = () => {

  return (
   <ScrollView style={{paddingTop: 40}}>
    <Container style={{marginBottom: 40}}> 
      <ReturnGrammarButton/>
      <TableRow>
       <TableCell><Text>Особа</Text></TableCell>  
       <TableCell><Text>Теперішній час (інфінітив - 'ti', ( +se* )</Text></TableCell> 
       <TableCell><Text>Минулий час ( інфінітив - 'ti')</Text></TableCell> 
       <TableCell><Text>Майбутній час ( інфінітив - 'ti')</Text></TableCell> 
      </TableRow> 
      <TableRow>
       <TableCell><Text>Jaz</Text></TableCell>  
       <TableCell><Text>m</Text></TableCell> 
       <TableCell><Text>sem + L/La</Text></TableCell> 
       <TableCell><Text>bom + L/La</Text></TableCell> 
      </TableRow> 
      <TableRow>
       <TableCell><Text>Ti</Text></TableCell>  
       <TableCell><Text>š</Text></TableCell> 
       <TableCell><Text>si + L/La</Text></TableCell> 
       <TableCell><Text>boš + L/La</Text></TableCell> 
      </TableRow> 
      <TableRow>
       <TableCell><Text>On, Ona, Ono</Text></TableCell>  
       <TableCell><Text>-</Text></TableCell> 
       <TableCell><Text>je + L/La</Text></TableCell> 
       <TableCell><Text>bo + L/La</Text></TableCell> 
      </TableRow> 
      <TableRow>
       <TableCell><Text>Midva, Midve / Medve</Text></TableCell>  
       <TableCell><Text>va</Text></TableCell> 
       <TableCell><Text>sva + La/Li</Text></TableCell> 
       <TableCell><Text>bova + La/Li</Text></TableCell> 
      </TableRow> 
      <TableRow>
       <TableCell><Text>Vidva, Vidve / Vedve</Text></TableCell>  
       <TableCell><Text>ta</Text></TableCell> 
       <TableCell><Text>sta + La/Li</Text></TableCell> 
       <TableCell><Text>bosta + La/Li</Text></TableCell> 
      </TableRow> 
      <TableRow>
       <TableCell><Text>Onadva, Onidve</Text></TableCell>  
       <TableCell><Text>ta</Text></TableCell> 
       <TableCell><Text>sta + La/Li</Text></TableCell> 
       <TableCell><Text>bosta + La/Li</Text></TableCell> 
      </TableRow> 
      <TableRow>
       <TableCell><Text>Mi, Me</Text></TableCell>  
       <TableCell><Text>mo</Text></TableCell> 
       <TableCell><Text>smo + Li/Le</Text></TableCell> 
       <TableCell><Text>bomo + Li/Le</Text></TableCell> 
      </TableRow> 
      <TableRow>
       <TableCell><Text>Vi, Ve</Text></TableCell>  
       <TableCell><Text>te</Text></TableCell> 
       <TableCell><Text>ste + Li/Le</Text></TableCell> 
       <TableCell><Text>boste + Li/Le</Text></TableCell> 
      </TableRow> 
      <TableRow>
       <TableCell><Text>Oni , One* , Ona**</Text></TableCell>  
       <TableCell><Text>jo</Text></TableCell> 
       <TableCell><Text>so + Li/Le/La</Text></TableCell> 
       <TableCell><Text>bojo/bodo + Li/Le/La</Text></TableCell> 
      </TableRow> 
      <TableRow>
       <TableCell><Text> *Коли мова йде про групу
                          тільки з жінок
                          **тільки іменники
                          середнього роду</Text>
        </TableCell>  
       <TableCell><Text>*Частка 'se' зазначає що дієслово має
                        зворотну форму. (učiti se - навчатися)</Text>
        </TableCell> 
       <TableCell><Text>Умовна форма схожа на укр мову.
                        Додаємо "bi" - Jaz bi vedel (я б бачив)
                        Заперечення формується як і у
                        теперішьому часі</Text>
        </TableCell> 
       <TableCell><Text></Text></TableCell> 
      </TableRow> 
    </Container>
    </ScrollView> 
  )
}

export default VerbsDeclensions;