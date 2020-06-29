import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { add } from '../actions/CarActions';

class AddCar extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      phone: '',
      password: '',
      mark: '',
      model: '',
      obl: '',
      town: '',
      year: '',
      price: '',
      km: '',
      KPP: '',
      typeOfPrivod: '',
      fuel: '',
      color: '',
      rozhid: '',
      engine: '',
      horse: '',
      seats: '',
      desk: '',
      carImage: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newCar = {
      name: this.state.name,
      phone: this.state.phone,
      password: this.state.password,
      mark: this.state.mark,
      model: this.state.model,
      obl: this.state.obl,
      town: this.state.town,
      year: this.state.year,
      price: this.state.price,
      km: this.state.km,
      KPP: this.state.KPP,
      typeOfPrivod: this.state.typeOfPrivod,
      fuel: this.state.fuel,
      color: this.state.color,
      rozhid: this.state.rozhid,
      engine: this.state.engine,
      horse: this.state.horse,
      seats: this.state.seats,
      desk: this.state.desk,
      carImage: this.state.carImage,
    };

    this.props.add(newCar, this.props.history);
  }

  render() {
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
        <form
          onSubmit={this.onSubmit}
          encType='multipart/form-data'
          className='container white swadow radius-16 center w-800'
        >
          <div className='center m-25'>
            <span className='left w-30 mr-form-20 mb-10'>
              Ваше ім'я
              <br />
              <input
                className='w-97 mt-10 pl-5 mb-10'
                onChange={this.onChange}
                id='inputName'
                name='name'
                defaultValue={''}
                type='text'
                placeholder="Введіть ім'я"
              />
            </span>
            <span className='left w-30 mr-form-20 mb-10'>
              Номер телефону
              <br />
              <input
                className='w-97 mt-10 pl-5 mb-10'
                onChange={this.onChange}
                id='inputName'
                name='phone'
                defaultValue={''}
                type='number'
                placeholder='Введіть номер'
              />
            </span>
            <span className='left w-30 mb-10'>
              Пароль
              <br />
              <input
                className='w-97 mt-10 pl-5 mb-10'
                type='text'
                onChange={this.onChange}
                id='inputPassword'
                name='password'
                defaultValue={''}
                placeholder='Введіть пароль'
              />
            </span>
            <span className='left w-30 mr-form-20 mb-10'>
              Область
              <br />
              <select
                className='w-100 mt-10 p-5'
                onChange={this.onChange}
                id='selectObl'
                name='obl'
                defaultValue={''}
              >
                <option value='volvo'>Обрати область</option>
                <option value='saab'>Saab</option>
                <option value='mercedes'>Mercedes</option>
                <option value='audi'>Audi</option>
              </select>
            </span>
            <span className='left w-30 mr-form-20 mb-10'>
              Місто
              <br />
              <select
                className='w-100 mt-10 p-5'
                onChange={this.onChange}
                id='selectTown'
                name='town'
                defaultValue={''}
              >
                <option value='volvo'>Обрати місто</option>
                <option value='saab'>Saab</option>
                <option value='mercedes'>Mercedes</option>
                <option value='audi'>Audi</option>
              </select>
            </span>
            <span className='left w-30 mb-10'>
              Марка
              <br />
              <select
                className='w-100 mt-10 p-5'
                onChange={this.onChange}
                id='selectMark'
                name='mark'
                defaultValue={''}
              >
                <option value='volvo'>Обрати марку</option>
                <option value='saab'>Saab</option>
                <option value='mercedes'>Mercedes</option>
                <option value='audi'>Audi</option>
              </select>
            </span>
            <span className='left w-30 mr-form-20 mb-10'>
              Модель
              <br />
              <select
                className='w-100 mt-10 p-5'
                onChange={this.onChange}
                id='selectModel'
                name='model'
                defaultValue={''}
              >
                <option value='volvo'>Обрати модель</option>
                <option value='saab'>Saab</option>
                <option value='mercedes'>Mercedes</option>
                <option value='audi'>Audi</option>
              </select>
            </span>
            <span className='left w-30 mr-form-20'>
              <span className='left'>Рік</span>{' '}
              <span className='right'>Колір авто</span>
              <br />
              <span className='left w-47-sm-add mb-10 mr-form-add-10'>
                <select
                  className='w-100 mt-10 p-5'
                  onChange={this.onChange}
                  id='selectYear'
                  name='year'
                  defaultValue={''}
                >
                  <option value='volvo'>Обрати</option>
                  <option value='saab'>Автомат</option>
                  <option value='mercedes'>Типтронік</option>
                  <option value='audi'>Audi</option>
                </select>
              </span>
              <span className='left w-47-sm-add mb-10'>
                <select
                  className='w-100 mt-10 p-5'
                  onChange={this.onChange}
                  id='selectColor'
                  name='color'
                  defaultValue={''}
                >
                  <option value='volvo'>Обрати</option>
                  <option value='saab'>Saab</option>
                  <option value='mercedes'>Mercedes</option>
                  <option value='audi'>Audi</option>
                </select>
              </span>
            </span>
            <span className='left w-30 mb-10'>
              КПП
              <br />
              <select
                className='w-100 mt-10 p-5'
                onChange={this.onChange}
                id='selectKPP'
                name='KPP'
                defaultValue={''}
              >
                <option value='volvo'>Обрати тип КПП</option>
                <option value='saab'>Saab</option>
                <option value='mercedes'>Mercedes</option>
                <option value='audi'>Audi</option>
              </select>
            </span>
            <span className='left w-30 mr-form-20'>
              <span className='left'>Привід</span>
              <span className='right'>Топливо</span>
              <br />
              <span className='left w-47-sm-add mb-10 mr-form-add-10'>
                <select
                  className='w-100 mt-10 p-5'
                  onChange={this.onChange}
                  id='selectTypeOfPrivod'
                  name='typeOfPrivod'
                  defaultValue={''}
                >
                  <option value='volvo'>Обрати</option>
                  <option value='saab'>Автомат</option>
                  <option value='mercedes'>Типтронік</option>
                  <option value='audi'>Audi</option>
                </select>
              </span>
              <span className='left w-47-sm-add mb-10'>
                <select
                  className='w-100 mt-10 p-5'
                  onChange={this.onChange}
                  id='selectFuel'
                  name='fuel'
                  defaultValue={''}
                >
                  <option value='volvo'>Обрати</option>
                  <option value='saab'>Saab</option>
                  <option value='mercedes'>Mercedes</option>
                  <option value='audi'>Audi</option>
                </select>
              </span>
            </span>
            <span className='left w-30 mr-form-20'>
              <span className='left'>Об'єм</span>
              <span className='right'>К-ть місць</span>
              <br />
              <span className='left w-47-sm-add mb-10 mr-form-add-10'>
                <select
                  className='w-100 mt-10 p-5'
                  onChange={this.onChange}
                  id='selectEngine'
                  name='engine'
                  defaultValue={''}
                >
                  <option value='volvo'>Обрати</option>
                  <option value='saab'>Автомат</option>
                  <option value='mercedes'>Типтронік</option>
                  <option value='audi'>Audi</option>
                </select>
              </span>
              <span className='left w-47-sm-add mb-10'>
                <select
                  className='w-100 mt-10 p-5'
                  onChange={this.onChange}
                  id='selectSeats'
                  name='seats'
                  defaultValue={''}
                >
                  <option value='volvo'>Обрати</option>
                  <option value='saab'>Saab</option>
                  <option value='mercedes'>Mercedes</option>
                  <option value='audi'>Audi</option>
                </select>
              </span>
            </span>
            <span className='left w-30 mb-10'>
              Розхід по місту
              <br />
              <select
                className='w-100 mt-10 p-5'
                onChange={this.onChange}
                id='selectRozhid'
                name='rozhid'
                defaultValue={''}
              >
                <option value='volvo'>Обрати тип топлива</option>
                <option value='saab'>Saab</option>
                <option value='mercedes'>Mercedes</option>
                <option value='audi'>Audi</option>
              </select>
            </span>
            <span className='left w-30 mr-form-20 mb-10'>
              К-ть кінських сил
              <br />
              <input
                className='w-97 mt-10 pl-5 mb-10'
                type='text'
                placeholder='Введіть кількість сил'
                onChange={this.onChange}
                id='selectHorse'
                name='horse'
                defaultValue={''}
              />
            </span>
            <span className='left w-30 mr-form-20 mb-10'>
              Пробіг авто
              <br />
              <input
                className='w-97 mt-10 pl-5 mb-10'
                onChange={this.onChange}
                id='inputKm'
                name='km'
                defaultValue={''}
                type='number'
                placeholder='Введіть пробіг автомобіля'
              />
            </span>
            <span className='left w-30 mb-10'>
              Ціна $<br />
              <input
                className='w-97 mt-10 pl-5 mb-10'
                onChange={this.onChange}
                id='inputPrice'
                name='price'
                defaultValue={''}
                type='number'
                placeholder='Введіть ціну'
              />
            </span>
            <br />
            <input
              type='file'
              name='carImage'
              id='carImage'
              value={this.state.carImage}
              onChange={this.onChange}
            />
            <button
              type='submit'
              className='btn-search txt-center blue txt-light mt-10'
            >
              Додати авто
            </button>
          </div>
        </form>
      </div>
    );
  }
}

AddCar.propTypes = {
  add: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { add })(withRouter(AddCar));
