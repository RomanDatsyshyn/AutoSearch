const { USER_ROLES, USER_STATUS } = require('../../constant');
const { passwordHasher } = require('../../helpers');
const User = require('../../database/models/User');

module.exports = async (name, phone, password) => {
  const user = {
    name: name,
    phone: phone,
    role_id: USER_ROLES.USER,
    status_id: USER_STATUS.ACTIVE,
  };

  user.password = await passwordHasher(password);

  const newUser = new User(user);

  await newUser.save();
};
