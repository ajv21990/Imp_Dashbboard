import React, { useEffect, useState } from "react";
import axios from 'axios'

import {
  Grid,
  LinearProgress,
  Select,
  OutlinedInput,
  MenuItem,
  Button
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import {
  ResponsiveContainer,
  ComposedChart,
  AreaChart,
  LineChart,
  Line,
  Area,
  PieChart,
  Pie,
  Cell,
  YAxis,
  XAxis,
} from "recharts";
// styles
import useStyles from "./styles";

// components
import mock from "./mock";
import Widget from "../../components/Widget/Widget";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Typography } from "../../components/Wrappers/Wrappers";
import Dot from "../../components/Sidebar/components/Dot";
import Table from "./components/Table/Table";
import BigStat from "./components/BigStat/BigStat";

const mainChartData = getMainChartData();
let PieChartData = [
  { name: "QA", value: 400, color: "primary" },
  { name: "System Updates", value: 300, color: "secondary" },
  { name: "Quality Control Change", value: 300, color: "warning" },
  { name: "Pending System Update", value: 200, color: "success" },
];

// Grabbing Redmine Queries
///CLOSED this month
// axios.get("https://cors-anywhere.herokuapp.com/https://project.mkdecision.com/issues.json?query_id=115&key=9a10d4bc69e91eb6e3fc37ba251f6244dbec50ef",{
//   'Cookie': '_redmine_session=T1pzMlJERkFzMy8rY21hVkI2NFREbytRUmlWTTdXVFhqS3VmNi9pWjhKTlhMOWo0bEE2S3kwK0RXOGZQZmNlWGZ5Rkw4NUU4bDZOdmJWMjJDRVU1K0FiQi9XVXVwS2VGTHhDWFMxY1FLaVJaZitTNFpjVElveXdQbVZEUC9ZWjloS3hqMmZ5V2hBd1FwbG1uNkJLSzNnPT0tLXNpcHVBNUkzbVdBcjI5WDFZUSt2VGc9PQ%3D%3D--9e19b235e9f5938daf57693cf0e2ac803258eed6'
// })
// .then(res => {
//   console.log(res.data)
// }).catch(error => {
//   console.log(error)
// })

export default function QA_Dashboard(props) {
// Setting constants for QA Data
const [closedIssues,setClosedIssues] = useState([])
const [openIssues,setOpenIssues] = useState([])
const [createdIssues,setCreatedIssues] = useState([])


// Hooks to grab data
useEffect(() => {
  fetch("https://cors-anywhere.herokuapp.com/https://project.mkdecision.com/issues.json?query_id=115&key=9a10d4bc69e91eb6e3fc37ba251f6244dbec50ef")
  .then( res => res.json())
  .then(
    (result) => {
      setClosedIssues(result)
    },
    (error) =>{
      console.log(error)
    }
  )
},[])

useEffect(() => {
  fetch("https://cors-anywhere.herokuapp.com/https://project.mkdecision.com/issues.json?query_id=118&key=9a10d4bc69e91eb6e3fc37ba251f6244dbec50ef")
  .then( res => res.json())
  .then(
    (result) => {
      setOpenIssues(result)
    },
    (error) =>{
      console.log(error)
    }
  )
},[])

useEffect(() => {
  fetch("https://cors-anywhere.herokuapp.com/https://project.mkdecision.com/issues.json?query_id=117&key=9a10d4bc69e91eb6e3fc37ba251f6244dbec50ef")
  .then( res => res.json())
  .then(
    (result) => {
      setCreatedIssues(result)
    },
    (error) =>{
      console.log(error)
    }
  )
},[])
  var classes = useStyles();
  var theme = useTheme();

  // local
  var [mainChartState, setMainChartState] = useState("monthly");
  return (
    <>
      <PageTitle title="QA"/>
      <Grid container spacing={4}>
        <Grid item lg={3} md={8} sm={6} xs={12}>
          <Widget
            title="This Month's Bugs Detected"
            upperTitle
            className={classes.card}
            bodyClass={classes.fullHeightBody}
          >
            <div className={classes.performanceLegendWrapper}>
            <div className={classes.legendElement}>
                <Dot color="success" />
                <Typography
                  color="text"
                  colorBrightness="secondary"
                  className={classes.legendElementText}
                >
                  Created
                </Typography>
              </div>
              <div className={classes.legendElement}>
                <Dot color="primary" />
                <Typography
                  color="text"
                  colorBrightness="secondary"
                  className={classes.legendElementText}
                >
                  Closed
                </Typography>
              </div>
              <div className={classes.legendElement}>
                <Dot color="warning" />
                <Typography
                  color="text"
                  colorBrightness="secondary"
                  className={classes.legendElementText}
                >
                  Open
                </Typography>
              </div>
            </div>
            <div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                Created
              </Typography>
              <LinearProgress
                variant="determinate"
                value={createdIssues.total_count}
                classes={{ barColorPrimary: classes.progressBarSuccess }}
                className={classes.progress}
              />
            </div>
            <div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                Closed
              </Typography>
              <LinearProgress
                variant="determinate"
                value={closedIssues.total_count}
                classes={{ barColorPrimary: classes.progressBarPrimary }}
                className={classes.progress}
              />
            </div>
            <div>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                Open
              </Typography>
              <LinearProgress
                variant="determinate"
                value={openIssues.total_count}
                classes={{ barColorPrimary: classes.progressBarWarning }}
                className={classes.progress}
              />
            </div>
            <br/>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item xs={4}>
                <Typography color="text" colorBrightness="secondary" noWrap>
                  Open
                </Typography>
                <Typography size="md">{openIssues.total_count}</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography color="text" colorBrightness="secondary" noWrap>
                  QA Changes Needed
                </Typography>
                <Typography size="md">73</Typography>
              </Grid>
            </Grid>
          </Widget>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Widget
            title="Bugs Resolved Per Sprint"
            upperTitle
            bodyClass={classes.fullHeightBody}
            className={classes.card}
          >
            <div className={classes.visitsNumberContainer}>
              <Grid container item alignItems={"center"}>
                <Grid item xs={6}>
              <Typography size="xl" weight="medium" noWrap>
                12,678
              </Typography>
                </Grid>
                <Grid item xs={6}>
              <LineChart
                width={100}
                height={30}
                data={[
                  { value: 10 },
                  { value: 15 },
                  { value: 10 },
                  { value: 17 },
                  { value: 18 },
                ]}
              >
                <Line
                  type="natural"
                  dataKey="value"
                  stroke={theme.palette.primary.main}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
                </Grid>
              </Grid>
            </div>
            {/* <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item xs={4}>
                <Typography color="text" colorBrightness="secondary" noWrap>
                  Created
                </Typography>
                <Typography size="md">860</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography color="text" colorBrightness="secondary" noWrap>
                  Closed
                </Typography>
                <Typography size="md">32</Typography>
              </Grid>
            </Grid> */}
          </Widget>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Widget title="Issue Breakdown" upperTitle className={classes.card}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <ResponsiveContainer width="100%" height={144}>
                  <PieChart>
                    <Pie
                      data={PieChartData}
                      innerRadius={30}
                      outerRadius={40}
                      dataKey="value"
                    >
                      {PieChartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={theme.palette[entry.color].main}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </Grid>
              <Grid item xs={6}>
                <div className={classes.pieChartLegendWrapper}>
                  {PieChartData.map(({ name, value, color }, index) => (
                    <div key={color} className={classes.legendItemContainer}>
                      <Dot color={color} />
                      <Typography style={{ whiteSpace: "nowrap", fontSize: 12 }} >
                        &nbsp;{name}&nbsp;
                      </Typography>
                      <Typography color="text" colorBrightness="secondary">
                        &nbsp;{value}
                      </Typography>
                    </div>
                  ))}
                </div>
              </Grid>
            </Grid>
          </Widget>
        </Grid>
        <Grid item xs={12}>
          <Widget
            bodyClass={classes.mainChartBody}
            header={
              <div className={classes.mainChartHeader}>
                <Typography
                  variant="h5"
                  color="text"
                  colorBrightness="secondary"
                >
                  Defect Burn Time
                </Typography>
                <div className={classes.mainChartHeaderLabels}>
                  <div className={classes.mainChartHeaderLabel}>
                    <Dot color="warning" />
                    <Typography className={classes.mainChartLegentElement}>
                      QA
                    </Typography>
                  </div>
                  <div className={classes.mainChartHeaderLabel}>
                    <Dot color="primary" />
                    <Typography className={classes.mainChartLegentElement}>
                      Dev
                    </Typography>
                  </div>
                </div>
                <Select
                  value={mainChartState}
                  onChange={e => setMainChartState(e.target.value)}
                  input={
                    <OutlinedInput
                      labelWidth={0}
                      classes={{
                        notchedOutline: classes.mainChartSelectRoot,
                        input: classes.mainChartSelect,
                      }}
                    />
                  }
                  autoWidth
                >
                  <MenuItem value="daily">Daily</MenuItem>
                  <MenuItem value="weekly">Weekly</MenuItem>
                  <MenuItem value="monthly">Monthly</MenuItem>
                </Select>
              </div>
            }
          >
            <ResponsiveContainer width="100%" minWidth={500} height={350}>
              <ComposedChart
                margin={{ top: 0, right: -15, left: -15, bottom: 0 }}
                data={mainChartData}
              >
                <YAxis
                  ticks={[0, 2500, 5000, 7500]}
                  tick={{ fill: theme.palette.text.hint + "80", fontSize: 14 }}
                  stroke={theme.palette.text.hint + "80"}
                  tickLine={false}
                />
                <XAxis
                  tickFormatter={i => i + 1}
                  tick={{ fill: theme.palette.text.hint + "80", fontSize: 14 }}
                  stroke={theme.palette.text.hint + "80"}
                  tickLine={false}
                />
                <Area
                  type="natural"
                  dataKey="desktop"
                  fill={theme.palette.background.light}
                  strokeWidth={0}
                  activeDot={false}
                />
                <Line
                  type="natural"
                  dataKey="mobile"
                  stroke={theme.palette.primary.main}
                  strokeWidth={2}
                  dot={false}
                  activeDot={false}
                />
                <Line
                  type="linear"
                  dataKey="tablet"
                  stroke={theme.palette.warning.main}
                  strokeWidth={2}
                  dot={{
                    stroke: theme.palette.warning.dark,
                    strokeWidth: 2,
                    fill: theme.palette.warning.main,
                  }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </Widget>
        </Grid>
        {/* Could possibly use in the future but commenting out charts for now */}
        {/* {mock.bigStat.map(stat => (
          <Grid item md={4} sm={6} xs={12} key={stat.product}>
            <BigStat {...stat} />
          </Grid>
        ))} */}
        <Grid item xs={12}>
          <Widget
            title="Bugs per Client"
            upperTitle
            noBodyPadding
            bodyClass={classes.tableWidget}
          >
            <Table data={mock.table} />
          </Widget>
        </Grid>
        <Grid item xs={12}>
          <Widget
            title="Bugs per Product"
            upperTitle
            noBodyPadding
            bodyClass={classes.tableWidget}
          >
            <Table data={mock.table} />
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}

// #######################################################################
function getRandomData(length, min, max, multiplier = 10, maxDiff = 10) {
  var array = new Array(length).fill();
  let lastValue;

  return array.map((item, index) => {
    let randomValue = Math.floor(Math.random() * multiplier + 1);

    while (
      randomValue <= min ||
      randomValue >= max ||
      (lastValue && randomValue - lastValue > maxDiff)
    ) {
      randomValue = Math.floor(Math.random() * multiplier + 1);
    }

    lastValue = randomValue;

    return { value: randomValue };
  });
}

function getMainChartData() {


  var resultArray = [];
  var tablet = getRandomData(31, 3500, 6500, 7500, 1000);
  var desktop = getRandomData(31, 1500, 7500, 7500, 1500);
  var mobile = getRandomData(31, 1500, 7500, 7500, 1500);

  for (let i = 0; i < tablet.length; i++) {
    resultArray.push({
      tablet: tablet[i].value,
      desktop: desktop[i].value,
      mobile: mobile[i].value,
    });
  }

  return resultArray;
}
