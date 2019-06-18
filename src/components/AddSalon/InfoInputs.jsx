import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Input } from '../../ui/Input';

const InfoInputs = (props) => {
  const { changeInput } = props;
  return (
    <Grid item sm={4}>
      <Input
        id="salon-name"
        label="Name"
        type="text"
        name="salonname"
        autoComplete="salonname"
        error={false}
        onChange={changeInput}
      />
      <Input
        id="salon-site"
        label="Site"
        type="text"
        name="salonsite"
        autoComplete="salonsite"
        error={false}
        onChange={changeInput}
      />
      <Input
        id="salon-raiting"
        label="Raiting"
        type="text"
        name="salonraiting"
        autoComplete="salonraiting"
        error={false}
        onChange={changeInput}
      />
      <Input
        id="salon-placeid"
        label="Place ID"
        type="text"
        name="salonplaceid"
        autoComplete="salonplaceid"
        error={false}
        onChange={changeInput}
      />
      <Input
        id="salon-lat"
        label="Lat"
        type="text"
        name="salonlat"
        autoComplete="salonlat"
        error={false}
        onChange={changeInput}
      />
      <Input
        id="salon-lng"
        label="Lng"
        type="text"
        name="salonlng"
        autoComplete="salonlng"
        error={false}
        onChange={changeInput}
      />
      <Input
        id="salon-address"
        label="Address"
        type="text"
        name="salonaddress"
        autoComplete="salonaddress"
        error={false}
        onChange={changeInput}
      />
      <Input
        id="salon-phone"
        label="Telephone Number"
        type="text"
        name="salonphone"
        autoComplete="salonphone"
        error={false}
        onChange={changeInput}
      />
    </Grid>
  );
};

InfoInputs.propTypes = {
  changeInput: PropTypes.func
};

InfoInputs.defaultProps = {
  changeInput: () => false
};

export { InfoInputs };
