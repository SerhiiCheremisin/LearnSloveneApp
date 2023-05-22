
//redux
export interface IUserSliceInitial {
    isUserLogged : boolean,
    userName: string,
    userDictionary: IRootDictionary[]
}

export interface IDictionaryInitial {
    activeCategory: string
}

export interface IGrammarInitial {
    activeGrammarBlock: string
}
//other
export interface IIrregularVerbs  {
   present: string,
   pastAndFuture: string
} 

export interface IRootDictionary {
    isIrregular:boolean,
    irregulars? : IIrregularVerbs,
    sloWord: string,
    ukrWord: string,
    category: string
}

export interface ILocalStorageData {
    userName: string,
    userPassword: string;
    userDictionary: IRootDictionary[]
}