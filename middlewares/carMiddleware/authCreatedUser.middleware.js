const { userService } = require('../../service');

module.exports = async (req, res, next) => {
  const { phone, password } = req.body;

  const tokens = await userService.authCreatedUser(phone, password);

  res.send(tokens);

  next();
};
