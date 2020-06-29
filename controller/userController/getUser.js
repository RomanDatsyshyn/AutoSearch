const User = require('../../database/models/User');

module.exports = async (req, res) => {
  try {
    const userData = await User.findById(req.user);

    res.json(userData);
    res.status(200).end();
  } catch (e) {
    res.json({
      message: e.message,
      controller: e.controller || 'getUser',
    });
  }
};
