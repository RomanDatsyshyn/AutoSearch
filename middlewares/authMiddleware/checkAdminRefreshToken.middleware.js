const { refreshTokenVerificator } = require('../../helpers');
const { JWT_METHOD } = require('../../constant');

module.exports = async (req, res, next) => {
  const token = req.get('Authorization');

  if (!token) {
    return next(res.status(403).json({ error: `No token` }));
  }

  refreshTokenVerificator(token, JWT_METHOD.ADMIN);

  next();
};
