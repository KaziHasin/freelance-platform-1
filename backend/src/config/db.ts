import mongoose from 'mongoose';

export const connectDB = async () => {
    const uri = process.env.MONGO_URI as string;
    if (!uri) throw new Error('MONGO_URI is not defined in .env');
    await mongoose.connect(uri);
    console.log('✅ Connected to MongoDB');
};
