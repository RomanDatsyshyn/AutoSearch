const Car = require('../../database/models/Car');
const User = require('../../database/models/User');

module.exports = async (req, res) => {
  try {
    let filesdata = req.files;

    if (!filesdata) res.send('Error uploading file...');

    const files = [];

    const car = req.body;

    const user = await User.find({ phone: req.body.phone });

    for (let i = 0; i < filesdata.length; i++) {
      files.push(filesdata[i].path);
    }

    car.user_id = user[0].id;
    car.carImage = files;

    delete car.name;
    delete car.phone;
    delete car.password;

    const newCar = new Car(car);
    const savedCar = await newCar.save();

    user[0].cars = user[0].cars.concat(savedCar._id);
    await user[0].save();

    res.status(201).end();
  } catch (e) {
    res.json({
      message: e.message,
      controller: 'addCarWithoutAuth',
    });
  }
};
