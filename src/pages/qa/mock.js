export default {
  
  tasks: [
    {
      id: 0,
      type: "Meeting",
      title: "Meeting with Andrew Piker",
      time: "9:00"
    },
    {
      id: 1,
      type: "Call",
      title: "Call with HT Company",
      time: "12:00"
    },
    {
      id: 2,
      type: "Meeting",
      title: "Meeting with Zoe Alison",
      time: "14:00"
    },
    {
      id: 3,
      type: "Interview",
      title: "Interview with HR",
      time: "15:00"
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


// ///Dev Defect Burn Time this month
// axios.get("https://cors-anywhere.herokuapp.com/https://project.mkdecision.com/time_entries.json?query_id=120&key=92de8d1cb8c1d4ad6c1cd81917da1cc9e15b3920",{
//   'Cookie': '_redmine_session=T1pzMlJERkFzMy8rY21hVkI2NFREbytRUmlWTTdXVFhqS3VmNi9pWjhKTlhMOWo0bEE2S3kwK0RXOGZQZmNlWGZ5Rkw4NUU4bDZOdmJWMjJDRVU1K0FiQi9XVXVwS2VGTHhDWFMxY1FLaVJaZitTNFpjVElveXdQbVZEUC9ZWjloS3hqMmZ5V2hBd1FwbG1uNkJLSzNnPT0tLXNpcHVBNUkzbVdBcjI5WDFZUSt2VGc9PQ%3D%3D--9e19b235e9f5938daf57693cf0e2ac803258eed6'
// })
// .then(res => {
//   console.log(res)
// }).catch(error => {
//   console.log(error)
// })

// ///QA Defect Burn Time this month
// axios.get("https://cors-anywhere.herokuapp.com/https://project.mkdecision.com/time_entries.json?query_id=120&key=92de8d1cb8c1d4ad6c1cd81917da1cc9e15b3920",{
//   'Cookie': '_redmine_session=T1pzMlJERkFzMy8rY21hVkI2NFREbytRUmlWTTdXVFhqS3VmNi9pWjhKTlhMOWo0bEE2S3kwK0RXOGZQZmNlWGZ5Rkw4NUU4bDZOdmJWMjJDRVU1K0FiQi9XVXVwS2VGTHhDWFMxY1FLaVJaZitTNFpjVElveXdQbVZEUC9ZWjloS3hqMmZ5V2hBd1FwbG1uNkJLSzNnPT0tLXNpcHVBNUkzbVdBcjI5WDFZUSt2VGc9PQ%3D%3D--9e19b235e9f5938daf57693cf0e2ac803258eed6'
// })
// .then(res => {
//   console.log(res)
// }).catch(error => {
//   console.log(error)
// })