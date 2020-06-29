const { USER_ROLES, USER_STATUS } = require('../../constant');
const { passwordHasher } = require('../../helpers');
const User = require('../../database/models/User');

module.exports = async (req, res) => {
  try {
    const user = req.body;

    user.role_id = USER_ROLES.USER;
    user.status_id = USER_STATUS.ACTIVE;
    user.password = await passwordHasher(user.password);

    const newUser = new User(user);

    await newUser.save();

    res.status(201).end();
  } catch (e) {
    res.json({
      message: e.message,
      controller: e.controller || 'createUser',
    });
  }
};
