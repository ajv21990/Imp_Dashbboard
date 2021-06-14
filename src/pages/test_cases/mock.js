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
  table: [
    {
      id: 0,
      name: "AM Bank",
      pm: "Max",
      hours: "$25 224.2",
      bugs: "",
      status: "Live"
    },
    {
      id: 1,
      name: "BBOW",
      pm: "Bailey",
      hours: "$1 254.2",
      bugs: "",
      status: "Live"
    },
    {
      id: 2,
      name: "BBOK",
      pm: "Bailey",
      hours: "$1 570.0",
      bugs: "",
      status: "Live"
    },
    {
      id: 3,
      name: "Beneficial State Bank",
      pm: "Bailey",
      hours: "$5 224.5",
      bugs: "",
      status: "Live"
    },
    {
      id: 4,
      name: "CSB Newcastle",
      pm: "Max",
      hours: "$43 594.7",
      bugs: "",
      status: "Requirements"
    },
    {
      id: 5,
      name: "Equitable Bank",
      pm: "Bailey",
      hours: "$43 594.7",
      bugs: "",
      status: "Requirements"
    },
    {
      id: 6,
      name: "Evergreen Bank",
      pm: "Bailey",
      hours: "$43 594.7",
      bugs: "",
      status: "Development"
    },
    {
      id: 7,
      name: "First Bank of Alabama",
      pm: "Max",
      hours: "$43 594.7",
      bugs: "",
      status: "Live"
    },
    {
      id: 8,
      name: "FNB Las Animas",
      pm: "Max",
      hours: "$43 594.7",
      bugs: "",
      status: "Live"
    },
    {
      id: 9,
      name: "ICBA",
      pm: "Bailey",
      hours: "$43 594.7",
      bugs: "",
      status: "Live"
    },
    {
      id: 10,
      name: "Sutton Bank",
      pm: "Bailey",
      hours: "$43 594.7",
      bugs: "",
      status: "Live"
    },
    {
      id: 11,
      name: "TCM",
      pm: "Max",
      hours: "$43 594.7",
      bugs: "",
      status: "Development"
    },
    {
      id: 12,
      name: "UBB",
      pm: "Bailey",
      hours: "$43 594.7",
      bugs: "",
      status: "Live"
    },
    {
      id: 13,
      name: "Washington Federal Bank",
      pm: "Bailey",
      hours: "$43 594.7",
      bugs: "",
      status: "Requirements"
    }
  ]
};