const Car = require('../../database/models/Car');
const User = require('../../database/models/User');

module.exports = async (req, res) => {
  try {
    // Сюди не доходить
    // Можливо подуматм як інакшими способами передавати токен
    // Бо скоріше за все це зв'язано з тим, що
    // вище юзали res.send()
    // Перенести все сюди?
    console.log(88888888888888888888888);
    let filesdata = req.files;

    if (!filesdata) res.send('Error uploading file...');

    const files = [];

    const car = req.body;

    for (let i = 0; i < filesdata.length; i++) {
      files.push(filesdata[i].path);
    }

    car.user_id = req.user;
    car.carImage = files;

    const newCar = new Car(car);
    const savedCar = await newCar.save();

    const user = await User.findById(req.user);
    user.cars = user.cars.concat(savedCar._id);
    await user.save();

    res.status(201).end();
  } catch (e) {
    res.json({
      message: e.message,
      controller: 'addCar',
    });
  }
};
