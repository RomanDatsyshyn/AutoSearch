const { tokenizer } = require('../../helpers');
const { JWT_METHOD } = require('../../constant');
const OAuthModel = require('../../database/models/OAuthToken');

module.exports = async (req, res) => {
  try {
    const token = req.get('Authorization');
    const { user_id } = req.user;
    const tokens = tokenizer(JWT_METHOD.USER);

    await OAuthModel.deleteOne({ refresh_token: token });

    const newOAuth = new OAuthModel({
      user_id: user_id,
      ...tokens,
    });

    await newOAuth.save();

    res.json(tokens);
  } catch (e) {
    res.json({
      message: e.message,
      controller: e.controller || 'refreshToken',
    });
  }
};
