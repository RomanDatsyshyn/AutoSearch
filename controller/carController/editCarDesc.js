const Car = require('../../database/models/Car');

module.exports = async (req, res) => {
  try {
    if (req.car.user_id.toString() !== req.user.toString()) {
      return res.status(403).json({ error: 'access denied' });
    }

    await Car.updateOne({ _id: req.car.id }, { $set: { desc: req.body.desc } });

    res.status(200).end();
  } catch (e) {
    res.json({
      message: e.message,
      controller: e.controller || 'changeCarDesc',
    });
  }
};
