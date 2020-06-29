const OAuthModel = require('../../database/models/OAuthToken');

module.exports = async (req, res, next) => {
  const token = req.get('Authorization');

  const userFromAccessToken = await OAuthModel.find({
    access_token: token,
  });

  if (!userFromAccessToken) {
    return next(res.status(404).json({ error: `No user` }));
  }

  req.user = userFromAccessToken[0].user_id;

  next();
};
