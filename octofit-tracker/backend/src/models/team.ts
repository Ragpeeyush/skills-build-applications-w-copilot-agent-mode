import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    motto: { type: String, required: true },
    color: { type: String, required: true },
  },
  { timestamps: true },
);

export const Team = mongoose.model('Team', teamSchema);
