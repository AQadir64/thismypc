const mongoose = require('mongoose');
const PCOwner = mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  pcID: { // User Personal Computer ID
    type: String,
    required: true,
  },
  pcKey: { // Unique Key that belong to pc
    type: String,
    required: true,
  },
  status: {
    type: Number,
    required: true,
    default: 1, //
  },
  loginDate: {
    type: Date,
    default: Date.now,
  },
});
const pCOwner = module.exports = mongoose.model('pcOwner', PCOwner);
// create   PC and pc Owner
module.exports.pcAndOwner = function(pcOwner, callback) {
  pCOwner.create({
    'userID': pcOwner.userID,
    'pcID': pcOwner.pcID,
    'pcKey': pcOwner.pcKey,
  }, callback);
};
