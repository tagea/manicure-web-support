import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import { Input } from '../../ui/Input';

import { hours, days, getObjectProperty } from '../../utils/timeInput';
import { DayStyled } from './styled';

const HoursInputs = (props) => {
  const { values, changeInput } = props;
  return (
    <Grid item sm={6}>
      {days.map((day, dayNumber) => {
        const open = `${day}open`;
        const close = `${day}close`;
        return (
          <Grid container key={dayNumber} spacing={8}>
            <Grid item sm={4}>
              <DayStyled>{day}</DayStyled>
            </Grid>
            <Grid item sm={4}>
              <Input
                select
                id={`${day}-open`}
                label="Open"
                name={open}
                value={getObjectProperty(values, open)}
                error={false}
                onChange={changeInput}
              >
                {hours.map((item, indx) => (
                  <MenuItem key={indx} value={item}>{item}</MenuItem>
                ))}
              </Input>
            </Grid>
            <Grid item sm={4}>
              <Input
                key={dayNumber}
                select
                id={`${day}-close`}
                label="Close"
                name={close}
                value={getObjectProperty(values, close)}
                error={false}
                onChange={changeInput}
              >
                {hours.map((item, indx) => (
                  <MenuItem key={indx} value={item}>{item}</MenuItem>
                ))}
              </Input>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

HoursInputs.propTypes = {
  values: PropTypes.instanceOf(Object),
  changeInput: PropTypes.func
};

HoursInputs.defaultProps = {
  values: {},
  changeInput: () => false
};

export { HoursInputs };
