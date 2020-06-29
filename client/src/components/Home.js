import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { findCars } from '../actions/SearchActions';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      showDiv: false,
      mark: '',
      model: '',
      obl: '',
      town: '',
      yearBegin: '',
      yearEnd: '',
      priceStart: '',
      priceEnd: '',
      kmStart: '',
      kmEnd: '',
      KPP: '',
      typeOfPrivod: '',
      fuel: '',
      color: '',
      rozhidStart: '',
      rozhidEnd: '',
      engineStart: '',
      engineEnd: '',
      horseStart: '',
      horseEnd: '',
      seatsStart: '',
      seatsEnd: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const searchData = {
      mark: this.state.mark,
      model: this.state.model,
      obl: this.state.obl,
      town: this.state.town,
      yearBegin: this.state.yearBegin,
      yearEnd: this.state.yearEnd,
      priceStart: this.state.priceStart,
      priceEnd: this.state.priceEnd,
      kmStart: this.state.kmStart,
      kmEnd: this.state.kmEnd,
      KPP: this.state.KPP,
      typeOfPrivod: this.state.typeOfPrivod,
      fuel: this.state.fuel,
      color: this.state.color,
      rozhidStart: this.state.rozhidStart,
      rozhidEnd: this.state.rozhidEnd,
      engineStart: this.state.engineStart,
      engineEnd: this.state.engineEnd,
      horseStart: this.state.horseStart,
      horseEnd: this.state.horseEnd,
      seatsStart: this.state.seatsStart,
      seatsEnd: this.state.seatsEnd,
    };

    this.props.findCars(searchData);
    this.props.history.push(`/search`);
  }

  render() {
    return (
      <div>
        <header className='w-580 center mt-80'>
          <Link to='/' className='logo size-small-logo left h-100'></Link>
          <div className='line swadow black left h-100'></div>
          <nav className='left h-100'>
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
          className='container white swadow radius-16 center w-600'
        >
          <div className='center m-25'>
            <span className='left w-47 mr-form-20 mb-10'>
              Марка
              <br />
              <select
                className='w-100 mt-10 p-5'
                onChange={this.onChange}
                id='selectMark'
                name='mark'
                defaultValue={''}
              >
                <option value=''>Обрати марку</option>
                <option value='saab'>Saab</option>
                <option value='mercedes'>Mercedes</option>
                <option value='audi'>Audi</option>
              </select>
            </span>
            <span className='left w-47 mb-10'>
              Модель
              <br />
              <select
                className='w-100 mt-10 p-5'
                onChange={this.onChange}
                id='selectModel'
                name='model'
                defaultValue={''}
              >
                <option value=''>Обрати модель</option>
                <option value='saab'>Saab</option>
                <option value='mercedes'>Mercedes</option>
                <option value='audi'>Audi</option>
              </select>
            </span>
            <span className='left w-47 mr-form-20 mb-10'>
              Область
              <br />
              <select
                className='w-100 mt-10 p-5'
                onChange={this.onChange}
                id='selectObl'
                name='obl'
                defaultValue={''}
              >
                <option value=''>Обрати область</option>
                <option value='saab'>Saab</option>
                <option value='mercedes'>Mercedes</option>
                <option value='audi'>Audi</option>
              </select>
            </span>
            <span className='left w-47 mb-10'>
              Місто
              <br />
              <select
                className='w-100 mt-10 p-5'
                onChange={this.onChange}
                id='selectTown'
                name='town'
                defaultValue={''}
              >
                <option value=''>Обрати місто</option>
                <option value='saab'>Saab</option>
                <option value='mercedes'>Mercedes</option>
                <option value='audi'>Audi</option>
              </select>
            </span>
            <span className='left w-47 mr-form-20'>
              Рік
              <br />
              <span className='left w-47-sm mb-10 mr-form-10'>
                <select
                  className='w-100 mt-10 p-5'
                  onChange={this.onChange}
                  id='selectYearBegin'
                  name='yearBegin'
                  defaultValue={''}
                >
                  <option value=''>Від</option>
                  <option value='saab'>Saab</option>
                  <option value='mercedes'>Mercedes</option>
                  <option value='audi'>Audi</option>
                </select>
              </span>
              <span className='left w-47-sm mb-10'>
                <select
                  className='w-100 mt-10 p-5'
                  onChange={this.onChange}
                  id='selectYearEnd'
                  name='yearEnd'
                  defaultValue={''}
                >
                  <option value=''>До</option>
                  <option value='saab'>Saab</option>
                  <option value='mercedes'>Mercedes</option>
                  <option value='audi'>Audi</option>
                </select>
              </span>
            </span>
            <span className='left w-47'>
              Ціна $<br />
              <span className='left w-47-sm mb-10 mr-form-10'>
                <input
                  className='w-90 mt-10 pl-5'
                  onChange={this.onChange}
                  id='inputPriceStart'
                  name='priceStart'
                  defaultValue={''}
                  type='number'
                  placeholder='Від'
                />
              </span>
              <span className='left w-47-sm mb-10'>
                <input
                  className='w-90 mt-10 pl-5'
                  onChange={this.onChange}
                  id='inputPriceEnd'
                  name='priceEnd'
                  defaultValue={''}
                  type='number'
                  placeholder='До'
                />
              </span>
            </span>
            <span className='left w-47 mr-form-20'>
              Пробіг
              <br />
              <span className='left w-47-sm mb-10 mr-form-10'>
                <input
                  className='w-90 mt-10 pl-5'
                  onChange={this.onChange}
                  id='inputKmStart'
                  name='kmStart'
                  defaultValue={''}
                  type='number'
                  placeholder='Від'
                />
              </span>
              <span className='left w-47-sm mb-10'>
                <input
                  className='w-90 mt-10 pl-5'
                  onChange={this.onChange}
                  id='inputKmEnd'
                  name='kmEnd'
                  defaultValue={''}
                  type='number'
                  placeholder='До'
                />
              </span>
            </span>
            <span className='left w-47 mb-10'>
              Розширений пошук
              <br />
              <a
                href='#'
                className='extension mt-10'
                id='ext'
                onClick={() => {
                  this.setState({ showDiv: !this.state.showDiv });
                  const ext = document.getElementById('ext').classList;
                  !this.state.showDiv
                    ? ext.add('rotate')
                    : ext.remove('rotate');
                }}
              >
                {' '}
              </a>
            </span>
            {this.state.showDiv && (
              <div>
                <span className='left w-47 mr-form-20 mb-10'>
                  КПП
                  <br />
                  <select
                    className='w-100 mt-10 p-5'
                    onChange={this.onChange}
                    id='selectKPP'
                    name='KPP'
                    defaultValue={''}
                  >
                    <option value=''>Обрати тип КПП</option>
                    <option value='saab'>Saab</option>
                    <option value='mercedes'>Mercedes</option>
                    <option value='audi'>Audi</option>
                  </select>
                </span>
                <span className='left w-47 mb-10'>
                  Тип привода
                  <br />
                  <select
                    className='w-100 mt-10 p-5'
                    onChange={this.onChange}
                    id='selectTypeOfPrivod'
                    name='typeOfPrivod'
                    defaultValue={''}
                  >
                    <option value=''>Обрати тип привода</option>
                    <option value='saab'>Saab</option>
                    <option value='mercedes'>Mercedes</option>
                    <option value='audi'>Audi</option>
                  </select>
                </span>
                <span className='left w-47 mr-form-20 mb-10'>
                  Тип топлива
                  <br />
                  <select
                    className='w-100 mt-10 p-5'
                    onChange={this.onChange}
                    id='selectFuel'
                    name='fuel'
                    defaultValue={''}
                  >
                    <option value=''>Обрати тип топлива</option>
                    <option value='saab'>Saab</option>
                    <option value='mercedes'>Mercedes</option>
                    <option value='audi'>Audi</option>
                  </select>
                </span>
                <span className='left w-47 mb-10'>
                  Колір
                  <br />
                  <select
                    className='w-100 mt-10 p-5'
                    onChange={this.onChange}
                    id='selectColor'
                    name='color'
                    defaultValue={''}
                  >
                    <option value=''>Обрати колір авто</option>
                    <option value='saab'>Saab</option>
                    <option value='mercedes'>Mercedes</option>
                    <option value='audi'>Audi</option>
                  </select>
                </span>
                <span className='left w-47 mr-form-20'>
                  Розхід палива
                  <br />
                  <span className='left w-47-sm mb-10 mr-form-10'>
                    <select
                      className='w-100 mt-10 p-5'
                      onChange={this.onChange}
                      id='selectRozhidStart'
                      name='rozhidStart'
                      defaultValue={''}
                    >
                      <option value=''>Від</option>
                      <option value='saab'>Saab</option>
                      <option value='mercedes'>Mercedes</option>
                      <option value='audi'>Audi</option>
                    </select>
                  </span>
                  <span className='left w-47-sm mb-10'>
                    <select
                      className='w-100 mt-10 p-5'
                      onChange={this.onChange}
                      id='selectRozhidEnd'
                      name='rozhidEnd'
                      defaultValue={''}
                    >
                      <option value=''>До</option>
                      <option value='saab'>Saab</option>
                      <option value='mercedes'>Mercedes</option>
                      <option value='audi'>Audi</option>
                    </select>
                  </span>
                </span>
                <span className='left w-47'>
                  Об'єм двигуна
                  <br />
                  <span className='left w-47-sm mb-10 mr-form-10'>
                    <select
                      className='w-100 mt-10 p-5'
                      onChange={this.onChange}
                      id='selectEngineStart'
                      name='engineStart'
                      defaultValue={''}
                    >
                      <option value=''>Від</option>
                      <option value='saab'>Saab</option>
                      <option value='mercedes'>Mercedes</option>
                      <option value='audi'>Audi</option>
                    </select>
                  </span>
                  <span className='left w-47-sm mb-10'>
                    <select
                      className='w-100 mt-10 p-5'
                      onChange={this.onChange}
                      id='selectEngineEnd'
                      name='engineEnd'
                      defaultValue={''}
                    >
                      <option value=''>До</option>
                      <option value='saab'>Saab</option>
                      <option value='mercedes'>Mercedes</option>
                      <option value='audi'>Audi</option>
                    </select>
                  </span>
                </span>
                <span className='left w-47 mr-form-20'>
                  Кількість кінських сил
                  <br />
                  <span className='left w-47-sm mb-10 mr-form-10'>
                    <select
                      className='w-100 mt-10 p-5'
                      onChange={this.onChange}
                      id='selectHorseStart'
                      name='horseStart'
                      defaultValue={''}
                    >
                      <option value=''>Від</option>
                      <option value='saab'>Saab</option>
                      <option value='mercedes'>Mercedes</option>
                      <option value='audi'>Audi</option>
                    </select>
                  </span>
                  <span className='left w-47-sm mb-10'>
                    <select
                      className='w-100 mt-10 p-5'
                      onChange={this.onChange}
                      id='selectHorseEnd'
                      name='horseEnd'
                      defaultValue={''}
                    >
                      <option value=''>До</option>
                      <option value='saab'>Saab</option>
                      <option value='mercedes'>Mercedes</option>
                      <option value='audi'>Audi</option>
                    </select>
                  </span>
                </span>
                <span className='left w-47'>
                  Кількість мість
                  <br />
                  <span className='left w-47-sm mb-10 mr-form-10'>
                    <select
                      className='w-100 mt-10 p-5'
                      onChange={this.onChange}
                      id='selectSeatsStart'
                      name='seatsStart'
                      defaultValue={''}
                    >
                      <option value=''>Від</option>
                      <option value='saab'>Saab</option>
                      <option value='mercedes'>Mercedes</option>
                      <option value='audi'>Audi</option>
                    </select>
                  </span>
                  <span className='left w-47-sm mb-10'>
                    <select
                      className='w-100 mt-10 p-5'
                      onChange={this.onChange}
                      id='selectSeatsEnd'
                      name='seatsEnd'
                      defaultValue={''}
                    >
                      <option value=''>До</option>
                      <option value='saab'>Saab</option>
                      <option value='mercedes'>Mercedes</option>
                      <option value='audi'>Audi</option>
                    </select>
                  </span>
                </span>
              </div>
            )}
            <button
              className='btn-search txt-center blue txt-light mt-10'
              type='submit'
            >
              Підібрати авто
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Home.propTypes = {
  findCars: PropTypes.func.isRequired,
  carsSearchState: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  carsSearchState: state.carsSearchState,
});

export default connect(mapStateToProps, { findCars })(Home);
