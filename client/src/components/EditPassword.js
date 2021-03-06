import React from 'react';
import { Link } from 'react-router-dom';

function EditPassword() {
  return (
    <div>
      <header class='w-580 center mt-80'>
        <Link to='/' class='logo size-small-logo left h-100'></Link>
        <div class='line swadow black left h-100'></div>
        <nav class='left h-100'>
          <Link to='/login'>
            <i class='login-icon left h-100'></i>
          </Link>
          <Link to='/login' class='btn login blue txt-light radius-7'></Link>
          <Link to='/add' class='btn add yellow txt-dark radius-7'></Link>
        </nav>
      </header>
      <form onSubmit='' class='container white swadow radius-16 center w-600'>
        <div class='center m-25'>
          Зміна вашого паролю:
          <br />
          <span class='left w-47-sm-pass mb-10 mr-form-20'>
            <input
              class='w-97 mt-10 pl-5'
              type='text'
              placeholder='Введіть старий пароль'
            />
          </span>
          <span class='left w-47-sm-pass mb-10'>
            <input
              class='w-97 mt-10 pl-5'
              type='text'
              placeholder='Введіть новий пароль'
            />
          </span>
          <button
            href='#search'
            class='btn-search txt-center blue txt-light mt-10'
          >
            Змінити ціну
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditPassword;
