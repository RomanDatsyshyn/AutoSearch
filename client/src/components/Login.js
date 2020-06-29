import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/AuthActions';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      phone: '',
      password: '',
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/profile');
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/profile');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      phone: this.state.phone,
      password: this.state.password,
    };

    this.props.loginUser(userData);
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <div class='login-page center'>
          <Link to='/' class='login-logo w-100 h-100 left'></Link>
        </div>
        <form
          onSubmit={this.onSubmit}
          class='white swadow radius-16 center mt-20 w-300'
        >
          <div class='row-login'>
            Номер телефону:
            <input
              class='w-95 mt-10 pl-5 mb-10'
              type='number'
              name='phone'
              value={this.state.phone}
              onChange={this.onChange}
              placeholder='Введіть номер'
            />
            Пароль:
            <input
              class='w-95 mt-10 pl-5 mb-5'
              type='text'
              name='password'
              value={this.state.password}
              onChange={this.onChange}
              placeholder='Введіть пароль'
            />
            <Link to='/' class='txt-16'>
              Забули пароль?
            </Link>
            <button
              type='submit'
              class='btn-search txt-center blue txt-light mt-10'
            >
              Увійти
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
