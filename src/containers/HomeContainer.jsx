import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Toolbar } from '../components/Toolbar';
import { Home } from '../components/Home';
import { HomeTabs } from '../components/HomeTabs';
import UserTableListContainer from './UserTableListContainer';
import SalonTableListContainer from './SalonTableListContainer';

import { signOutAction, stayInAction } from '../services/auth/actions';

import { ROUTE_PATHS } from '../routes';

class HomeContainer extends PureComponent {
  componentDidMount() {
    const { stayIn } = this.props;
    stayIn();
  }

  handleSubmit = () => {
    const { signOut } = this.props;
    signOut();
  }

  render() {
    const { authenticated } = this.props;
    if (authenticated) {
      return (
        <Home>
          <Toolbar />
          <HomeTabs titles={['Users', 'Salons']} handleSubmit={this.handleSubmit}>
            <UserTableListContainer />
            <SalonTableListContainer />
          </HomeTabs>
        </Home>
      );
    }
    return (
      <Redirect to={ROUTE_PATHS.auth} />
    );
  }
}

HomeContainer.propTypes = {
  authenticated: PropTypes.bool,
  stayIn: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired
};

HomeContainer.defaultProps = {
  authenticated: false
};


const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
});

const mapDispatchToProps = dispatch => ({
  stayIn: () => dispatch(stayInAction()),
  signOut: () => dispatch(signOutAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
