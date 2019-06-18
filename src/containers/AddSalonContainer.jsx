import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { AddSalon } from '../components/AddSalon';

export class AddSalonContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  changeInput = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }

  render() {
    const { ...values } = this.state;
    return (
      <AddSalon changeInput={this.changeInput} values={values} />
    );
  }
}

AddSalonContainer.propTypes = {
};

AddSalonContainer.defaultProps = {
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSalonContainer);
