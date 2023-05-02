
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
interface IIrregularVerbs  {
   present: string,
   pastAndFuture: string
} 

export interface IRootDictionary {
    isIrregular:boolean,
    irregulars? : IIrregularVerbs,
    sloWord: string,
    urkWord: string,
    category: string
}