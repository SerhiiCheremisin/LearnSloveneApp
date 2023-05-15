import React from 'react'
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native'
import ReturnGrammarButton from './ReturnGrammarButton';
import { Container, H2, H4, H3 } from '../../services/styles';

const ChangeFormOvWord = () => {
  return (
    <ScrollView style={{marginTop: 40}}>
     <Container>
     <ReturnGrammarButton/>  
         <H2 style={{paddingBottom: 10}}>Ось список найпоширеніших:</H2>  
         <H4>do - (до)</H4>
         <H4>iz - (від)</H4>
         <H4>na - (на)</H4>
         <H4>o - (про)</H4>
         <H4>ob - (в)</H4>
         <H4>od - (від)</H4>
         <H4>po - (після)</H4>
         <H4>pod - (під)</H4>
         <H4>pre - (теж)</H4>
         <H4>pred - (перед)</H4>
         <H4>pri - (після)</H4>
         <H4>raz - (із)</H4>
         <H4>s - (с)</H4>
         <H4>v - (в)</H4>
         <H4>za - (для)</H4>    
         <H2 style={{paddingBottom: 10}}>Приклади:</H2>  

         <H2 style={{paddingBottom: 10}}>Pisati (писати)</H2>
         <H3>do + pisati = dopisati (дописати)</H3>
         <H3>iz + pisati = izpisati (виписувати)</H3>
         <H3>na + pisati = napisati (написати)</H3>
         <H3>o + pisati = opisati (описати)</H3>
         <H3>od + pisati = odpisati (відповісти на лист)</H3>
         <H3>po + pisati = popisati (провести інвентаризацію)</H3>
         <H3>pod + pisati = podpisati (підписати)</H3>
         <H3>pre + pisati = prepisati (скопіювати)</H3>
         <H3>pred + pisati = predpisati (прописувати)</H3>
         <H3>pri + pisati = pripisati (зробити примітку)</H3>
         <H3>v + pisati = vpisati (зарахувати, записати)</H3>
         <H3>za + pisati = zapisati (записати)</H3>

         <H2 style={{paddingBottom: 10}}>Govoriti (говорити)</H2>
         <H3>do + govoriti = dogovoriti se (домовитися)</H3>
         <H3>iz + govoriti = izgovoriti (вимовляти)</H3>
         <H3>na + govoriti = nagovoriti (адресувати)</H3>
         <H3>od + govoriti = odgovoriti (відповісти)</H3>
         <H3>po + govoriti = pogovoriti se (розмовляти)</H3>
         <H3>pre + govoriti = pregovoriti (переконувати, умовити)</H3>

         <H2 style={{paddingBottom: 10}}>Nesti (нести)</H2>
         <H3>na + nesti = nanesti (застосовувати)</H3>
         <H3>ob + nesti = obnesti se (бути ефективним)</H3>
         <H3>od + nesti = odnesti (проводити, виконати)</H3>
         <H3>pre + nesti = prenesti (передати)</H3>
         <H3>pri + nesti = prinesti (принести)</H3>
         <H3>v + nesti = vnesti (заходити, вставити)</H3>
         <H3>za + nesti = zanesti (відносити)</H3>
 
         <H2 style={{paddingBottom: 10}}>Brati (читати)</H2>
         <H3>iz + brati = izbrati (обирати)</H3>
         <H3>na + brati = nabrati (збирати)</H3>
         <H3>o + brati = obrati (вибрати)</H3>
         <H3>po + brati = pobrati (підібрати)</H3>
         <H3>pre + brati = prebrati (прочитати)</H3>
         <H3>raz + brati = razbrati (робити висновок)</H3>

         <H2 style={{paddingBottom: 10}}>Pustiti (залишити, дозволити)</H2>
         <H3>do + pustiti = dopustiti (допускати)</H3>
         <H3>iz + pustiti = izpustiti (відпустити)</H3>
         <H3>o + pustiti = opustiti (відмовитися від)</H3>
         <H3>od + pustiti = odpustiti (пробачити)</H3>
         <H3>po + pustiti = popustiti (розслабитися)</H3>
         <H3>pre + pustiti = prepustiti (залишити, відпустити)</H3>
         <H3>raz + pustiti = razpustiti (розчинятися)</H3>
         <H3>s + pustiti = spustiti (розпускати, відпустити)</H3>
         <H3>za + pustiti = zapustiti (залишити, відмовитися від)</H3>

     </Container>   
    </ScrollView>
  )
}

export default ChangeFormOvWord;
