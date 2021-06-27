export default {
  
  testCaseExp: [
    {
      name: "ALAN HARGIS",
      score_range: "High",
    },
    {
      name: "MARIA STEPHENS",
      score_range: "High",
    },
    {
      name: "DAVID BUI",
      score_range: "Average",
    },
    {
      name: "MINERVA TURNER",
      score_range: "Average",
    },
    {
      name: "FLORENCIA ERIKA",
      score_range: "Average",
    },
    {
      name: "DALTON VAN LEER",
      score_range: "Low",
    },
    {
      name: "DHINU DURRELL",
      score_range: "Low",
    },
    {
      name: "SANDRA BUSTAMENTE",
      score_range: "No Credit",
    },
    {
      name: "DONALD MADERA",
      score_range: "No Credit",
    }
  ],
  testCaseTU: [
    {
      name: "JOHNETTA	S	GUALTNEY ",
      score_range: "Average",
    },
    {
      name: "BILLY C ALLEN",
      score_range: "Average",
    },
    {
      name: "BEVERLY A BRENNER",
      score_range: "Average",
    },
    {
      name: "MICHAEL LESLIE ALLEN",
      score_range: "Low",
    }
  ],
  testCaseEq: [
    {
      name: "ANNETTE HAIRSTON WWKYYK",
      score_range: "High",
    },
    {
      name: "JOSEPH D KKHUTRYCA",
      score_range: "Average",
    },
    {
      name: "THOMAS	C	BBOZVGG",
      score_range: "Average",
    },
    {
      name: "DOMINIC M FFZWAA",
      score_range: "Average",
    },
    {
      name: "MAJIT R UUEE",
      score_range: "Low",
    },
  ],
  alphaStores:[
    {
      storeName: "Biz Alpha",
      products: [
        {
          productName: "Cash Rewards Visa",
          productID: "cash-rewards-worldcard"
        },
        {
          productName: "Platinum Visa",
          productID: "platinum-visa"
        }],
      storeID: 'MkCreditCards',
      submitURL:''
    },
    {
      storeName: "BBOW",
      products: [
        {
          productName: "Visa® Platinum Cash Rewards",
          productID: "visa-platinum-cash-rewards"
        },
        {
          productName: "Visa® Platinum Rewards",
          productID: "visa-platinum-rewards"
        },
        {
          productName: "Visa® Platinum",
          productID: "visa-platinum"
        }],
      storeID: 'BankersBank',
      submitURL:''

    },
    {
      storeName: "BBOK",
      products: [
        {
          productName: "VISA® Classic",
          productID: "visa-classic"
        },
        {
          productName: "VISA® Platinum",
          productID: "visa-platinum-rewards"
        }],
      storeID: 'bbok-demo',
      submitURL:''

    },
    {
      storeName: "TCM",
      products: [
        {
          productName: "Rewards Platinum Visa®",
          productID: "rewards-platinum-card"
        },
        {
          productName: "Cash Rewards Platinum Visa®",
          productID: "cash-rewards-platinum-card"
        },
        {
          productName: "Platinum Edition Visa®",
          productID: "platinum-edition-visa"
        },
        {
          productName: "Visa® Signature Travel",
          productID: "visa-signature-travel"
        }],
      storeID: '300265',
      submitURL:''

    },
    {
      storeName: "UBB",
      products: [],
      storeID: '',
      submitURL:''

    },
    {
      storeName: "Demo",
      products: [
        {
          productName: "Cash Rewards World Visa",
          productID: "cash-rewards-worldcard"
        },
        {
          productName: "Platinum Visa",
          productID: "platinum-visa"
        }],
      storeID: 'MkCreditCardsDemo',
      submitURL:''

    }   
  ],
  bigStat: [
    {
      alpha: "Light Blue",
      total: {
        monthly: 4232,
        weekly: 1465,
        daily: 199,
        percent: { value: 3.7, profit: false }
      },
      color: "primary",
      registrations: {
        monthly: { value: 830, profit: false },
        weekly: { value: 215, profit: true },
        daily: { value: 33, profit: true }
      },
      bounce: {
        monthly: { value: 4.5, profit: false },
        weekly: { value: 3, profit: true },
        daily: { value: 3.25, profit: true }
      }
    },
    {
      alpha: "Sing App",
      total: {
        monthly: 754,
        weekly: 180,
        daily: 27,
        percent: { value: 2.5, profit: true }
      },
      color: "warning",
      registrations: {
        monthly: { value: 32, profit: true },
        weekly: { value: 8, profit: true },
        daily: { value: 2, profit: false }
      },
      bounce: {
        monthly: { value: 2.5, profit: true },
        weekly: { value: 4, profit: false },
        daily: { value: 4.5, profit: false }
      }
    },
    {
      alpha: "RNS",
      total: {
        monthly: 1025,
        weekly: 301,
        daily: 44,
        percent: { value: 3.1, profit: true }
      },
      color: "secondary",
      registrations: {
        monthly: { value: 230, profit: true },
        weekly: { value: 58, profit: false },
        daily: { value: 15, profit: false }
      },
      bounce: {
        monthly: { value: 21.5, profit: false },
        weekly: { value: 19.35, profit: false },
        daily: { value: 10.1, profit: true }
      }
    }
  ],
  notifications: [
    {
      id: 0,
      icon: "thumbs-up",
      color: "primary",
      content:
        'Ken <span className="fw-semi-bold">accepts</span> your invitation'
    },
    {
      id: 1,
      icon: "file",
      color: "success",
      content: "Report from LT Company"
    },
    {
      id: 2,
      icon: "envelope",
      color: "danger",
      content: '4 <span className="fw-semi-bold">Private</span> Mails'
    },
    {
      id: 3,
      icon: "comment",
      color: "success",
      content: '3 <span className="fw-semi-bold">Comments</span> to your Post'
    },
    {
      id: 4,
      icon: "cog",
      color: "light",
      content: 'New <span className="fw-semi-bold">Version</span> of RNS app'
    },
    {
      id: 5,
      icon: "bell",
      color: "info",
      content:
        '15 <span className="fw-semi-bold">Notifications</span> from Social Apps'
    }
  ],
  expTable: [
    {
      id: 0,
      first: "SANDRA",
      middle: "",
      last: "BUSTAMENTE",
      address: "3320 MIDDLE BELLVILLE RD",
      city:	"LEXINGTON",
      state: "OH",	
      zip: "44904",
      dob: "01211969",
      ssn:	'666696264',
      phone: '4197563447',	
      creditScore: '9002',
    },
    {
      id: 1,
      first: "DONALD",
      middle: "",
      last: "MADERA",
      address: "4212 ALABAMA AVE",
      city:	"KENNER",
      state: "LA",	
      zip: "70065",
      dob: "01261916",
      ssn:	'666523068',
      phone: '5044662001',	
      creditScore: '9001',
    },
    {
      id: 2,
      first: "ALAN",
      middle: "",
      last: "HARGIS",
      address: "2274 FARNWORTH ST",
      city:	"CAMARILLO",
      state: "CA",	
      zip: "93010",
      dob: "01021946",
      ssn:	'666541587',
      phone: '5554448441',	
      creditScore: '850',
    },
    {
      id: 3,
      first: "MARIA",
      middle: "",
      last: "STEPHENS",
      address: "111 E SCHIRMER ST",
      city:	"SAINT LOUIS",
      state: "MO",	
      zip: "63111",
      dob: "03201935",
      ssn:	'666550773',
      phone: '2815477898',	
      creditScore: '800',
    },
    {
      id: 4,
      first: "DAVID",
      middle: "",
      last: "BUI",
      address: "6441 KEATS AVE S",
      city:	"COTTAGE GROVE",
      state: "MN",	
      zip: "55016",
      dob: "06191960",
      ssn:	'666169788',
      phone: '6517683968',	
      creditScore: '771',
    },
    {
      id: 5,
      first: "MINERVA",
      middle: "",
      last: "TURNER",
      address: "10385 S SUMMIT PEAK PL",
      city:	"TUCSON",
      state: "AZ",	
      zip: "85706",
      dob: "07071956",
      ssn:	'666030873',
      phone: '5208078680',	
      creditScore: '710',
    },
    {
      id: 6,
      first: "FLORENCIA",
      middle: "",
      last: "ERIKA",
      address: "PO BOX 327  ",
      city:	"SIERRA BLANCA",
      state: "TX",	
      zip: "79851",
      dob: "12081964",
      ssn:	'666345030',
      phone: '9153691679',	
      creditScore: '670',
    },
    {
      id: 7,
      first: "DALTON",
      middle: "",
      last: "VAN LEER",
      address: "6088 S 2075 E",
      city:	"SALT LAKE CITY",
      state: "UT",	
      zip: "84121",
      dob: "05271972",
      ssn:	'666231354',
      phone: '8018085292',	
      creditScore: '570',
    },
    {
      id: 8,
      first: "DHINU",
      middle: "",
      last: "DURRELL",
      address: "4101 DRIPPING SPRINGS RD",
      city:	"GLASGOW",
      state: "KY",	
      zip: "42141",
      dob: "04211962",
      ssn:	'666415182',
      phone: '2707833151',	
      creditScore: '469',
    }
  ],
  tuTable: [
    {
      id: 0,
      first: "JOHNETTA",
      middle: "S",
      last: "GUALTNEY",
      address: "4757 W PK",
      city:	"PLANO",
      state: "TX",	
      zip: "75093",
      dob: "08081990",
      ssn:	'666348518',
      phone: '7148894502',	
      creditScore: '762',
    },
    {
      id: 1,
      first: "BILLY",
      middle: "C",
      last: "ALLEN",
      address: "2508 SEEDLING GROVE CT",
      city:	"VIRGINIA BEACH",
      state: "VA",	
      zip: "23456",
      dob: "03201978",
      ssn:	'666221475',
      phone: '3632621457',	
      creditScore: '649',
    },
    {
      id: 2,
      first: "BEVERLY",
      middle: "A",
      last: "BRENNER",
      address: "942 FOREST LAKES DR",
      city:	"CHESAPEAKE",
      state: "VA",	
      zip: "23322",
      dob: "03021945",
      ssn:	'666221642',
      phone: '1474564859',	
      creditScore: '647',
    },
    {
      id: 3,
      first: "MICHAEL",
      middle: "LESLIE",
      last: "ALLEN",
      address: "3409 TREXLER AV",
      city:	"PORTSMOUTH",
      state: "VA",	
      zip: "23704",
      dob: "01011978",
      ssn:	'666186186',
      phone: '8741255666',	
      creditScore: '492',
    }
  ],
  eqfaxTable: [
    {
      id: 0,
      first: "ANNETTE",
      middle: "HAIRSTON",
      last: "WWKYYK",
      address: "479 CZBVWFZW DR",
      city:	"NEW ELLENTON",
      state: "SC",	
      zip: "29809",
      dob: "02191962",
      ssn:	'666050979',
      phone: '8035551212',	
      creditScore: '828',
    },
    {
      id: 1,
      first: "JOSEPH",
      middle: "D",
      last: "KKHUTRYCA",
      address: "269 XJHBY RQKZT LN",
      city:	"WAVERLY",
      state: "TN",	
      zip: "37185",
      dob: "12241972",
      ssn:	'666181004',
      phone: '7145489966',	
      creditScore: '749',
    },
    {
      id: 2,
      first: "THOMAS",
      middle: "C",
      last: "BBOZVGG",
      address: "753 88OK AVE S",
      city:	"NORTH MYRTLE BEACH",
      state: "SC",	
      zip: "29582",
      dob: "3091962",
      ssn:	'666070981',
      phone: '5411253698',	
      creditScore: '666',
    },
    {
      id: 3,
      first: "DOMINIC",
      middle: "M",
      last: "FFZWAA",
      address: "2122 SWCISGW ST",
      city:	"MYRTLE BEACH",
      state: "SC",	
      zip: "29577",
      dob: "8081990",
      ssn:	'666190981',
      phone: '8435551212',	
      creditScore: '621',
    },
    {
      id: 4,
      first: "MAJIT",
      middle: "R",
      last: "UUEE",
      address: "77942 MXYWYJB ST",
      city:	"WOODBRIDGE",
      state: "VA",	
      zip: "22192",
      dob: "02151949",
      ssn:	'666186528',
      phone: '2125630210',	
      creditScore: '516',
    }
  ],
  frozenTable: [
    {
      id: 0,
      first: "ANTONIO",
      middle: "C",
      last: "BENNETT",
      address: "3403 NEW YORK DR",
      city:	"CORONA",
      state: "CA",	
      zip: "92882",
      dob: "08051971",
      ssn:	'666544707',
      phone: '9517367833',	
      creditBureau: 'Experian',
    },
    {
      id: 1,
      first: "TEX",
      middle: "",
      last: "JOHNSON",
      address: "587 Prairie View Rd",
      city:	"TEXARKANA",
      state: "AR",	
      zip: "71854",
      dob: "11101967",
      ssn:	'666877665',
      phone: '9852561212',	
      creditBureau: 'TransUnion',
    },
    {
      id: 2,
      first: "MARY",
      middle: "B",
      last: "NNDPX",
      address: "111 EJLYXHPX ST",
      city:	"MISSOULA",
      state: "MT",	
      zip: "59801",
      dob: "12121945",
      ssn:	'666516481',
      phone: '8324561245',	
      creditBureau: 'Equifax',
    }
  ],
  ofacTable: [
    {
      id: 0,
      first: "OSVALDO",
      middle: "ANTONIO",
      last: "VALDEZ",
      address: "827 MARIPOSA ST",
      city:	"GLENDALE",
      state: "CA",	
      zip: "91205",
      dob: "09121978",
      ssn:	'666587637',
      phone: '8182407706',	
      creditBureau: 'Experian',
    },
    {
      id: 1,
      first: "MAX",
      middle: "E",
      last: "GGTPQ",
      address: "687 KZZNBK ST SW",
      city:	"ATTALLA",
      state: "AL",	
      zip: "35954",
      dob: "08191966",
      ssn:	'666029022',
      phone: '2565551212',	
      creditBureau: 'Equifax',
    },
    {
      id: 2,
      first: "RRICHARDD",
      middle: "",
      last: "DDRAKEE",
      address: "2048 E AMERICAN BLVD",
      city:	"BLOMINGTON",
      state: "MN",	
      zip: "55425",
      dob: "08191966",
      ssn:	'666993534',
      phone: '6122040035',	
      creditBureau: 'Chexsystems',
    }
  ]
};