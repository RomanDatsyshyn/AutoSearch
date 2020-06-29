const Car = require('../../database/models/Car');
const User = require('../../database/models/User');

module.exports = async (req, res) => {
  try {
    if (req.car.user_id.toString() !== req.user.toString()) {
      return res.status(403).json({ error: 'access denied' });
    }

    const user = await User.findById(req.user);
    const index = user.cars.indexOf(req.car.id);
    user.cars.splice(index, 1);

    await user.save();

    await Car.deleteOne({ _id: req.car.id });

    res.status(204).end();
  } catch (e) {
    res.json({
      message: e.message,
      controller: e.controller || 'deleteCar',
    });
  }
};
