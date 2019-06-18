import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Auth } from '../components/Auth';
import { signInAction, stayInAction } from '../services/auth/actions';

import { ROUTE_PATHS } from '../routes';

export class AuthContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  componentDidMount() {
    const { stayIn } = this.props;
    stayIn();
  }

  changeInput = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }

  pressEnter = (ev) => {
    if (ev.key === 'Enter') {
      this.handleSubmit();
    }
  }

  handleSubmit = () => {
    const { username, password } = this.state;
    const { signIn } = this.props;
    signIn(username, password);
  }

  render() {
    const { error, authenticated } = this.props;
    if (authenticated) {
      return <Redirect to={ROUTE_PATHS.root} />;
    }
    return (
      <Auth
        changeInput={this.changeInput}
        pressEnter={this.pressEnter}
        handleSubmit={this.handleSubmit}
        error={error}
      />
    );
  }
}

AuthContainer.propTypes = {
  error: PropTypes.bool,
  authenticated: PropTypes.bool,
  stayIn: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired
};

AuthContainer.defaultProps = {
  error: false,
  authenticated: false
};


const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  error: state.auth.error
});

const mapDispatchToProps = dispatch => ({
  stayIn: () => dispatch(stayInAction()),
  signIn: (username, password) => dispatch(signInAction(username, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthContainer);
