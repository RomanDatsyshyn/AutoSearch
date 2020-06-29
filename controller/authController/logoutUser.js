const OAuthModel = require('../../database/models/OAuthToken');

module.exports = async (req, res) => {
  try {
    const token = req.get('Authorization');

    await OAuthModel.deleteOne({ access_token: token });

    res.status(204).end();
  } catch (e) {
    res.json({
      message: e.message,
      controller: e.controller || 'logoutUser',
    });
  }
};
