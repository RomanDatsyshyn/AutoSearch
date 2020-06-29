const Car = require('../../database/models/Car');
const User = require('../../database/models/User');

module.exports = async (req, res) => {
  try {
    const user = await User.findById(req.user);
    const index = user.favorite.indexOf(req.car.id);
    user.favorite.splice(index, 1);

    await user.save();

    res.status(201).end();
  } catch (e) {
    res.json({
      message: e.message,
      controller: e.controller || 'removeCarFromFavorite',
    });
  }
};
