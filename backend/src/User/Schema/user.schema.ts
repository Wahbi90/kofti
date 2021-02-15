import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  firstName: String,
  email: String,
  id: String,
  createdAt: String,
  types: Boolean,
  rewards: Number,
});
