import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://prabingeorge:s6XnhzRlEEGqVofa@cluster0.7a5ls.mongodb.net/food-del2').then(()=>console.log("DB Connected."))
};