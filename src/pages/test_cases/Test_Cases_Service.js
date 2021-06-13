import React, { useEffect, useState } from "react";
import axios from 'axios'
import SecCharts from './components/scan_charts'
import InputLabel from '@material-ui/core/InputLabel';
import {
  Grid,
  LinearProgress,
  Select,
  OutlinedInput,
  MenuItem,
  Button,
  Divider,
  Input
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
import TestProfileDropdown from './components/testProfileDropdown.js'
import StoreDropdown from './components/storeDropdown.js'


const mainChartData = getMainChartData();
const systemUpdateData = getSystemUpdateData();
 

export default function Test_Cases_Service(props) {
let COLORS = ['#1096CB', '#3CD4A0', '#000000', 'error']
var classes = useStyles();
var theme = useTheme();


  // Defining local variables and states
  let creditIntegrations = ["Experian","TransUnion","Equifax"]
  let creditScore = ["High","Average","Low", 'No Credit']
  let alphaStores = [mock.alphaStores]
  let testProfiles = [mock.testCaseExp, mock.testCaseTU, mock.testCaseEq]
  let products = ''
  var [integrationState, setIntegrationState] = useState(creditIntegrations);
  var [creditScoreState, setCreditScoreState] = useState(creditScore);
  var [alphaStoreState, setAlphaStoreState] = useState(alphaStores);
  var [testProfilesState, settestProfilesState] = useState(testProfiles);
console.log(alphaStores)
  return (
    <>
      <PageTitle title="Test Case Service"/>
      <div>
      <InputLabel htmlFor="credit-integration-native-simple">Credit Integration</InputLabel>
        <Select
          native
          value={integrationState}
          onChange={e => setIntegrationState(e.target.value)}
          inputProps={{
            name: 'credit-integration',
            id: 'credit-integration-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={creditIntegrations[0]}>{creditIntegrations[0]}</option>
          <option value={creditIntegrations[1]}>{creditIntegrations[1]}</option>
          <option value={creditIntegrations[2]}>{creditIntegrations[2]}</option>
        </Select>
        <br/>
        <br/>
        <InputLabel htmlFor="credit-score-native-simple">Credit Score</InputLabel>
        <Select
          native
          value={creditScoreState}
          onChange={e => setCreditScoreState(e.target.value)}
          inputProps={{
            name: 'credit-score',
            id: 'credit-score-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={creditScore[0]}>{creditScore[0]}</option>
          <option value={creditScore[1]}>{creditScore[1]}</option>
          <option value={creditScore[2]}>{creditScore[2]}</option>
          {integrationState === 'Experian' ?(
          <option value={creditScore[3]}>{creditScore[3]}</option>
          ): null}
        </Select>
        <br/>
        <br/>
        <StoreDropdown
        alphaStoreState = {alphaStoreState}
        setAlphaStoreState = {setAlphaStoreState}
        integrationState = {integrationState}
        alphaStores = {alphaStores}
        />
        <br/>
        <br/>
        <TestProfileDropdown
        testProfiles = {testProfiles}
        testProfilesState = {testProfilesState}
        settestProfilesState = {settestProfilesState}
        integrationState = {integrationState}
        creditScoreState = {creditScoreState}
        />

      </div>
    </>
  );
}

// ##############################Functions to grab Data#########################################
function getMainChartData() {
  var resultArray = [];
  var stats = [31.7,52.4,15.9,0];
  let level = ["Informational","Low","Average","High"]
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


