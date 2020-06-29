const mongoose = require('mongoose');
const { Schema } = mongoose;

const OAuthToken = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  access_token: {
    type: String,
    require: true,
  },
  refresh_token: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('oauth_token', OAuthToken);
