import mongoose from 'mongoose';
import { Activity } from '../models/activity.js';
import { Leaderboard } from '../models/leaderboard.js';
import { Team } from '../models/team.js';
import { User } from '../models/user.js';
import { Workout } from '../models/workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}), Team.deleteMany({}), Activity.deleteMany({}),
      Leaderboard.deleteMany({}), Workout.deleteMany({}),
    ]);

    const [trailblazers, summitSeekers] = await Team.create([
      { name: 'Trailblazers', motto: 'Find your next mile', color: '#2f855a' },
      { name: 'Summit Seekers', motto: 'Stronger together', color: '#d97706' },
    ]);
    const users = await User.create([
      { name: 'Alex Morgan', email: 'alex@example.com', avatar: 'AM', team: trailblazers._id },
      { name: 'Jordan Lee', email: 'jordan@example.com', avatar: 'JL', team: trailblazers._id },
      { name: 'Taylor Reed', email: 'taylor@example.com', avatar: 'TR', team: summitSeekers._id },
      { name: 'Casey Patel', email: 'casey@example.com', avatar: 'CP', team: summitSeekers._id },
    ]);
    await Activity.create([
      { user: users[0]._id, type: 'Run', durationMinutes: 42, calories: 410, completedAt: new Date('2026-08-24T07:30:00Z') },
      { user: users[1]._id, type: 'Cycling', durationMinutes: 55, calories: 530, completedAt: new Date('2026-08-23T18:00:00Z') },
      { user: users[2]._id, type: 'Strength', durationMinutes: 35, calories: 280, completedAt: new Date('2026-08-24T17:15:00Z') },
      { user: users[3]._id, type: 'Yoga', durationMinutes: 30, calories: 150, completedAt: new Date('2026-08-22T09:00:00Z') },
    ]);
    await Leaderboard.create([
      { user: users[0]._id, points: 1280, rank: 1, week: '2026-W34' },
      { user: users[2]._id, points: 1140, rank: 2, week: '2026-W34' },
      { user: users[1]._id, points: 980, rank: 3, week: '2026-W34' },
      { user: users[3]._id, points: 875, rank: 4, week: '2026-W34' },
    ]);
    await Workout.create([
      { title: 'Quick Cardio Reset', focus: 'cardio', difficulty: 'beginner', durationMinutes: 20, exercises: ['Marching high knees', 'Bodyweight squats', 'Mountain climbers'] },
      { title: 'Full Body Foundation', focus: 'strength', difficulty: 'intermediate', durationMinutes: 35, exercises: ['Push-ups', 'Reverse lunges', 'Plank shoulder taps'] },
      { title: 'Mobility Flow', focus: 'mobility', difficulty: 'beginner', durationMinutes: 25, exercises: ['Worlds greatest stretch', 'Cat-cow', 'Pigeon pose'] },
    ]);
    console.log('Inserted users, teams, activities, leaderboard entries, and workouts');

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
