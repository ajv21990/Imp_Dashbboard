import React, { useEffect, useState } from "react";
import axios from 'axios'
import SecCharts from './components/scan_charts'
import {
  Grid,
  LinearProgress,
  Select,
  OutlinedInput,
  MenuItem,
  Button,
  Divider
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
const systemUpdateData = getSystemUpdateData();
 

export default function Security_Dashboard(props) {
let COLORS = ['#1096CB', '#3CD4A0', '#000000', 'error']
var classes = useStyles();
var theme = useTheme();

  // local
  var [mainChartState, setMainChartState] = useState("overall");

  return (
    <>
      <PageTitle title="Security"/>
      <Grid container spacing={6}>
        <Grid item lg={3} md={8} sm={6} xs={12}>
          <Widget
            title="Audit"
            upperTitle
            className={classes.card}
          >
          <Divider  />
          <div>
            <Typography>PCI DSS</Typography>
            <Typography color="success">Completed</Typography>
            <Typography>Due: March 2021</Typography>
            <br/>
            <Typography>SOC2 Type II</Typography>
            <Typography weight="bold">In Progress</Typography>
            <Typography>Due: June 2021</Typography>
          </div>
          </Widget>
        </Grid>
        <Grid item lg={3} md={8} sm={6} xs={12}>
          <Widget
            title="Policy Status"
            upperTitle
            className={classes.card}
            bodyClass={classes.fullHeightBody}
          >
          <Divider  />
          <div>
            <Typography>Data Classification</Typography>
            <Typography color="success">Compliant</Typography>
            <br/>

            <Typography>Data Protection</Typography>
            <Typography color="success">Compliant</Typography>
            <br/>

            <Typography>Password</Typography>
            <Typography color="success">Compliant</Typography>
            <br/>

            <Typography>Disaster Recovery</Typography>
            <Typography color="success">Compliant</Typography>
            <br/>

            <Typography>PCI</Typography>
            <Typography color="success">Compliant</Typography>
            <br/>

            <Typography>SOC</Typography>
            <Typography color="success">Compliant</Typography>
            <br/>

            <Typography>UAC</Typography>
            <Typography color="success">Compliant</Typography>
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
                  MK System Vulnerability Stats
                </Typography>
                <div className={classes.mainChartHeaderLabels}>
                  <div className={classes.mainChartHeaderLabel}>
                    <Dot color="warning" />
                    <Typography className={classes.mainChartLegentElement}>
                    Informational
                    </Typography>
                  </div>
                  <div className={classes.mainChartHeaderLabel}>
                    <Dot color="success" />
                    <Typography className={classes.mainChartLegentElement}>
                      Low
                    </Typography>
                  </div>
                  <div className={classes.mainChartHeaderLabel}>
                    <Dot color="primary" />
                    <Typography className={classes.mainChartLegentElement}>
                      Medium
                    </Typography>
                  </div>
                  <div className={classes.mainChartHeaderLabel}>
                    <Dot color="error" />
                    <Typography className={classes.mainChartLegentElement}>
                      High
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
                  <MenuItem value="overall">Overall</MenuItem>
                  <MenuItem value="dashboard">Dashboard</MenuItem>
                  <MenuItem value="close">CLOSE</MenuItem>
                  <MenuItem value="store">Store</MenuItem>
                  <MenuItem value="checkout">Checkout</MenuItem>
                  <MenuItem value="customerPortal">Customer Portal</MenuItem>
                </Select>
              </div>
            }
          >
            <SecCharts chartState={mainChartState} stats={"stats"} level={"level"} color={COLORS} data={mainChartData} />
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
                  System Update Tracker (created vs implemented)
                </Typography>
              </div>
            }
          >
            <ResponsiveContainer width="100%" minWidth={500} height={350}>
            <BarChart
              margin={{ top: 0, right: -15, left: -15, bottom: 0 }}
              data={systemUpdateData}
            >
              <YAxis
                ticks={[0, 15, 25, 35, 45]}
                tick={{ fill: theme.palette.text.primary + "80", fontSize: 14 }}
                stroke={theme.palette.text.primary + "80"}
              />
              <XAxis
              dataKey = 'month'
                tickFormatter={i => i}
                tick={{ fill: theme.palette.text.primary + "80", fontSize: 14 }}
                stroke={theme.palette.text.primary + "80"}
              />
              <Tooltip />
              <Bar
                dataKey="Created"
                fill="#1096CB"  
              />
              <Bar
                dataKey="Implemented"
                fill="#FF5C93"  
              />
            </BarChart>
          </ResponsiveContainer>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}

// ##############################Functions to grab Data#########################################
function getMainChartData() {
  var resultArray = [];
  var stats = [31.7,52.4,15.9,0];
  let level = ["Informational","Low","Medium","High"]
  for (let i = 0; i < level.length; i++) {
    resultArray.push({
      stats: stats[i],
      level: level[i]
    });
  }
  return resultArray;
}

function getSystemUpdateData() {
  var resultArray = [];
  var Created = [58,45,39,0,0,0,0,0,0,0,0,0];
  var Implemented = [55,39,42,0,0,0,0,0,0,0,0,0];
  let month = ["Jan", 'Feb', 'Mar', 'Apr', 'May', 'Jun', "July", 'Aug', "Sept", "Oct", 'Nov','Dec']
  for (let i = 0; i < month.length; i++) {
    resultArray.push({
      Created: Created[i],
      Implemented: Implemented[i],
      month: month[i]
    });
  }
  return resultArray;
}


