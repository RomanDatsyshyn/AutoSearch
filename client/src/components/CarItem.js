import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CarItem extends Component {
  render() {
    const { car } = this.props;

    return (
      <div className='container white swadow radius-7 center w-800'>
        <Link to={`/cars/${car.id}`}>
          <img src={car.carImage} alt='' className='w-45 left' />
        </Link>
        <div className='w-55 left'>
          <h3 className='ml-15 mt-10 txt-22'>
            <Link to={`/cars/${car.id}`} className='link'>
              {car.mark} {car.model} {car.year}
            </Link>
          </h3>
          <i className='ml-15 mb-5 txt-17 txt-gray block'>{car.town}</i>
          <b className='ml-15 txt-green txt-20 block'>{car.price}$</b>
          <div className='block-base'>
            <div className='gray h-100 left txt-center txt-17-s mr-2 w-17 pb-5'>
              <img src='year.svg' className='block center mt-15 mb-5 h-25' />
              {car.year}
            </div>
            <div className='gray h-100 left txt-center txt-17-s mr-2 w-21 pb-5'>
              <img src='km.svg' className='block center mt-15 mb-5 h-25' />
              {car.km} km
            </div>
            <div className='gray h-100 left txt-center txt-17-s mr-2 w-28 pb-5'>
              <img src='engine.svg' className='block center mt-15 mb-5 h-25' />
              {car.engine} л.
              {car.typeOfFuel}
            </div>
            <div className='gray h-100 left txt-center txt-17-s w-28 pb-5'>
              <img
                src='transmission.svg'
                className='block center mt-15 mb-5 h-25'
              />
              {car.kpp}
            </div>
          </div>
          <i className='txt-16 left mb-10 ml-15'>3 дня тому</i>
          <Link
            to={`/cars/${car.id}`}
            className='link txt-16 right mb-10 mr-20'
          >
            Детальніше 🡢
          </Link>
        </div>
      </div>
    );
  }
}

CarItem.propTypes = {
  car: PropTypes.object.isRequired,
};

export default CarItem;
