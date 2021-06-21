import React, { useEffect, useState } from "react";
import axios from 'axios'
import SecCharts from './components/scan_charts'
import InputLabel from '@material-ui/core/InputLabel';
import {
  Select,
  Button
} from "@material-ui/core";
// styles
import useStyles from "./styles";
import { useTheme } from "@material-ui/styles";


// components
import mock from "./mock";
import Widget from "../../components/Widget/Widget";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Typography } from "../../components/Wrappers/Wrappers";
import TestProfileDropdown from './components/testProfileDropdown.js'
import ConsumerDropdown from './components/consumerDropdown.js'
import RadioButtonsGroup from './components/appRadioGroup.js'



 

export default function Test_Cases_Service(props) {
let COLORS = ['#1096CB', '#3CD4A0', '#000000', 'error']
var classes = useStyles();
var theme = useTheme();


  // Defining local variables and states
  const creditIntegrations = ["Experian","TransUnion","Equifax"]
  const creditScore = ["High","Average","Low", 'No Credit']
  const alphaStores = [mock.alphaStores[0].storeName,mock.alphaStores[1].storeName,mock.alphaStores[2].storeName,mock.alphaStores[3].storeName,mock.alphaStores[5].storeName]
  const testProfiles = [mock.testCaseExp, mock.testCaseTU, mock.testCaseEq] 
  const products = [mock.alphaStores[0].products,mock.alphaStores[1].products,mock.alphaStores[2].products,mock.alphaStores[3].products,mock.alphaStores[5].products]

  var [integrationState, setIntegrationState] = useState('');
  var [creditScoreState, setCreditScoreState] = useState('');
  var [alphaStoreState, setAlphaStoreState] = useState('');
  var [testProfilesState, settestProfilesState] = useState('');
  var [productsState, setProductsState] = useState('');
  var [appTypeState, setAppTypeState] = useState('');

  let test = ''

  return (
    <>
      <PageTitle title="Test Case Service"/>
      <div>
        <div>
          <RadioButtonsGroup
          appTypeState = {appTypeState}
          setAppTypeState = {setAppTypeState}
           />
        </div>
        <br/>
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
        {!(integrationState === '')?
        <div>
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
        </div>
        : null}

        <br/>

        {appTypeState === "consumer" ? 
        <div>
                <TestProfileDropdown
                testProfiles = {testProfiles}
                testProfilesState = {testProfilesState}
                settestProfilesState = {settestProfilesState}
                integrationState = {integrationState}
                creditScoreState = {creditScoreState}
                />
                <br/>
                <ConsumerDropdown
                alphaStoreState = {alphaStoreState}
                setAlphaStoreState = {setAlphaStoreState}
                integrationState = {integrationState}
                alphaStores = {alphaStores}
                productsState = {productsState}
                setProductsState = {setProductsState}
                products = {products}
                testProfilesState = {testProfilesState}
                test = {test}
                />
                </div>
        : null}

      </div>
    </>
  );
}





