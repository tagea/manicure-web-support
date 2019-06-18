import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Grid from '@material-ui/core/Grid';
import { FabButton } from '../../ui/FabButton';
import LogoutSrc from '../../img/logout.svg';

import { ContainerStyled, TabContainerStyled, AppBarStyled, TabStyled, LogOutButtonStyled } from './styled';

class HomeTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const { titles, children, handleSubmit } = this.props;

    return (
      <ContainerStyled container justify="center">
        <Grid item md={10}>
          <AppBarStyled position="static" color="default">
            <Tabs value={value} onChange={this.handleChange} indicatorColor="primary" textColor="primary">
              {titles.map((title, i) => <TabStyled key={i} label={title} />)}
            </Tabs>
            <LogOutButtonStyled>
              <FabButton label="Logout" src={LogoutSrc} handleClick={handleSubmit} />
            </LogOutButtonStyled>
          </AppBarStyled>
          { children.map((child, i) => (
            value === i && <TabContainerStyled key={i}>{child}</TabContainerStyled>
          )) }
        </Grid>
      </ContainerStyled>
    );
  }
}

HomeTabs.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.arrayOf(PropTypes.object),
  handleSubmit: PropTypes.func
};

HomeTabs.defaultProps = {
  titles: [''],
  children: [{}],
  handleSubmit: () => false
};

export { HomeTabs };
