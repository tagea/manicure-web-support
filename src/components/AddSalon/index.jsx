import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { InfoInputs } from './InfoInputs';
import { HoursInputs } from './HoursInputs';
import { PhotosInputs } from './PhotosInputs';

import { FormBlockStyled } from './styled';

const AddSalon = (props) => {
  const { values, changeInput } = props;
  return (
    <Grid container direction="column">
      <FormBlockStyled container spacing={16}>
        <InfoInputs changeInput={changeInput} />
        <Grid item sm={2} />
        <HoursInputs values={values} changeInput={changeInput} />
        <PhotosInputs />
      </FormBlockStyled>
    </Grid>
  );
};

AddSalon.propTypes = {
  values: PropTypes.instanceOf(Object),
  changeInput: PropTypes.func
};

AddSalon.defaultProps = {
  values: {},
  changeInput: () => false
};

export { AddSalon };
