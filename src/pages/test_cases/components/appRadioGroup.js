import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup (props) {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Type of App</FormLabel>
      <RadioGroup row aria-label="appType" name="appType" value={props.appTypeState} onChange={e => props.setAppTypeState(e.target.value)}>
        <FormControlLabel value="consumer" control={<Radio />} label="Consumer" />
        <FormControlLabel value="business" control={<Radio />} label="Business" />
        <FormControlLabel value="deposits" control={<Radio />} label="Deposits" />
      </RadioGroup>
    </FormControl>
  );
}