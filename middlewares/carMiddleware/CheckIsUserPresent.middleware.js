const UserModel = require('../../database/models/User');
const { userService } = require('../../service');

module.exports = async (req, res, next) => {
  const { name, phone, password } = req.body;

  const user = await UserModel.find({ phone: phone });

  if (user == '') {
    await userService.createUser(name, phone, password);
  }

  next();
};
