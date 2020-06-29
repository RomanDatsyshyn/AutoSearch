const Car = require('../../database/models/Car');

module.exports = async (req, res) => {
  try {
    const carData = await Car.findById(req.car.id);

    res.json(carData);
    res.status(200).end();
  } catch (e) {
    res.json({
      message: e.message,
      controller: e.controller || 'getCarById',
    });
  }
};
