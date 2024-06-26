import { IDeclensionNounsRules, INounDeclensionHeaders, INounQuestions, IChangeFormCommon, IChangeFormsParticularCases, IBeAndHaveRules, IImperativeRule } from "./types"

export const nounDeclension: INounDeclensionHeaders = {
    nounsTitle : ["Відмінок", "Однина", "Двоїна", "Множина" ]
}

export const nounsQuestions: INounQuestions = {
    nominative : {
        questions : "Kdo - хто, kaj - що",
        ukrName: "Називний"
    },
    genitive : {
        questions : "Koga - кого, česa - чого",
        ukrName: "Родовий"
    },
    dative : {
        questions : "Komu - кому, čemu - чому",
        ukrName: "Давальний"
    },
    accusative : {
        questions : "Koga - кого, Kaj - що, Kam - куди",
        ukrName: "Знахідний"
    },
    instrumental : {
        questions : "Kje - де, o kom - про кого, o čim - про що",
        ukrName: "Місцевий"
    },
    locative : {
        questions : "Z kom - з ким,z čim - з чим",
        ukrName: "Орудний"
    }
};

export const nounDeclensionRules : IDeclensionNounsRules = {
     masculine: {
      declensions: {
        nominative : [ "- (Velik pes)", "a (Velika psa)", "i (Veliki psi)" ],
        genitive: [ "ega + a", "ih + ov/ev", "ih + ov/ev" ],
        dative: ["emu + u", "ima + oma/ ema(c, č, ž, š, j)", "im + om/ em (c, č, ž, š, j)"],
        accusative: ["є душа - ega + -a немає душі -", "a", "e"],
        locative: ["im + om/em (c, č, ž, š, j)", "ima + oma/ ema(c, č, ž, š, j)", "imi + i"],
        instrumental: ["em + u", "ih", "ih"],
      }
    } ,
    feminine : {
        declensions: {
            nominative : [ "a", "i", "e" ],
            genitive: [ "e (іноді i)", "ih + -", "ih + -" ],
            dative: ["i", "ima + ama/ima/ema", "im + am/im/em"],
            accusative: ["o", "i", "e"],
            locative: ["o + o/ojo", "ima + ama/ema", "imi + ami"],
            instrumental: ["i", "ih + ah/eh", "ih + ah/eh"],
          }
    } ,
   neuter : {
    declensions: {
        nominative : [ "o /e ", "i", "a" ],
        genitive: [ "ega + a", "ih + -", "ih + -" ],
        dative: ["emu + u", "ima + oma/ ema(c, č, ž, š, j)", "im + om/ em (c, č, ž, š, j)"],
        accusative: [ "o /e ", "i", "a" ],
        locative: ["im + om/em (c, č, ž, š, j)", "ima + oma/ ema(c, č, ž, š, j)", "imi + i"],
        instrumental: ["em + u", "ih", "ih"],
      }
    } 
}

export const verbDeclension = [
["Особа", "еперішній час (інфінітив - 'ti', ( + se* )" , "Минулий час ( інфінітив - 'ti')" , "Майбутній час ( інфінітив - 'ti')"],
["Jaz", "m" , "sem + L/La" , "bom + L/La"] , ["Ti", "š" , "si + L/La" , "boš + L/La"], 
["On, Ona, Ono", "-" , "je + L/La" , "bo + L/La"],
["Midva, Midve / Medve", "va" , "sva + La/Li" , "bova + La/Li"] ,["Vidva, Vidve / Vedve", "ta" , "sta + La/Li" , "bosta + La/Li"],
["Onadva, Onidve",  "ta" , "sta + La/Li" , "bosta + La/Li"], 
["Mi, Me", "mo" , "smo + Li/Le" , "bomo + Li/Le"],
["Vi, Ve", "te" , "ste + Li/Le" , "boste + Li/Le"],
["Oni , One* , Ona**", "jo" , "so + Li/Le/La" , "bojo/bodo + Li/Le/La"],
["Коли мова йде про групу тільки з жінок **тільки іменники середнього роду", "*Частка 'se' зазначає що дієслово має зворотну форму. (učiti se - навчатися)" ,
 "Умовна форма схожа на укр мову. Додаємо \"bi\" - Jaz bi vedel (я б бачив)  Заперечення формується як і у  теперішьому часі" , ""] ] 


 export const changeFormCommon : IChangeFormCommon[] = [
    {ukr: "do - (до)", eng: ""},
    {ukr: "iz - (від)", eng: ""},
    {ukr: "na - (на)", eng: ""},
    {ukr: "o - (про)", eng: ""},
    {ukr: "ob - (в)", eng: ""},
    {ukr: "od - (від)", eng: ""},
    {ukr: "po - (після)", eng: ""},
    {ukr: "pod - (під)", eng: ""},
    {ukr: "pre - (теж)", eng: ""},
    {ukr: "pred - (перед)", eng: ""},
    {ukr: "pri - (після)", eng: ""},
    {ukr: "raz - (із)", eng: ""},
    {ukr: "s - (с)", eng: ""},
    {ukr: "v - (в)", eng: ""},
    {ukr: "za - (для)", eng: ""}
 ]

 export const changeFormsParticularCases: IChangeFormsParticularCases[] = [
    {exampleUkr: "Pisati (писати)", exampleEng: "",  cases: [
        {ukr: "do + pisati = dopisati (дописати)", eng: ""},
        {ukr: "iz + pisati = izpisati (виписувати)", eng: ""},
        {ukr: "na + pisati = napisati (написати)", eng: ""},
        {ukr: "pod + pisati = podpisati (підписати)", eng: ""},
        {ukr: "o + pisati = opisati (описати)", eng: ""},
        {ukr: "v + pisati = vpisati (зарахувати, записати)", eng: ""},
        {ukr: "od + pisati = odpisati (відповісти на лист)", eng: ""},
        {ukr: "po + pisati = popisati (провести інвентаризацію)", eng: ""},
        {ukr: "pre + pisati = prepisati (скопіювати)", eng: ""},
        {ukr: "pred + pisati = predpisati (прописувати)", eng: ""},
        {ukr: "pri + pisati = pripisati (зробити примітку)", eng: ""},
        {ukr: "za + pisati = zapisati (записати)", eng: ""}
    ] }, 
    {exampleUkr: "Brati (читати)", exampleEng: "",  cases: [
        {ukr: "iz + brati = izbrati (обирати)", eng: ""},
        {ukr: "na + brati = nabrati (збирати)", eng: ""},
        {ukr: "o + brati = obrati (вибрати)", eng: ""},
        {ukr: "po + brati = pobrati (підібрати)", eng: ""},
        {ukr: "pre + brati = prebrati (прочитати)", eng: ""},
        {ukr: "raz + brati = razbrati (робити висновок)", eng: ""}
    ] }, 
    {exampleUkr: "Pustiti (залишити, дозволити)", exampleEng: "",  cases: [
        {ukr: "do + pustiti = dopustiti (допускати)", eng: ""},
        {ukr: "iz + pustiti = izpustiti (відпустити)", eng: ""},
        {ukr: "o + pustiti = opustiti (відмовитися від)", eng: ""},
        {ukr: "od + pustiti = odpustiti (пробачити)", eng: ""},
        {ukr: "po + pustiti = popustiti (розслабитися)", eng: ""},
        {ukr: "pre + pustiti = prepustiti (залишити, відпустити)", eng: ""},
        {ukr: "raz + pustiti = razpustiti (розчинятися)", eng: ""},
        {ukr: "s + pustiti = spustiti (розпускати, відпустити)", eng: ""},
        {ukr: "za + pustiti = zapustiti (залишити, відмовитися від)", eng: ""}
    ] }, 
    {exampleUkr: "Govoriti (говорити)", exampleEng: "",  cases: [
        {ukr: "do + govoriti = dogovoriti se (домовитися)", eng: ""},
        {ukr: "iz + govoriti = izgovoriti (вимовляти)", eng: ""},
        {ukr: "na + govoriti = nagovoriti (адресувати)", eng: ""},
        {ukr: "od + govoriti = odgovoriti (відповісти)", eng: ""},
        {ukr: "po + govoriti = pogovoriti se (розмовляти))", eng: ""},
        {ukr: "pre + govoriti = pregovoriti (переконувати, умовити)", eng: ""},
        {ukr: "od + pisati = odpisati (відповісти на лист)", eng: ""},
        {ukr: "po + pisati = popisati (провести інвентаризацію)", eng: ""},
        {ukr: "pre + pisati = prepisati (скопіювати)", eng: ""},
        {ukr: "pred + pisati = predpisati (прописувати)", eng: ""},
        {ukr: "pri + pisati = pripisati (зробити примітку)", eng: ""},
        {ukr: "za + pisati = zapisati (записати)", eng: ""},
    ] }, 
    {exampleUkr: "Nesti (нести)", exampleEng: "",  cases: [
        {ukr: "na + nesti = nanesti (застосовувати)", eng: ""},
        {ukr: "ob + nesti = obnesti se (бути ефективним)", eng: ""},
        {ukr: "od + nesti = odnesti (проводити, виконати)", eng: ""},
        {ukr: "pre + nesti = prenesti (передати)", eng: ""},
        {ukr: "pri + nesti = prinesti (принести)", eng: ""},
        {ukr: "v + nesti = vnesti (заходити, вставити)", eng: ""},
        {ukr: "za + nesti = zanesti (відносити)", eng: ""}
    ] }
 ]

 export const beAndHaveRules: IBeAndHaveRules = {
    head: {
        ukr: ["", "BITI (Бути)", "Негативна форма", "IMETI (Мати)", "Негативна форма"],
        eng: ["","BITI (Бути)", "", ", "]
    },
    body: [
        ["Jaz", "sem", "nisem", "imam", "nimam"], 
        ["Ti", "si", "nisi", "imaš", "nimaš"], 
        ["On, Ona, Ono", "je", "ni", "ima", "nima"], 
        ["Midva, Midve / Medve", "sva", "nisva", "imava", "nimava"], 
        ["Vidva, Vidve / Vedve", "sta", "nista", "imata", "nimata"], 
        ["Onadva, Onidve", "sta", "nista", "imata", "nimata"], 
        ["Mi, Me", "smo", "nismo", "imamo", "nimamo"], 
        ["Vi, Ve", "ste", "niste", "imate", "nimate"], 
        ["Oni, One", "so", "niso", "imajo", "nimajo"]
    ]
 }

 export const beInTheFuture: string[][] = [
    ["Jaz", "bom" , "ne bom"],
    ["Ti", "boš" , "ne boš"],
    ["On, Ona", "bo" , "ne bo"],
    ["Midva, Medve", "bova" , "ne bova"],
    ["Vidva, Vedve", "bosta" , "ne bosta"],
    ["Onadva, Onidve", "bosta" , "ne bosta"],
    ["Mi, Me", "bomo" , "ne bomo"],
    ["Vi, Ve", "bosta" , "ne boste"],
    ["Oni, One", "bojo, bodo" , "ne bojo, ne bodo"],
]

export const imperativeRules: IImperativeRule[] = [
    { example: "povabiti", ending: "im", formal: "ite", informal:"i", newExample: "povabi/povabite" },
    { example: "kazati", ending: "em", formal: "ite", informal:"i", newExample: "kaži/kažite" },
    { example: "prodati", ending: "am", formal: "ajte", informal:"aj", newExample: "prodaj/prodajte" },
    { example: "potovati", ending: "ujem", formal: "ujte", informal:"uj", newExample: "potuj/potujte" },
    { example: "teči", ending: "čem", formal: "cite", informal:"ci", newExample: "teci/tecite" }
]