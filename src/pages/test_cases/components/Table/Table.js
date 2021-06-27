import React, {useEffect,useState} from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Collapse,
  IconButton
} from "@material-ui/core";
import useStyles from "../../styles";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

export default function TableComponent({ data }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  var keys = Object.keys(data[0]).map(i => 
    // formatting credit score column name
    (i === 'creditScore'? i = "CREDIT SCORE":i.toUpperCase())
    );
  keys.shift(); // delete "id" key
  keys[10] = (keys[10] === "CREDITBUREAU" ? "CREDIT BUREAU": 'CREDIT SCORE') // changing credit bureau col "id" key


  return (
    <Table className="mb-0">
      <TableHead>
        <TableRow>
          {keys.map(key => (
            <TableCell style={{backgroundColor: "#1096CB"}} align='right' key={key}>{key}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(({ id,first, middle, last, address,city,state,zip,dob,ssn,phone,creditScore,creditBureau }) => (
          <TableRow hover={true} key={id}>
            <TableCell align='right'>{first}</TableCell>
            <TableCell align='right'>{middle}</TableCell>
            <TableCell align='right'>{last}</TableCell>
            <TableCell align='right'>{address}</TableCell>
            <TableCell align='right'>{city}</TableCell>
            <TableCell align='right'>{state}</TableCell>
            <TableCell align='right'>{zip}</TableCell>
            <TableCell align='right'>{dob}</TableCell>
            <TableCell align='right'>{ssn}</TableCell>
            <TableCell align='right'>{phone}</TableCell>
            {!creditScore?<TableCell align='right'>{creditBureau}</TableCell>:<TableCell align='right'>{creditScore}</TableCell>}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
