const Car = require('../../database/models/Car');

module.exports = async (req, res, next) => {
  const { car_id } = req.params;

  const car = await Car.findById(car_id);

  if (!car) {
    return next(res.status(404).json({ error: `No car` }));
  }

  req.car = car;

  next();
};
