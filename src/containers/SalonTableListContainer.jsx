import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TableList } from '../components/TableList';
import { ModalWindow } from '../components/ModalWindow';
import { AddSalonContainer } from './AddSalonContainer';
import { fetchSalonAction } from '../services/salons/actions';
import { headerSalon } from '../utils/headersList';

class SalonTableListContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      querySize: 10,
      totalSize: 0,
      pageNumber: 1,
      waiting: false,
      openModal: false,
      titleWindow: ''
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

  openAddSalonDialog = () => {
    this.setState({
      openModal: true,
      titleWindow: 'Add a new Salon'
    });
  }

  handleClose = () => {
    this.setState({
      openModal: false
    });
  }

  render() {
    const { data, totalSize, waiting, openModal, titleWindow } = this.state;

    return (
      <Fragment>
        <TableList
          waiting={waiting}
          loadMoreRows={this.loadMore}
          listData={data}
          columns={headerSalon}
          handleOpen={this.openAddSalonDialog}
          rowCount={totalSize}
        />
        <ModalWindow
          open={openModal}
          closeModal={this.handleClose}
          titleWindow={titleWindow}
        >
          <AddSalonContainer />
        </ModalWindow>
      </Fragment>
    );
  }
}

SalonTableListContainer.propTypes = {
  waiting: PropTypes.bool,
  fetchData: PropTypes.func.isRequired,
  lastLoadedData: PropTypes.instanceOf(Array),
  totalSize: PropTypes.number,
  nextPage: PropTypes.string
};

SalonTableListContainer.defaultProps = {
  waiting: false,
  lastLoadedData: [],
  totalSize: 0,
  nextPage: null
};

const mapStateToProps = state => ({
  waiting: state.salons.waiting,
  lastLoadedData: state.salons.salons,
  totalSize: state.salons.sizeOfSalons,
  nextPage: state.salons.nextPageSalons
});

const mapDispatchToProps = dispatch => ({
  fetchData: (pageNumber, size) => dispatch(fetchSalonAction(pageNumber, size))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SalonTableListContainer);
