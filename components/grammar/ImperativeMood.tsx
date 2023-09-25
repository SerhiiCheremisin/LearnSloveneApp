import React from 'react';
import ViewContainer from '../generalComponent/ViewContainer';
import { Text , Box } from "@react-native-material/core";
import { imperativeRules } from '../../services/grammarRules';
import { IImperativeRule } from '../../services/types';
import { ScrollView } from 'react-native';
import { scrollViewMargin } from '../../services/styles/views';
import { imperativeTab } from '../../services/styles/views';

import ReturnGrammarButton from './ReturnGrammarButton';

const ImperativeMood = () => {
    return(
        <ViewContainer>
        <ScrollView style={scrollViewMargin}>
        <ReturnGrammarButton/>
         { imperativeRules.map( (rule:IImperativeRule, idx:number) => {
            return (
                <Box style={imperativeTab} key={idx}>
                  <Text>{`Дієслова, які при особистому відмінювані закінчуються на "${rule.ending.toUpperCase()}", у наказовій формі отримують закінчення 
                         "${rule.informal.toUpperCase()}" для неформальної форми, та "${rule.formal.toUpperCase()}" у формальній.`}</Text>
                  <Text>{ ` Як приклад, слово ${rule.example.toUpperCase()} у наказовій формі буде мати виигляд ${rule.newExample.toUpperCase()}` }</Text>       
                </Box>
                
            )
         }) } 
        </ScrollView>    
        
        </ViewContainer>
    )
}

export default ImperativeMood;