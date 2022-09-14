export interface Country {
    name: Name;
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: Currencies;
    idd: Idd;
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: Languages;
    translations: Translation;
    latlng: number[];
    landlocked: boolean;
    borders: string[];
    area: number;
    demonyms: Demonyms;
    flag: string;
    maps: Maps;
    population: number;
    gini: Gini;
    fifa: string;
    car: Car;
    timezones: string[];
    continents: string[];
    flags: CoatOfArms;
    coatOfArms: CoatOfArms;
    startOfWeek: string;
    capitalInfo: CapitalInfo;
    postalCode: PostalCode;
}

export interface CapitalInfo {
    latlng: number[];
}

export interface Car {
    signs: string[];
    side: string;
}

export interface CoatOfArms {
    png: string;
    svg: string;
}

export interface Currencies {
    CLP: Clp;
}

export interface Clp {
    name: string;
    symbol: string;
}

export interface Demonyms {
    eng: Eng;
    fra: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Gini {
    "2017": number;
}

export interface Idd {
    root: string;
    suffixes: string[];
}

export interface Languages {
    spa: string;
}

export interface Maps {
    googleMaps: string;
    openStreetMaps: string;
}

export interface Name {
    common: string;
    official: string;
    nativeName: NativeName;
}

export interface NativeName {
    official: string;
    common: string;
}

export interface Ara {
    official: string;
    common: string;
}

export interface Bre {
    official: string;
    common: string;
}

export interface Ces {
    official: string;
    common: string;
}

export interface Cym {
    official: string;
    common: string;
}

export interface Deu {
    official: string;
    common: string;
}

export interface Est {
    official: string;
    common: string;
}

export interface Fin {
    official: string;
    common: string;
}

export interface Fra {
    official: string;
    common: string;
}

export interface Hrv {
    official: string;
    common: string;
}

export interface Hun {
    official: string;
    common: string;
}

export interface Ita {
    official: string;
    common: string;
}

export interface Jpn {
    official: string;
    common: string;
}

export interface Kor {
    official: string;
    common: string;
}

export interface Nld {
    official: string;
    common: string;
}

export interface Per {
    official: string;
    common: string;
}

export interface Pol {
    official: string;
    common: string;
}

export interface Por {
    official: string;
    common: string;
}

export interface Rus {
    official: string;
    common: string;
}

export interface Slk {
    official: string;
    common: string;
}

export interface Spa {
    official: string;
    common: string;
}

export interface Swe {
    official: string;
    common: string;
}

export interface Urd {
    official: string;
    common: string;
}

export interface Zho {
    official: string;
    common: string;
}


export interface Translation {
    ara: Ara;
    bre: Bre;
    ces: Ces;
    cym: Cym;
    deu: Deu;
    est: Est;
    fin: Fin;
    fra: Fra;
    hrv: Hrv;
    hun: Hun;
    ita: Ita;
    jpn: Jpn;
    kor: Kor;
    nld: Nld;
    per: Per;
    pol: Pol;
    por: Por;
    rus: Rus;
    slk: Slk;
    spa: Spa;
    swe: Swe;
    urd: Urd;
    zho: Zho;

}

export interface PostalCode {
    format: string;
    regex: string;
}
