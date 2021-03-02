const [janIssues,setJanIssues] = useState([])

function grabRedmineData(){
    useEffect(() => {
        fetch("https://cors-anywhere.herokuapp.com/https://project.mkdecision.com/issues.json?query_id=115&key=9a10d4bc69e91eb6e3fc37ba251f6244dbec50ef")
        .then( res => res.json())
        .then(
          (result) => {
            setJanIssues(result)
          },
          (error) =>{
            console.log(error)
          }
        )
      },[])
}
grabRedmineData()
console.log(janIssues)
export default {
    bugsYear:[
        {
            jan: "k"
        }
    ]
}