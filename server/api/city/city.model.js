'use strict';

import mongoose from 'mongoose';

var CitySchema = new mongoose.Schema({
  name: String,
  country: String,
  video: String,
  active: Boolean
});

export default mongoose.model('City', CitySchema);
