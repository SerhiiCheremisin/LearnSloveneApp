import React from 'react'
import { View, Text, Pressable, ScrollView, FlatList, ActivityIndicator, SafeAreaView, StyleSheet } from 'react-native';
import { IRootDictionary } from '../services/types';
import { WordItem, WordItemPartition, WordAdder } from '../services/styles';

interface IWordListItemProps {
    item: IRootDictionary
}

const WordListItem = ( {item}:IWordListItemProps ) => {

  return (
     <WordItem>
        <WordItemPartition>{`${item.sloWord} - ${item.urkWord}`}</WordItemPartition>
        { item.isIrregular && <Text>{ `теперешній час ${item.irregulars.present} , майбутній та минулий час ${item.irregulars.pastAndFuture}` }</Text> }
        <Pressable>
          <WordAdder><Text>{`Додати до мого словника`}</Text></WordAdder>   
        </Pressable>
     </WordItem>

  )
}

export default WordListItem;
