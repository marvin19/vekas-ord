export interface Word {
    week: number;
    word: string; 
    link: string;
  }
  
  export interface WordsByYear {
    [year: number]: Word[];
  }

  export interface Ord {
    [key: number]: Word[];
  }

export const words: WordsByYear = {
    2023: [
        {
            week: 42,
            word: 'å lista',
            link: 'https://ordbokene.no/nn/45867'
        }, {
            week: 43,
            word: 'fryktlaus',
            link: 'https://ordbokene.no/nn/22516'
        }, {
            week: 44, // current week
            word: 'fanget',
            link: 'https://ordbokene.no/bm/13786'
        }, {
            week: 45,
            word: 'å kviskre',
            link: 'https://ordbokene.no/nn/43660'
        }, {
            week: 46,
            word: 'å lirka',
            link: 'https://ordbokene.no/nn/45826'
        }, {
            week: 47,
            word: 'kjærleik',
            link: 'https://ordbokene.no/nn/38327'
        }, {
            week: 48,
            word: 'blåbærlyng',
            link: 'https://ordbokene.no/nn/7159'
        }, {
            week: 49,
            word: 'sødme',
            link: 'https://ordbokene.no/bm/59242'
        }, {
            week: 50,
            word: 'sildre',
            link: 'https://ordbokene.no/nn/65752'
        }, {
            week: 51,
            word: 'gebursdag',
            link: 'https://ordbokene.no/nn/24527'
        }, {
            week: 52,
            word: 'julefred',
            link: 'https://ordbokene.no/nn/125030'
        }
    ],
    2024: [
        {
            week: 1,
            word: 'kjensle',
            link: 'https://ordbokene.no/nn/38149'
        }, {
            week: 2,
            word: 'sutlaus',
            link: 'https://ordbokene.no/nn/75713'
        }, {
            week: 3,
            word: 'framdriftsplan',
            link: 'https://ordbokene.no/nn/21555'
        }, {
            week: 4,
            word: 'snodig',
            link: 'https://ordbokene.no/nn/71165'
        }, {
            week: 5,
            word: 'pønske',
            link: 'https://ordbokene.no/nn/59703'
        }, {
            week: 6,
            word: 'ubeleilig',
            link: 'https://ordbokene.no/bm/63646'
        }, {
            week: 7,
            word: 'larm',
            link: 'https://ordbokene.no/nn/44668'
        }, {
            week: 8,
            word: 'høfleg',
            link: 'https://ordbokene.no/nn/32478'
        }, {
            week: 9,
            word: 'larm',
            link: 'https://ordbokene.no/nn/44668'
        }, {
            week: 10,
            word: 'skjødesløs',
            link: 'https://ordbokene.no/bm/53138'
        }, {
            week: 11,
            word: 'veslevaksen',
            link: 'https://ordbokene.no/nn/89475'
        }, {
            week: 12,
            word: 'kvie',
            link: 'https://ordbokene.no/bm/33187'
        }, {
            week: 13,
            word: 'taus',
            link: 'https://ordbokene.no/nn/77778'
        }, {
            week: 14,
            word: 'lunefull',
            link: 'https://ordbokene.no/nn/46804'
        }, {
            week: 15,
            word: 'snar',
            link: 'https://ordbokene.no/nn/70971'
        }, {
            week: 16,
            word: 'vemodig',
            link: 'https://ordbokene.no/nn/88679'
        }, {
            week: 17,
            word: 'fnise',
            link: 'https://ordbokene.no/nn/19659'
        }, {
            week: 18,
            word: 'tilbakelegge',
            link: 'https://ordbokene.no/bm/60700'
        }, {
            week: 19,
            word: 'underfundig',
            link: 'https://ordbokene.no/nn/84658'
        }, {
            week: 20,
            word: 'skodde',
            link: 'https://ordbokene.no/nn/68098'
        }, {
            week: 21,
            word: 'fjøs',
            link: 'https://ordbokene.no/nn/18744'
        }, {
            week: 22,
            word: 'skumring',
            link: 'https://ordbokene.no/nn/69272'
        }, {
            week: 23,
            word: 'glo',
            link: 'https://ordbokene.no/nn/25761'
        }, {
            week: 24,
            word: 'skjønnlitteratur',
            link: 'https://ordbokene.no/nn/68028'
        }, {
            week: 25,
            word: 'snarveg',
            link: 'https://ordbokene.no/nn/71007'
        }, {
            week: 26,
            word: 'vrimle',
            link: 'https://ordbokene.no/nn/91036'
        }, {
            week: 27,
            word: 'openberr',
            link: 'https://ordbokene.no/nn/54588'
        }, {
            week: 28,
            word: 'dugnad',
            link: 'https://ordbokene.no/nn/13030'
        }, {
            week: 29,
            word: 'ergre',
            link: 'https://ordbokene.no/nn/123866'
        }, {
            week: 30,
            word: 'yr',
            link: 'https://ordbokene.no/nn/91708'
        }, {
            week: 31,
            word: 'trestubb',
            link: 'https://ordbokene.no/nn/80952'
        }, {
            week: 32,
            word: 'kjelke',
            link: 'https://ordbokene.no/nn/38032'
        }
    ]
};

export default words;
