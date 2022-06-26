import mongoose from "mongoose";

const url = process.env.MONGODB_URL ?? ""

export const connect = async () => { await mongoose.connect(url, {
    appName: "LLDA",
    auth: {
        username: process.env.MONGODB_USERNAME,
        password: process.env.MONGODB_PASSWORD
    },
    retryWrites: true,
    w: 'majority'
})}