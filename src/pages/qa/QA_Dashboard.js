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
  Legend,
  Tooltip,
  BarChart,
  Bar
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
const ProductChartData = getProductBurnData();
const ClientChartData = getClientBurnData();

let PieChartData = [
  { name: "Internally Reported", value: 0, color: "warning" },
  { name: "Customer Reported", value: 0, color: "primary" },
];



export default function QA_Dashboard(props) {
// Setting constants for QA Data
const [closedIssues,setClosedIssues] = useState([])
const [openIssues,setOpenIssues] = useState([])
const [createdIssues,setCreatedIssues] = useState([])
const [changesIssues,setChangesIssues] = useState([])
const [janIssues,setJanIssues] = useState([])
const [febIssues,setFebIssues] = useState([])
const [cusReportBugs,setCusReportBugs] = useState([])




// Hooks to grab data
// useEffect(() => {
//   fetch("https://cors-anywhere.herokuapp.com/https://project.mkdecision.com/issues.json?query_id=115&key=9a10d4bc69e91eb6e3fc37ba251f6244dbec50ef")
//   .then( res => res.json())
//   .then(
//     (result) => {
//       setClosedIssues(result)
//     },
//     (error) =>{
//       console.log(error)
//     }
//   )
// },[])

// useEffect(() => {
//   fetch("https://cors-anywhere.herokuapp.com/https://project.mkdecision.com/issues.json?query_id=118&key=9a10d4bc69e91eb6e3fc37ba251f6244dbec50ef")
//   .then( res => res.json())
//   .then(
//     (result) => {
//       setOpenIssues(result)
//     },
//     (error) =>{
//       console.log(error)
//     }
//   )
// },[])

// useEffect(() => {
//   fetch("https://cors-anywhere.herokuapp.com/https://project.mkdecision.com/issues.json?query_id=117&key=9a10d4bc69e91eb6e3fc37ba251f6244dbec50ef")
//   .then( res => res.json())
//   .then(
//     (result) => {
//       setCreatedIssues(result)
//     },
//     (error) =>{
//       console.log(error)
//     }
//   )
// },[])

// useEffect(() => {
//   fetch("https://cors-anywhere.herokuapp.com/https://project.mkdecision.com/issues.json?query_id=125&key=9a10d4bc69e91eb6e3fc37ba251f6244dbec50ef")
//   .then( res => res.json())
//   .then(
//     (result) => {
//       setChangesIssues(result)
//     },
//     (error) =>{
//       console.log(error)
//     }
//   )
// },[])

//   useEffect(() => {
//       fetch("https://cors-anywhere.herokuapp.com/https://project.mkdecision.com/issues.json?query_id=126&key=9a10d4bc69e91eb6e3fc37ba251f6244dbec50ef")
//       .then( res => res.json())
//       .then(
//         (result) => {
//           setJanIssues(result)
//         },
//         (error) =>{
//           console.log(error)
//         }
//       )
//     },[])

//     useEffect(() => {
//       fetch("https://cors-anywhere.herokuapp.com/https://project.mkdecision.com/issues.json?query_id=127&key=9a10d4bc69e91eb6e3fc37ba251f6244dbec50ef")
//       .then( res => res.json())
//       .then(
//         (result) => {
//           setFebIssues(result)
//         },
//         (error) =>{
//           console.log(error)
//         }
//       )
//     },[])

//     useEffect(() => {
//       fetch("https://cors-anywhere.herokuapp.com/https://project.mkdecision.com/issues.json?query_id=119&key=9a10d4bc69e91eb6e3fc37ba251f6244dbec50ef")
//       .then( res => res.json())
//       .then(
//         (result) => {
//           setCusReportBugs(result)
//         },
//         (error) =>{
//           console.log(error)
//         }
//       )
//     },[])


  PieChartData[1].value = cusReportBugs.total_count
  PieChartData[0].value = createdIssues.total_count - cusReportBugs.total_count


  var classes = useStyles();
  var theme = useTheme();

  // local
  var [mainChartState, setMainChartState] = useState("engineer");
  var [ClientChartState, setClientChartState] = useState("YTD");

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
                  Created
                </Typography>
                <Typography size="md">{createdIssues.total_count}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography color="text" colorBrightness="secondary" noWrap>
                  Closed
                </Typography>
                <Typography size="md">{closedIssues.total_count}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography color="text" colorBrightness="secondary" noWrap>
                  Open
                </Typography>
                <Typography size="md">{openIssues.total_count}</Typography>
              </Grid>
            </Grid>
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
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Widget
            title="Bugs Detected This Year"
            upperTitle
            bodyClass={classes.fullHeightBody}
            className={classes.card}
          >
            <div className={classes.visitsNumberContainer}>
              <Grid container item alignItems={"center"}>
                <Grid item xs={6}>
              <Typography size="xl" weight="medium" noWrap>
                {janIssues.total_count + febIssues.total_count}
              </Typography>
                </Grid>
                <Grid item xs={6}>
              <LineChart
                width={100}
                height={30}
                data={[
                  { value: janIssues.total_count },
                  { value: febIssues.total_count },
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
                  Defect Burn Time (hours)
                </Typography>
                {(mainChartState === "engineer")?
                <div className={classes.mainChartHeaderLabels}>
                  <div className={classes.mainChartHeaderLabel}>
                    <Dot color="warning" />
                    <Typography className={classes.mainChartLegentElement}>
                    Fulfillment
                    </Typography>
                  </div>
                  <div className={classes.mainChartHeaderLabel}>
                    <Dot color="primary" />
                    <Typography className={classes.mainChartLegentElement}>
                      Dev
                    </Typography>
                  </div>
                </div>:
                <div className={classes.mainChartHeaderLabels}>
                <div className={classes.mainChartHeaderLabel}>
                  <Typography className={classes.mainChartLegentElement}>
                    Product
                  </Typography>
                </div>
                </div>}
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
                  <MenuItem value="engineer">Engineer</MenuItem>
                  {/* <MenuItem value="weekly">Client</MenuItem> */}
                  <MenuItem value="product">Product</MenuItem>
                </Select>
              </div>
            }
          >
            {(mainChartState === "engineer")?
            <ResponsiveContainer width="100%" minWidth={500} height={350}>
              <ComposedChart
                margin={{ top: 0, right: -15, left: -15, bottom: 0 }}
                data={mainChartData}
              >
                <YAxis
                  ticks={[0, 75, 150, 225]}
                  tick={{ fill: theme.palette.text.primary + "80", fontSize: 14 }}
                  stroke={theme.palette.text.primary + "80"}
                />
                <XAxis
                dataKey = 'month'
                  tickFormatter={i => i+" 21"}
                  tick={{ fill: theme.palette.text.primary + "80", fontSize: 14 }}
                  stroke={theme.palette.text.primary + "80"}
                />
                <Line
                  type="linear"
                  dataKey="Dev"
                  stroke={theme.palette.primary.main}
                  strokeWidth={2}
                  dot={{
                    strokeWidth: 2,
                    fill: theme.palette.warning.dark,
                  }}                  
                />
                <Line
                  type="linear"
                  dataKey="Fulfillment"
                  stroke={theme.palette.warning.main}
                  strokeWidth={2}
                  dot={{
                    stroke: theme.palette.warning.dark,
                    strokeWidth: 2,
                    fill: theme.palette.warning.main,
                  }}
                />
                <Tooltip />
              </ComposedChart>
            </ResponsiveContainer>
            :             
            <ResponsiveContainer width="100%" minWidth={500} height={350}>
            <BarChart
              margin={{ top: 0, right: -15, left: -15, bottom: 0 }}
              data={ProductChartData}
            >
              <YAxis
                ticks={[0, 5, 10, 15, 20, 25]}
                tick={{ fill: theme.palette.text.primary + "80", fontSize: 14 }}
                stroke={theme.palette.text.primary + "80"}
              />
              <XAxis
              dataKey = 'product'
                tickFormatter={i => i}
                tick={{ fill: theme.palette.text.primary + "80", fontSize: 14 }}
                stroke={theme.palette.text.primary + "80"}
              />
              <Tooltip />
              <Bar
                dataKey="Jan"
                fill="#1096CB"  
              />
              <Bar
                dataKey="Feb"
                fill="#FF5C93"  
              />
              <Bar
                dataKey="Mar"
                fill= "#3CD4A0"  
              />
              
            </BarChart>
          </ResponsiveContainer>}
          </Widget>
        </Grid>
        {/* <Grid item xs={12}>
          <Widget
            title="Client Monthly Stats"
            upperTitle
            noBodyPadding
            bodyClass={classes.tableWidget}
          >
            <Table data={mock.table} />
          </Widget>
        </Grid> */}
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
                  Client Defect Tracker
                </Typography>
                <div className={classes.mainChartHeaderLabels}>
                <div className={classes.mainChartHeaderLabel}>
                  <Typography className={classes.mainChartLegentElement}>
                    Issues vs Burn Time
                  </Typography>
                </div>
                </div>
                <Select
                  value={ClientChartState}
                  onChange={e => setClientChartState(e.target.value)}
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
                  <MenuItem value="YTD">Issues</MenuItem>
                  <MenuItem value="burn">Burn Time</MenuItem>
                </Select>
              </div>
            }
          >
            {(ClientChartState === "YTD")?
            <ResponsiveContainer width="100%" minWidth={500} height={350}>
            <BarChart
              margin={{ top: 0, right: -15, left: -15, bottom: 0 }}
              data={ClientChartData}
            >
              <YAxis
                ticks={[0, 15, 25, 35, 45]}
                tick={{ fill: theme.palette.text.primary + "80", fontSize: 14 }}
                stroke={theme.palette.text.primary + "80"}
              />
              <XAxis
              dataKey = 'stores'
                tickFormatter={i => i}
                tick={{ fill: theme.palette.text.primary + "80", fontSize: 14 }}
                stroke={theme.palette.text.primary + "80"}
              />
              <Tooltip />
              <Bar
                dataKey="Jan"
                fill="#1096CB"  
              />
              <Bar
                dataKey="Feb"
                fill="#FF5C93"  
              />
              <Bar
                dataKey="Mar"
                fill= "#3CD4A0"  
              />
              
            </BarChart>
          </ResponsiveContainer>
            :             
            <ResponsiveContainer width="100%" minWidth={500} height={350}>
            <BarChart
              margin={{ top: 0, right: -15, left: -15, bottom: 0 }}
              data={ClientChartData}
            >
              <YAxis
                ticks={[0, 25, 50, 75, 100,125, 150]}
                tick={{ fill: theme.palette.text.primary + "80", fontSize: 14 }}
                stroke={theme.palette.text.primary + "80"}
              />
              <XAxis
              dataKey = 'stores'
                tickFormatter={i => i}
                tick={{ fill: theme.palette.text.primary + "80", fontSize: 14 }}
                stroke={theme.palette.text.primary + "80"}
              />
              <Tooltip />
              <Bar
                dataKey="JanBurn"
                fill="#1096CB"  
              />
              <Bar
                dataKey="FebBurn"
                fill="#FF5C93"  
              />
              <Bar
                dataKey="MarBurn"
                fill= "#3CD4A0"  
              />
              
            </BarChart>
          </ResponsiveContainer>}
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
  var Fulfillment = [69.43,67.51,76.34];
  var Dev = [80.75,164,156.63];
  let month = ["Jan", 'Feb', 'Mar', 'Apr', 'May', 'Jun', "July", 'Aug', "Sept", "Oct", 'Nov','Dec']
  for (let i = 0; i < month.length; i++) {
    resultArray.push({
      Fulfillment: Fulfillment[i],
      Dev: Dev[i],
      month: month[i]
    });
  }
  return resultArray;
}

function getProductBurnData(){
  var resultArray = [];
  var Jan = [6.35,0,31.01,0,20.47,1.80];
  var Feb = [1.15,5.83,3.74,0,18.07,3.21];
  var Mar = [1.95,1.45,0,0,.17,0];
  let product = ["Store", 'CCOS', 'Deposits', 'Integrations', 'Vendor Dashboard', 'Close Services']
  for (let i = 0; i < product.length; i++) {
    resultArray.push({
      Jan : Jan[i],
      Feb : Feb[i],
      Mar : Mar[i],
      product: product[i]
    });
  }
  return resultArray;
}

function getClientBurnData(){
  var resultArray = [];
  var Jan = [4,0,4,0,0,0,26,5,0,5,11,8,0];
  var Feb = [7,2,8,2,1,0,43,3,5,5,5,1,0];
  var Mar = [2,1,1,0,2,1,33,3,6,1,2,1,2];

  var JanBurn = [4,0,6.79,0,0,0,51.72,17.36,0,8.93,27.66,9.86,0];
  var FebBurn = [13.08,3.88,19.07,6.32,.18,0,147.66,7.76,17.29,9.30,15.07,4.59,0];
  var MarBurn = [21.28,4.10,6.07,0,6.27,.17,147.67,11.77,8.33,4.68,7.75,1.02,5.13];

  let stores = ["AM Bank", 'BBOW', 'BBOK', 'Beneficial', 'CSB New Castle', 'Equitable','Evergreen','FBA','Las Animas','ICBA','TCM','UBB','WaFd']
  for (let i = 0; i < stores.length; i++) {
    resultArray.push({
      Jan : Jan[i],
      Feb : Feb[i],
      Mar : Mar[i],
      JanBurn : JanBurn[i],
      FebBurn : FebBurn[i],
      MarBurn : MarBurn[i],
      stores: stores[i]
    });
  }
  return resultArray;
}


