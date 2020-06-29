import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/AuthActions';

class Profile extends Component {
  onClickLogoutUser(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  onClickLogoutAdmin(e) {
    e.preventDefault();
    this.props.logoutAdmin();
  }

  render() {
    return (
      <div>
        <header class='w-780 center mt-20'>
          <Link to='/' class='logo size-big-logo left h-100'></Link>
          <nav class='lg-nav right h-100'>
            <Link to='/login'>
              <i class='login-icon left h-100'></i>
            </Link>
            <Link to='/login' class='btn login blue txt-light radius-7'></Link>
            <Link to='/add' class='btn add yellow txt-dark radius-7'></Link>
          </nav>
        </header>
        <form onSubmit='' class='container white swadow radius-16 center w-800'>
          <div class='center m-25'>
            <div class='col-4 left'>
              <center>
                <i class='user-icon' style={{ height: '70px' }}></i>
                <span>Дацишин Роман</span>
              </center>
              <Link
                to='/edit-password'
                class='btn-profile change txt-center blue radius-7 txt-light mt-10'
              >
                Змінити пароль
              </Link>
              <Link
                to='/'
                class='btn-profile setting txt-center yellow radius-7 txt-dark mt-10 mb-25'
              >
                Налаштування
              </Link>
              <Link to='/' onClick={this.onClickLogoutUser.bind(this)}>
                Вийти
              </Link>
            </div>
            <div class='col-8 left pl-5'>
              Список моїх оголошень:
              <div class='w-100 mt-10'>
                <Link to='/'>Mercedes-Benz G 560 L 4MATIC AMG</Link>
                <span class='block'>
                  <span class='txt-16'>Переглядів: 14222</span> |
                  <Link to='/edit-price' class='txt-16'>
                    Змінити ціну
                  </Link>{' '}
                  |
                  <Link to='/' class='txt-16'>
                    Видалити
                  </Link>
                </span>
                <hr />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Profile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Profile);
