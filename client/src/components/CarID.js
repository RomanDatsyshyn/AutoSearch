import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CarID extends Component {
  render() {
    const { car } = this.props;

    let img = `http://localhost:3000/${car.carImage}`;

    // const price = car.price;

    return (
      <div className='container center w-800'>
        <Link to='/' className='txt-17'>
          Головна
        </Link>{' '}
        <span className='txt-16'>{'> '}</span>
        <Link to='/' className='txt-17'>
          {car.mark}
        </Link>{' '}
        <span className='txt-16'>{'> '}</span>
        <Link to='/' className='txt-17'>
          {car.model}
        </Link>
        <h3 className='mb-10'>
          {car.mark} {car.model} L 4MATIC AMG
        </h3>
        <div className='container white swadow radius-7 center w-800 mb-30'>
          <div className='center m-25'>{car.desc}</div>
        </div>
        <img
          src='https://cs.copart.com/v1/AUTH_svc.pdoc00001/PIX251/9caadb44-7b06-4845-91a7-cf50e504ae5d.JPG'
          alt=''
          className='w-100 mb-10'
        />
        <img
          src='https://cs.copart.com/v1/AUTH_svc.pdoc00001/PIX251/b333581c-8370-4689-a201-1f6440b06e04.JPG'
          alt=''
          className='w-100 mb-10'
        />
        <img
          src='https://cs.copart.com/v1/AUTH_svc.pdoc00001/PIX251/b05640ba-4d26-41d5-b334-a14787698a23.JPG'
          alt=''
          className='w-100 mb-10'
        />
        <img
          src='https://cs.copart.com/v1/AUTH_svc.pdoc00001/PIX251/29cc9559-9182-4625-bb65-93eee7318627.JPG'
          alt=''
          className='w-100 mb-10'
        />
        <img src={img} className='card-img-top' alt={car.model} />
      </div>
    );
  }
}

export default CarID;
