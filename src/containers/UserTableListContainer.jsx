import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TableList } from '../components/TableList';
import { fetchUserAction } from '../services/users/actions';
import { headerUser } from '../utils/headersList';

import { ROUTE_PATHS } from '../routes';

class UserTableListContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      querySize: 10,
      totalSize: 0,
      pageNumber: 1,
      waiting: false
    };
  }

  componentDidMount() {
    this.loadMore();
  }

  componentWillUnmount() {
    this.actuallyLoadMore = () => false;
  }

  // load part of data
  loadMore = () => {
    const { data, querySize, pageNumber } = this.state;
    const { fetchData, nextPage } = this.props;
    if (data.length === 0 || nextPage !== null) {
      fetchData(pageNumber, querySize)
        .then(() => {
          this.actuallyLoadMore();
        });
    }
  };

  actuallyLoadMore = () => {
    const { data, pageNumber } = this.state;
    const { lastLoadedData, totalSize, waiting } = this.props;
    this.setState({
      data: data.concat(lastLoadedData),
      pageNumber: pageNumber + 1,
      totalSize,
      waiting
    });
  }

  render() {
    const { data, totalSize, waiting } = this.state;
    const { error } = this.props;
    if (error !== null) {
      return <Redirect to={ROUTE_PATHS.auth} />;
    }
    return (
      <TableList
        waiting={waiting}
        loadMoreRows={this.loadMore}
        listData={data}
        columns={headerUser}
        rowCount={totalSize}
      />
    );
  }
}

UserTableListContainer.propTypes = {
  fetchData: PropTypes.func.isRequired,
  waiting: PropTypes.bool,
  lastLoadedData: PropTypes.instanceOf(Array),
  totalSize: PropTypes.number,
  nextPage: PropTypes.string,
  error: PropTypes.string
};

UserTableListContainer.defaultProps = {
  waiting: false,
  lastLoadedData: [],
  totalSize: 0,
  nextPage: null,
  error: null
};

const mapStateToProps = state => ({
  waiting: state.users.waiting,
  lastLoadedData: state.users.users,
  totalSize: state.users.sizeOfUsers,
  nextPage: state.users.nextPageUsers,
  error: state.users.error
});

const mapDispatchToProps = dispatch => ({
  fetchData: (pageNumber, size) => dispatch(fetchUserAction(pageNumber, size))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTableListContainer);
