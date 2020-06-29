const mongoose = require('mongoose');
const { Schema } = mongoose;

const carScheme = new Schema({
  mark: {
    type: String,
    require: true,
  },
  model: {
    type: String,
    require: true,
  },
  oblast: {
    type: String,
    require: true,
  },
  town: {
    type: String,
    require: true,
  },
  year: {
    type: Number,
    require: true,
  },
  color: {
    type: String,
    require: true,
  },
  kpp: {
    type: String,
    require: true,
  },
  typeOfPrivod: {
    type: String,
    require: true,
  },
  typeOfFuel: {
    type: String,
    require: true,
  },
  engine: {
    type: Number,
    require: true,
  },
  amountOfSeats: {
    type: Number,
    require: true,
  },
  rozhid: {
    type: Number,
    require: true,
  },
  amountOfHorse: {
    type: Number,
    require: true,
  },
  km: {
    type: Number,
    require: true,
  },
  desc: {
    type: String,
    require: false,
  },
  price: {
    type: Number,
    require: true,
  },
  carImage: {
    type: Array,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
});

carScheme.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('cars', carScheme);
