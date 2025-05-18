import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL); // Cleaned up
    console.log(`Database Connected: ${conn.connection.name}`);
  } catch (error) {
    console.error(' Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

export default connectToDatabase;
