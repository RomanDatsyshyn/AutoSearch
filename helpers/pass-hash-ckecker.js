const bcrypt = require('bcrypt');
const ErrorHandler = require('../error/ErrorHandler');

module.exports = async (hashedPassword, password) => {
  let isPasswordCorrect = await bcrypt.compare(password, hashedPassword);

  if (!isPasswordCorrect) {
    throw new ErrorHandler('Password is incorrect', 404, 'authUser');
  }
};
