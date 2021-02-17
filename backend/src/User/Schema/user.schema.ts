import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  firstName: String,
  email: String,
  id: String,
  types: Boolean,
  rewards: Number,
});
