import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from './Spiner';
import CarItem from './CarID';
import { getCar } from '../actions/CarActions';
import { Link } from 'react-router-dom';

class Car extends Component {
  componentDidMount() {
    this.props.getCar(window.location.pathname);
  }

  render() {
    const { car, loading } = this.props.carState;

    let carItem;

    if (car === null || loading) {
      carItem = <Spinner />;
    } else {
      carItem = <CarItem key={Math.random()} car={car} />;
    }

    return (
      <div>
        <header className='w-780 center mt-20'>
          <Link to='/' className='logo size-big-logo left h-100'></Link>
          <nav className='lg-nav right h-100'>
            <Link to='/login'>
              <i className='login-icon left h-100'></i>
            </Link>
            <Link
              to='/login'
              className='btn login blue txt-light radius-7'
            ></Link>
            <Link to='/add' className='btn add yellow txt-dark radius-7'></Link>
          </nav>
        </header>
        {carItem}
      </div>
    );
  }
}

Car.propTypes = {
  getCar: PropTypes.func.isRequired,
  carState: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  carState: state.carState,
});

export default connect(mapStateToProps, { getCar })(Car);
