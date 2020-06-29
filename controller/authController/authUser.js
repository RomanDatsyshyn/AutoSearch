const UserModel = require('../../database/models/User');
const OAuthModel = require('../../database/models/OAuthToken');
const { tokenizer, checkPasswordHash } = require('../../helpers');
const { USER_ROLES, USER_STATUS, JWT_METHOD } = require('../../constant');

module.exports = async (req, res) => {
  try {
    const { phone, password } = req.body;

    const isUserPresent = await UserModel.find({
      phone: phone,
      role_id: USER_ROLES.USER,
    });

    if (isUserPresent[0] == undefined) {
      return res.status(404).json({ error: `User is not present` });
    }

    if (isUserPresent[0].status_id !== USER_STATUS.ACTIVE) {
      return res.status(403).json({ error: `Account is blocked` });
    }

    await checkPasswordHash(isUserPresent[0].password, password);

    const tokens = tokenizer(JWT_METHOD.USER);

    const newOAuth = new OAuthModel({
      user_id: isUserPresent[0].id,
      ...tokens,
    });

    await newOAuth.save();

    res.json(tokens);
    res.status(201).end();
  } catch (e) {
    res.json({
      message: e.message,
      controller: e.controller || 'authUser',
    });
  }
};
