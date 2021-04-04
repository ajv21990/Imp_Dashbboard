import React, {useEffect,useState} from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Chip
} from "@material-ui/core";
import useStyles from "../../styles";

// Change status here to indicate if a we are over or under threshold
const states = {
  live: "success",
  development: "warning",
  requirements: "secondary",
};

export default function TableComponent({ data }) {
  // Setting constants for Project Data
  const [AMBugs,setAMBugs] = useState([])
  const [BBOWBugs,setBBOWBugs] = useState([])
  const [BBOKBugs,setBBOKBugs] = useState([])
  const [BSBBugs,setBSBBugs] = useState([])
  const [CSBBugs,setCSBBugs] = useState([])
  const [EquitableBugs,setEquitableBugs] = useState([])
  const [EvergreenBugs,setEvergreenBugs] = useState([])
  const [FBABugs,setFBABugs] = useState([])
  const [LasAnimasBugs,setLasAnimasBugs] = useState([])
  const [ICBABugs,setICBABugs] = useState([])
  const [SuttonBugs,setSuttonBugs] = useState([])
  const [TCMBugs,setTCMBugs] = useState([])
  const [UBBBugs,setUBBBugs] = useState([])
  const [WaFedBugs,setWaFedBugs] = useState([])

//   // API Calls to fill bug data
//   useEffect(() => {
//     fetch("https://cors-anywhere.herokuapp.com/https://project.mkdecision.com/projects/am-bank-inc/issues.json?query_id=117&key=9a10d4bc69e91eb6e3fc37ba251f6244dbec50ef")
//     .then( res => res.json())
//     .then(
//       (result) => {
//         setAMBugs(result)
//       },
//       (error) =>{
//         console.log(error)
//       }
//     )
//   },[])
// data[0].bugs = AMBugs.total_count
// data[0].hours = 86.30

// useEffect(() => {
//   fetch("https://cors-anywhere.herokuapp.com/https://project.mkdecision.com/projects/bankers-bank/issues.json?query_id=117&key=9a10d4bc69e91eb6e3fc37ba251f6244dbec50ef")
//   .then( res => res.json())
//   .then(
//     (result) => {
//       setBBOWBugs(result)
//     },
//     (error) =>{
//       console.log(error)
//     }
//   )
// },[])
// data[1].bugs = BBOWBugs.total_count
// data[1].hours = 18.19

// useEffect(() => {
//   fetch("https://cors-anywhere.herokuapp.com/https://project.mkdecision.com/projects/bankers-bank-of-kansas/issues.json?query_id=117&key=9a10d4bc69e91eb6e3fc37ba251f6244dbec50ef")
//   .then( res => res.json())
//   .then(
//     (result) => {
//       setBBOKBugs(result)
//     },
//     (error) =>{
//       console.log(error)
//     }
//   )
// },[])
// data[2].bugs = BBOKBugs.total_count
// data[2].hours = 107.98

// useEffect(() => {
//   fetch("https://cors-anywhere.herokuapp.com/https://project.mkdecision.com/projects/beneficial-state-bank/issues.json?query_id=117&key=9a10d4bc69e91eb6e3fc37ba251f6244dbec50ef")
//   .then( res => res.json())
//   .then(
//     (result) => {
//       setBSBBugs(result)
//     },
//     (error) =>{
//       console.log(error)
//     }
//   )
// },[])
// data[3].bugs = BSBBugs.total_count
// data[3].hours = 33.92

// useEffect(() => {
//   fetch("https://cors-anywhere.herokuapp.com/https://project.mkdecision.com/projects/csb-newcastle/issues.json?query_id=117&key=9a10d4bc69e91eb6e3fc37ba251f6244dbec50ef")
//   .then( res => res.json())
//   .then(
//     (result) => {
//       setCSBBugs(result)
//     },
//     (error) =>{
//       console.log(error)
//     }
//   )
// },[])
// data[4].bugs = CSBBugs.total_count
// data[4].hours = 10.21

// useEffect(() => {
//   fetch("https://cors-anywhere.herokuapp.com/https://project.mkdecision.com/projects/equitable-bank/issues.json?query_id=117&key=9a10d4bc69e91eb6e3fc37ba251f6244dbec50ef")
//   .then( res => res.json())
//   .then(
//     (result) => {
//       setEquitableBugs(result)
//     },
//     (error) =>{
//       console.log(error)
//     }
//   )
// },[])
// data[5].bugs = EquitableBugs.total_count
// data[5].hours = 11.85

// useEffect(() => {
//   fetch("https://cors-anywhere.herokuapp.com/https://project.mkdecision.com/projects/evergreen-bank/issues.json?query_id=117&key=9a10d4bc69e91eb6e3fc37ba251f6244dbec50ef")
//   .then( res => res.json())
//   .then(
//     (result) => {
//       setEvergreenBugs(result)
//     },
//     (error) =>{
//       console.log(error)
//     }
//   )
// },[])
// data[6].bugs = EvergreenBugs.total_count
// data[6].hours = 427.81

// useEffect(() => {
//   fetch("https://cors-anywhere.herokuapp.com/https://project.mkdecision.com/projects/first-bank-of-alabama/issues.json?query_id=117&key=9a10d4bc69e91eb6e3fc37ba251f6244dbec50ef")
//   .then( res => res.json())
//   .then(
//     (result) => {
//       setFBABugs(result)
//     },
//     (error) =>{
//       console.log(error)
//     }
//   )
// },[])
// data[7].bugs = FBABugs.total_count
// data[7].hours = 696.16

// useEffect(() => {
//   fetch("https://cors-anywhere.herokuapp.com/https://project.mkdecision.com/projects/fnb-las-animas/issues.json?query_id=117&key=9a10d4bc69e91eb6e3fc37ba251f6244dbec50ef")
//   .then( res => res.json())
//   .then(
//     (result) => {
//       setLasAnimasBugs(result)
//     },
//     (error) =>{
//       console.log(error)
//     }
//   )
// },[])
// data[8].bugs = LasAnimasBugs.total_count
// data[8].hours = 72.12

// useEffect(() => {
//   fetch("https://cors-anywhere.herokuapp.com/https://project.mkdecision.com/projects/icba-bancard/issues.json?query_id=117&key=9a10d4bc69e91eb6e3fc37ba251f6244dbec50ef")
//   .then( res => res.json())
//   .then(
//     (result) => {
//       setICBABugs(result)
//     },
//     (error) =>{
//       console.log(error)
//     }
//   )
// },[])
// data[9].bugs = ICBABugs.total_count
// data[9].hours = 21.59

// useEffect(() => {
//   fetch("https://cors-anywhere.herokuapp.com/https://project.mkdecision.com/projects/sutton-bank/issues.json?query_id=117&key=9a10d4bc69e91eb6e3fc37ba251f6244dbec50ef")
//   .then( res => res.json())
//   .then(
//     (result) => {
//       setSuttonBugs(result)
//     },
//     (error) =>{
//       console.log(error)
//     }
//   )
// },[])
// data[10].bugs = SuttonBugs.total_count
// data[10].hours = 0

// useEffect(() => {
//   fetch("https://cors-anywhere.herokuapp.com/https://project.mkdecision.com/projects/tcm-bank/issues.json?query_id=117&key=9a10d4bc69e91eb6e3fc37ba251f6244dbec50ef")
//   .then( res => res.json())
//   .then(
//     (result) => {
//       setTCMBugs(result)
//     },
//     (error) =>{
//       console.log(error)
//     }
//   )
// },[])
// data[11].bugs = TCMBugs.total_count
// data[11].hours = 179.09

// useEffect(() => {
//   fetch("https://cors-anywhere.herokuapp.com/https://project.mkdecision.com/projects/united-bankers-bank/issues.json?query_id=117&key=9a10d4bc69e91eb6e3fc37ba251f6244dbec50ef")
//   .then( res => res.json())
//   .then(
//     (result) => {
//       setUBBBugs(result)
//     },
//     (error) =>{
//       console.log(error)
//     }
//   )
// },[])
// data[12].bugs = UBBBugs.total_count
// data[12].hours = 10.34

// useEffect(() => {
//   fetch("https://cors-anywhere.herokuapp.com/https://project.mkdecision.com/projects/washington-federal-bank/issues.json?query_id=117&key=9a10d4bc69e91eb6e3fc37ba251f6244dbec50ef")
//   .then( res => res.json())
//   .then(
//     (result) => {
//       setWaFedBugs(result)
//     },
//     (error) =>{
//       console.log(error)
//     }
//   )
// },[])
// data[13].bugs = WaFedBugs.total_count
// data[13].hours = 103.44









  const classes = useStyles();
  var keys = Object.keys(data[0]).map(i => i.toUpperCase());
  keys.shift(); // delete "id" key
  return (
    <Table className="mb-0">
      <TableHead>
        <TableRow>
          {keys.map(key => (
            <TableCell key={key}>{key}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(({ id, name, pm, hours, bugs, status }) => (
          <TableRow key={id}>
            <TableCell className="pl-3 fw-normal">{name}</TableCell>
            <TableCell>{pm}</TableCell>
            <TableCell>{hours}</TableCell>
            <TableCell>{bugs}</TableCell>
            <TableCell>
              <Chip label={status} classes={{root: classes[states[status.toLowerCase()]]}}/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
