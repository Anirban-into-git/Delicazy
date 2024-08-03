import mongoose from "mongoose"

export const connectDB= async() =>{
    await mongoose.connect('mongodb+srv://delicazy:deugfbeiajfhbreiufreawrfver@cluster0.tdrgoik.mongodb.net/delicazy').then(()=>console.log("DB Connected"));
}
