import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Spinner from './Spiner';
import CarItem from './CarItem';
import { findCars } from '../actions/SearchActions';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      showMore: false,
      showMobile: false,
      showSearch: false,
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
      seatsStart: this.state.seatsStart,
      seatsEnd: this.state.seatsEnd,
    };

    this.props.findCars(searchData);
  }

  render() {
    const { findedCars, loading } = this.props.carsSearchState;

    console.log(findedCars);

    let carItems;

    if (findedCars === null || loading) {
      carItems = <Spinner />;
    } else {
      if (findedCars.results.length > 0) {
        carItems = findedCars.results.map((car) => (
          <CarItem key={Math.random()} car={car} />
        ));
      } else {
        carItems = <h4>Немає жодної машини...</h4>;
      }
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
        <div className='container center w-800 mobile'>
          <a
            href='#search'
            className='btn-search txt-center blue txt-light mt-10'
            onClick={() => {
              this.setState({ showMore: !this.state.showMore });
            }}
          >
            Показати параметри пошуку
          </a>
          {this.state.showMore && (
            <div>
              <form
                onSubmit={this.onSubmit}
                className='drv container white radius-16 center w-800'
              >
                <div className='center m-25'>
                  <span className='left w-30 mr-form-20 mb-10'>
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
                  <span className='left w-30'>
                    <span className='left'>Рік автомобіля</span>
                    <br />
                    <span className='left w-47-sm-add mb-10 mr-form-add-10'>
                      <select
                        className='w-100 mt-10 p-5'
                        onChange={this.onChange}
                        id='selectYearBegin'
                        name='yearBegin'
                        defaultValue={''}
                      >
                        <option value='volvo'>Від</option>
                        <option value='saab'>Автомат</option>
                        <option value='mercedes'>Типтронік</option>
                        <option value='audi'>Audi</option>
                      </select>
                    </span>
                    <span className='left w-47-sm-add mb-10'>
                      <select
                        className='w-100 mt-10 p-5'
                        onChange={this.onChange}
                        id='selectYearEnd'
                        name='yearEnd'
                        defaultValue={''}
                      >
                        <option value='volvo'>До</option>
                        <option value='saab'>Saab</option>
                        <option value='mercedes'>Mercedes</option>
                        <option value='audi'>Audi</option>
                      </select>
                    </span>
                  </span>
                  <span className='left w-30 mr-form-20'>
                    <span className='left'>Пробіг</span>
                    <br />
                    <span className='left w-47-sm-add mr-form-add-10'>
                      <input
                        className='w-97-search mt-10 pl-5'
                        onChange={this.onChange}
                        id='inputKmStart'
                        name='kmStart'
                        defaultValue={''}
                        type='number'
                        placeholder='Від'
                      />
                    </span>
                    <span className='left w-47-sm-add'>
                      <input
                        className='w-97-search mt-10 pl-5 mb-10'
                        onChange={this.onChange}
                        id='inputKmEnd'
                        name='kmEnd'
                        defaultValue={''}
                        type='number'
                        placeholder='До'
                      />
                    </span>
                  </span>
                  <span className='left w-30 mr-form-20'>
                    <span className='left'>Ціна $</span>
                    <br />
                    <span className='left w-47-sm-add mr-form-add-10'>
                      <input
                        className='w-97-search mt-10 pl-5 mb-10'
                        onChange={this.onChange}
                        id='inputPriceStart'
                        name='priceStart'
                        defaultValue={''}
                        type='number'
                        placeholder='Від'
                      />
                    </span>
                    <span className='left w-47-sm-add'>
                      <input
                        className='w-97-search mt-10 pl-5'
                        onChange={this.onChange}
                        id='inputPriceEnd'
                        name='priceEnd'
                        defaultValue={''}
                        type='number'
                        placeholder='До'
                      />
                    </span>
                  </span>
                  <span className='left w-30'>
                    Колір
                    <br />
                    <select
                      className='w-100 mt-10 p-5'
                      onChange={this.onChange}
                      id='selectColor'
                      name='color'
                      defaultValue={''}
                    >
                      <option value='volvo'>Обрати місто</option>
                      <option value='saab'>Saab</option>
                      <option value='mercedes'>Mercedes</option>
                      <option value='audi'>Audi</option>
                    </select>
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
                    Розширений пошук
                    <br />
                    <a
                      href='#'
                      className='extension mt-10'
                      id='ext8'
                      onClick={() => {
                        this.setState({ showMobile: !this.state.showMobile });
                        const ext = document.getElementById('ext8')
                          .classNameList;
                        !this.state.showMobile
                          ? ext.add('rotate')
                          : ext.remove('rotate');
                      }}
                    ></a>
                  </span>
                  {this.state.showMobile && (
                    <div>
                      <span className='left w-30 mr-form-20 mb-10'>
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
                      <span className='left w-30 mr-form-20 mb-10'>
                        Тип привода
                        <br />
                        <select
                          className='w-100 mt-10 p-5'
                          onChange={this.onChange}
                          id='selectTypeOfPrivod'
                          name='typeOfPrivod'
                          defaultValue={''}
                        >
                          <option value='volvo'>Обрати тип привода</option>
                          <option value='saab'>Saab</option>
                          <option value='mercedes'>Mercedes</option>
                          <option value='audi'>Audi</option>
                        </select>
                      </span>
                      <span className='left w-30 mb-10'>
                        Тип палива
                        <br />
                        <select
                          className='w-100 mt-10 p-5'
                          onChange={this.onChange}
                          id='selectFuel'
                          name='fuel'
                          defaultValue={''}
                        >
                          <option value='volvo'>Обрати тип палива</option>
                          <option value='saab'>Saab</option>
                          <option value='mercedes'>Mercedes</option>
                          <option value='audi'>Audi</option>
                        </select>
                      </span>
                      <span className='left w-30 mr-form-20'>
                        <span className='left'>Розхід палива</span>
                        <br />
                        <span className='left w-47-sm-add mb-10 mr-form-add-10'>
                          <select
                            className='w-100 mt-10 p-5'
                            onChange={this.onChange}
                            id='selectRozhidStart'
                            name='rozhidStart'
                            defaultValue={''}
                          >
                            <option value='volvo'>Від</option>
                            <option value='saab'>Автомат</option>
                            <option value='mercedes'>Типтронік</option>
                            <option value='audi'>Audi</option>
                          </select>
                        </span>
                        <span className='left w-47-sm-add mb-10'>
                          <select
                            className='w-100 mt-10 p-5'
                            onChange={this.onChange}
                            id='selectRozhidEnd'
                            name='rozhidEnd'
                            defaultValue={''}
                          >
                            <option value='volvo'>До</option>
                            <option value='saab'>Saab</option>
                            <option value='mercedes'>Mercedes</option>
                            <option value='audi'>Audi</option>
                          </select>
                        </span>
                      </span>
                      <span className='left w-30 mr-form-20'>
                        <span className='left'>Об'єм двигуна</span>
                        <br />
                        <span className='left w-47-sm-add mb-10 mr-form-add-10'>
                          <select
                            className='w-100 mt-10 p-5'
                            onChange={this.onChange}
                            id='selectEngineStart'
                            name='engineStart'
                            defaultValue={''}
                          >
                            <option value='volvo'>Від</option>
                            <option value='saab'>Автомат</option>
                            <option value='mercedes'>Типтронік</option>
                            <option value='audi'>Audi</option>
                          </select>
                        </span>
                        <span className='left w-47-sm-add mb-10'>
                          <select
                            className='w-100 mt-10 p-5'
                            onChange={this.onChange}
                            id='selectEngineEnd'
                            name='engineEnd'
                            defaultValue={''}
                          >
                            <option value='volvo'>До</option>
                            <option value='saab'>Saab</option>
                            <option value='mercedes'>Mercedes</option>
                            <option value='audi'>Audi</option>
                          </select>
                        </span>
                      </span>
                      <span className='left w-30'>
                        <span className='left'>Кількість мість</span>
                        <br />
                        <span className='left w-47-sm-add mb-10 mr-form-add-10'>
                          <select
                            className='w-100 mt-10 p-5'
                            onChange={this.onChange}
                            id='selectSeatsStart'
                            name='seatsStart'
                            defaultValue={''}
                          >
                            <option value='volvo'>Від</option>
                            <option value='saab'>Автомат</option>
                            <option value='mercedes'>Типтронік</option>
                            <option value='audi'>Audi</option>
                          </select>
                        </span>
                        <span className='left w-47-sm-add mb-10'>
                          <select
                            className='w-100 mt-10 p-5'
                            onChange={this.onChange}
                            id='selectSeatsEnd'
                            name='seatsEnd'
                            defaultValue={''}
                          >
                            <option value='volvo'>До</option>
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
          )}
        </div>
        <form
          onSubmit={this.onSubmit}
          className='container white swadow radius-16 center w-800 desktop'
        >
          <div className='center m-25'>
            <span className='left w-30 mr-form-20 mb-10'>
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
            <span className='left w-30'>
              <span className='left'>Рік автомобіля</span>
              <br />
              <span className='left w-47-sm-add mb-10 mr-form-add-10'>
                <select
                  className='w-100 mt-10 p-5'
                  onChange={this.onChange}
                  id='selectYearBegin'
                  name='yearBegin'
                  defaultValue={''}
                >
                  <option value='volvo'>Від</option>
                  <option value='saab'>Автомат</option>
                  <option value='mercedes'>Типтронік</option>
                  <option value='audi'>Audi</option>
                </select>
              </span>
              <span className='left w-47-sm-add mb-10'>
                <select
                  className='w-100 mt-10 p-5'
                  onChange={this.onChange}
                  id='selectYearEnd'
                  name='yearEnd'
                  defaultValue={''}
                >
                  <option value='volvo'>До</option>
                  <option value='saab'>Saab</option>
                  <option value='mercedes'>Mercedes</option>
                  <option value='audi'>Audi</option>
                </select>
              </span>
            </span>
            <span className='left w-30 mr-form-20'>
              <span className='left'>Пробіг</span>
              <br />
              <span className='left w-47-sm-add mr-form-add-10'>
                <input
                  className='w-97-search mt-10 pl-5'
                  onChange={this.onChange}
                  id='inputKmStart'
                  name='kmStart'
                  defaultValue={''}
                  type='number'
                  placeholder='Від'
                />
              </span>
              <span className='left w-47-sm-add'>
                <input
                  className='w-97-search mt-10 pl-5 mb-10'
                  onChange={this.onChange}
                  id='inputKmEnd'
                  name='kmEnd'
                  defaultValue={''}
                  type='number'
                  placeholder='До'
                />
              </span>
            </span>
            <span className='left w-30 mr-form-20'>
              <span className='left'>Ціна $</span>
              <br />
              <span className='left w-47-sm-add mr-form-add-10'>
                <input
                  className='w-97-search mt-10 pl-5 mb-10'
                  onChange={this.onChange}
                  id='inputPriceStart'
                  name='priceStart'
                  defaultValue={''}
                  type='number'
                  placeholder='Від'
                />
              </span>
              <span className='left w-47-sm-add'>
                <input
                  className='w-97-search mt-10 pl-5'
                  onChange={this.onChange}
                  id='inputPriceEnd'
                  name='priceEnd'
                  defaultValue={''}
                  type='number'
                  placeholder='До'
                />
              </span>
            </span>
            <span className='left w-30'>
              Колір
              <br />
              <select
                className='w-100 mt-10 p-5'
                onChange={this.onChange}
                id='selectColor'
                name='color'
                defaultValue={''}
              >
                <option value='volvo'>Обрати місто</option>
                <option value='saab'>Saab</option>
                <option value='mercedes'>Mercedes</option>
                <option value='audi'>Audi</option>
              </select>
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
              Розширений пошук
              <br />
              <a
                href='#'
                className='extension mt-10'
                id='ext7'
                onClick={() => {
                  this.setState({ showSearch: !this.state.showSearch });
                  const ext = document.getElementById('ext7').classNameList;
                  !this.state.showSearch
                    ? ext.add('rotate')
                    : ext.remove('rotate');
                }}
              ></a>
            </span>
            {this.state.showSearch && (
              <div>
                <span className='drv left w-30 mr-form-20 mb-10'>
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
                <span className='drv left w-30 mr-form-20 mb-10'>
                  Тип привода
                  <br />
                  <select
                    className='w-100 mt-10 p-5'
                    onChange={this.onChange}
                    id='selectTypeOfPrivod'
                    name='typeOfPrivod'
                    defaultValue={''}
                  >
                    <option value='volvo'>Обрати тип привода</option>
                    <option value='saab'>Saab</option>
                    <option value='mercedes'>Mercedes</option>
                    <option value='audi'>Audi</option>
                  </select>
                </span>
                <span className='drv left w-30 mb-10'>
                  Тип палива
                  <br />
                  <select
                    className='w-100 mt-10 p-5'
                    onChange={this.onChange}
                    id='selectFuel'
                    name='fuel'
                    defaultValue={''}
                  >
                    <option value='volvo'>Обрати тип палива</option>
                    <option value='saab'>Saab</option>
                    <option value='mercedes'>Mercedes</option>
                    <option value='audi'>Audi</option>
                  </select>
                </span>
                <span className='drv left w-30 mr-form-20'>
                  <span className='left'>Розхід палива</span>
                  <br />
                  <span className='left w-47-sm-add mb-10 mr-form-add-10'>
                    <select
                      className='w-100 mt-10 p-5'
                      onChange={this.onChange}
                      id='selectRozhidStart'
                      name='rozhidStart'
                      defaultValue={''}
                    >
                      <option value='volvo'>Від</option>
                      <option value='saab'>Автомат</option>
                      <option value='mercedes'>Типтронік</option>
                      <option value='audi'>Audi</option>
                    </select>
                  </span>
                  <span className='left w-47-sm-add mb-10'>
                    <select
                      className='w-100 mt-10 p-5'
                      onChange={this.onChange}
                      id='selectRozhidEnd'
                      name='rozhidEnd'
                      defaultValue={''}
                    >
                      <option value='volvo'>До</option>
                      <option value='saab'>Saab</option>
                      <option value='mercedes'>Mercedes</option>
                      <option value='audi'>Audi</option>
                    </select>
                  </span>
                </span>
                <span className='drv left w-30 mr-form-20'>
                  <span className='left'>Об'єм двигуна</span>
                  <br />
                  <span className='left w-47-sm-add mb-10 mr-form-add-10'>
                    <select
                      className='w-100 mt-10 p-5'
                      onChange={this.onChange}
                      id='selectEngineStart'
                      name='engineStart'
                      defaultValue={''}
                    >
                      <option value='volvo'>Від</option>
                      <option value='saab'>Автомат</option>
                      <option value='mercedes'>Типтронік</option>
                      <option value='audi'>Audi</option>
                    </select>
                  </span>
                  <span className='left w-47-sm-add mb-10'>
                    <select
                      className='w-100 mt-10 p-5'
                      onChange={this.onChange}
                      id='selectEngineEnd'
                      name='engineEnd'
                      defaultValue={''}
                    >
                      <option value='volvo'>До</option>
                      <option value='saab'>Saab</option>
                      <option value='mercedes'>Mercedes</option>
                      <option value='audi'>Audi</option>
                    </select>
                  </span>
                </span>
                <span className='drv left w-30'>
                  <span className='left'>Кількість мість</span>
                  <br />
                  <span className='left w-47-sm-add mb-10 mr-form-add-10'>
                    <select
                      className='w-100 mt-10 p-5'
                      onChange={this.onChange}
                      id='selectSeatsStart'
                      name='seatsStart'
                      defaultValue={''}
                    >
                      <option value='volvo'>Від</option>
                      <option value='saab'>Автомат</option>
                      <option value='mercedes'>Типтронік</option>
                      <option value='audi'>Audi</option>
                    </select>
                  </span>
                  <span className='left w-47-sm-add mb-10'>
                    <select
                      className='w-100 mt-10 p-5'
                      onChange={this.onChange}
                      id='selectSeatsEnd'
                      name='seatsEnd'
                      defaultValue={''}
                    >
                      <option value='volvo'>До</option>
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
        <div className='container center w-800 disable'>
          <div className='right mr-20-sort mb-10'>
            <label className='txt-16 mr-10' htmlFor='color'>
              Сортувати за
            </label>
            <select
              className='swadow txt-16 txt-dark h-30 mr-20 white p-5'
              id='color'
            >
              <option value='0'>датою додавання</option>
              <option value='1'>Audi</option>
            </select>
            <label className='txt-16 mr-10' htmlFor='amount'>
              Показувати
            </label>
            <select
              className='swadow h-30 txt-16 txt-dark white p-5'
              id='amount'
            >
              <option value='0'>10</option>
              <option value='1'>Audi</option>
            </select>
          </div>
        </div>
        {carItems}
        <br />
      </div>
    );
  }
}

Search.propTypes = {
  findCars: PropTypes.func.isRequired,
  carsSearchState: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  carsSearchState: state.carsSearchState,
});

export default connect(mapStateToProps, { findCars })(Search);
