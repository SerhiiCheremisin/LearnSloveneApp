
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

// grammar
export interface INounDeclensionHeaders {
    nounsTitle: string[]
}
interface ISIngleNoun {
    questions : string,
    ukrName: string
}
export interface INounQuestions {
    nominative : ISIngleNoun,
    genitive : ISIngleNoun,
    dative : ISIngleNoun,
    accusative : ISIngleNoun,
    locative : ISIngleNoun,
    instrumental : ISIngleNoun
}

interface INounDeclension {
    nominative : string[],
    genitive: string[],
    dative: string[],
    accusative: string[],
    locative: string[],
    instrumental: string[],
} 

export interface IChangeFormCommon {
    ukr: string,
    eng: string
}

export interface IChangeFormsParticularCases {
    exampleUkr: string,
    exampleEng: string,
    cases: IChangeFormCommon[]
}

export interface IDeclensionNounsRules {
        masculine: {
         declensions: INounDeclension
       } ,
          feminine : {
           declensions: INounDeclension
       } ,
      neuter : {
       declensions:INounDeclension
       } 
   }
   export type headerOption = "masculine" | "feminine" | "neuter";
   export type sklon = "nominative" | "genitive" | "dative" | "accusative" | "locative" | "instrumental";

   export interface IBeAndHaveRules {
    head: {
        ukr : string[],
        eng: string[]
    },
    body: string[][]
}

export interface IImperativeRule {
    example: string,
    ending: string,
    formal: string,
    informal:string,
    newExample: string
}