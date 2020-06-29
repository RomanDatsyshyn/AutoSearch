const OAuthModel = require('../../database/models/OAuthToken');

module.exports = async (req, res, next) => {
  const token = req.get('Authorization');

  const userFromRefreshToken = await OAuthModel.find({
    refresh_token: token,
  });

  if (!userFromRefreshToken) {
    return next(res.status(404).json({ error: `No user` }));
  }

  req.user = userFromRefreshToken[0].user_id;

  console.log(req.user);

  next();
};
