const mongoose = require('mongoose');
const { Schema } = mongoose;

const userScheme = new Schema({
  name: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  role_id: {
    type: Number,
    require: false,
  },
  status_id: {
    type: Number,
    require: false,
  },
  cars: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'cars',
    },
  ],
  favorite: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'cars',
    },
  ],
});

userScheme.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('users', userScheme);
