// userSeed.js
import dotenv from 'dotenv';
dotenv.config(); 

import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import User from './models/User.js';
import connectToDatabase from './db/db.js';

const userRegister = async () => {
  await connectToDatabase();

  try {
    const hashPassword = await bcrypt.hash("admin", 10);
    const newUser = new User({
      name: "admin",
      email: "admin@gmail.com",
      password: hashPassword,
      role: "admin"
    });

    await newUser.save();
    console.log("Admin user created successfully");
    process.exit(0);
  } catch (error) {
    console.error(" Error creating admin user:", error.message);
    process.exit(1);
  }
};

userRegister();
