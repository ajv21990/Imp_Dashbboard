import React from "react";
import {Select} from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';

const TestProfileDropdown = props => {
    return(
    <div>
    {props.integrationState === "Experian" && props.creditScoreState === "High" ? (
      <div>
        <InputLabel htmlFor="exp-high-test-cases-native-simple">Test Profiles</InputLabel>
        <Select 
          native
          value={props.testProfilesState} 
          onChange={e => props.settestProfilesState(e.target.value)}
          inputProps={{
            name: 'exp-high-test-cases',
            id: 'exp-high-test-cases-native-simple',
        }}
        >
          <option aria-label="None" value="" />
          <option value={props.testProfiles[0][0].name}>{props.testProfiles[0][0].name}</option>
          <option value={props.testProfiles[0][1].name}>{props.testProfiles[0][1].name}</option>
        </Select>
        </div>
    ) : null}
        {props.integrationState === "Experian" && props.creditScoreState === "Average" ? (
      <div>
        <InputLabel htmlFor="exp-average-test-cases-native-simple">Test Profiles</InputLabel>
        <Select 
          native
          value={props.testProfilesState} 
          onChange={e => props.settestProfilesState(e.target.value)}
          inputProps={{
            name: 'exp-average-test-cases',
            id: 'exp-average-test-cases-native-simple',
        }}
        >
          <option aria-label="None" value="" />
          <option value={props.testProfiles[0][2].name}>{props.testProfiles[0][2].name}</option>
          <option value={props.testProfiles[0][3].name}>{props.testProfiles[0][3].name}</option>
        </Select>
        </div>
    ) : null}
        {props.integrationState === "Experian" && props.creditScoreState === "Low" ? (
      <div>
        <InputLabel htmlFor="exp-low-test-cases-native-simple">Test Profiles</InputLabel>
        <Select 
          native
          value={props.testProfilesState} 
          onChange={e => props.settestProfilesState(e.target.value)}
          inputProps={{
            name: 'exp-low-test-cases',
            id: 'exp-low-test-cases-native-simple',
        }}
        >
          <option aria-label="None" value="" />
          <option value={props.testProfiles[0][4].name}>{props.testProfiles[0][4].name}</option>
          <option value={props.testProfiles[0][5].name}>{props.testProfiles[0][5].name}</option>
        </Select>
        </div>
    ) : null}
            {props.integrationState === "Experian" && props.creditScoreState === "No Credit" ? (
      <div>
        <InputLabel htmlFor="exp-no-credit-test-cases-native-simple">Test Profiles</InputLabel>
        <Select 
          native
          value={props.testProfilesState} 
          onChange={e => props.settestProfilesState(e.target.value)}
          inputProps={{
            name: 'exp-no-credit-test-cases',
            id: 'exp-no-credit-test-cases-native-simple',
        }}
        >
          <option aria-label="None" value="" />
          <option value={props.testProfiles[0][6].name}>{props.testProfiles[0][6].name}</option>
          <option value={props.testProfiles[0][7].name}>{props.testProfiles[0][7].name}</option>
        </Select>
        </div>
    ) : null}
    
        {props.integrationState === "Equifax" && props.creditScoreState === "High" ? (
      <div>
        <InputLabel htmlFor="eq-high-test-cases-native-simple">Test Profiles</InputLabel>
        <Select 
          native
          value={props.testProfilesState} 
          onChange={e => props.settestProfilesState(e.target.value)}
          inputProps={{
            name: 'eq-high-test-cases',
            id: 'eq-high-test-cases-native-simple',
        }}
        >
          <option aria-label="None" value="" />
          <option value={props.testProfiles[2][0].name}>{props.testProfiles[2][0].name}</option>
        </Select>
        </div>
    ) : null}
        {props.integrationState === "Equifax" && props.creditScoreState === "Average" ? (
      <div>
        <InputLabel htmlFor="eq-average-test-cases-native-simple">Test Profiles</InputLabel>
        <Select 
          native
          value={props.testProfilesState} 
          onChange={e => props.settestProfilesState(e.target.value)}
          inputProps={{
            name: 'eq-average-test-cases',
            id: 'eq-average-test-cases-native-simple',
        }}
        >
          <option aria-label="None" value="" />
          <option value={props.testProfiles[2][1].name}>{props.testProfiles[2][1].name}</option>
          <option value={props.testProfiles[2][2].name}>{props.testProfiles[2][2].name}</option>
          <option value={props.testProfiles[2][3].name}>{props.testProfiles[2][3].name}</option>
        </Select>
        </div>
    ) : null}
            {props.integrationState === "Equifax" && props.creditScoreState === "Low" ? (
      <div>
        <InputLabel htmlFor="eq-low-test-cases-native-simple">Test Profiles</InputLabel>
        <Select 
          native
          value={props.testProfilesState} 
          onChange={e => props.settestProfilesState(e.target.value)}
          inputProps={{
            name: 'eq-low-test-cases',
            id: 'eq-low-test-cases-native-simple',
        }}
        >
          <option aria-label="None" value="" />
          <option value={props.testProfiles[2][4].name}>{props.testProfiles[2][4].name}</option>
        </Select>
        </div>
    ) : null}

        {/* {props.integrationState === "TransUnion" && props.creditScoreState === "Low" ? (
      <div>
        <InputLabel htmlFor="tu-high-test-cases-native-simple">Test Profiles</InputLabel>
        <Select 
          native
          value={props.testProfilesState} 
          onChange={e => props.settestProfilesState(e.target.value)}
          inputProps={{
            name: 'tu-high-test-cases',
            id: 'tu-high-test-cases-native-simple',
        }}
        >
          <option aria-label="None" value="" />
          <option value={props.testProfiles[1][0].name}>{props.testProfiles[1][0].name}</option>
          <option value={props.testProfiles[1][1].name}>{props.testProfiles[1][1].name}</option>
        </Select>
        </div>
    ) : null} */}
            {props.integrationState === "TransUnion" && props.creditScoreState === "Average" ? (
      <div>
        <InputLabel htmlFor="tu-average-test-cases-native-simple">Test Profiles</InputLabel>
        <Select 
          native
          value={props.testProfilesState} 
          onChange={e => props.settestProfilesState(e.target.value)}
          inputProps={{
            name: 'tu-average-test-cases',
            id: 'tu-average-test-cases-native-simple',
        }}
        >
          <option aria-label="None" value="" />
          <option value={props.testProfiles[1][0].name}>{props.testProfiles[1][0].name}</option>
          <option value={props.testProfiles[1][1].name}>{props.testProfiles[1][1].name}</option>
          <option value={props.testProfiles[1][2].name}>{props.testProfiles[1][2].name}</option>
        </Select>
        </div>
    ) : null}
            {props.integrationState === "TransUnion" && props.creditScoreState === "Low" ? (
      <div>
        <InputLabel htmlFor="tu-low-test-cases-native-simple">Test Profiles</InputLabel>
        <Select 
          native
          value={props.testProfilesState} 
          onChange={e => props.settestProfilesState(e.target.value)}
          inputProps={{
            name: 'tu-low-test-cases',
            id: 'tu-low-test-cases-native-simple',
        }}
        >
          <option aria-label="None" value="" />
          <option value={props.testProfiles[1][3].name}>{props.testProfiles[1][3].name}</option>
        </Select>
        </div>
    ) : null}
    </div>
    )}

export default TestProfileDropdown