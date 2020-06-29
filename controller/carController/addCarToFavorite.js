const Car = require('../../database/models/Car');
const User = require('../../database/models/User');

module.exports = async (req, res) => {
  try {
    const user = await User.findById(req.user);
    user.favorite = user.favorite.concat(req.car.id);
    await user.save();

    res.status(201).end();
  } catch (e) {
    res.json({
      message: e.message,
      controller: e.controller || 'addCarToFavorite',
    });
  }
};
