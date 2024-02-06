import mongoose from "mongoose";


const connectToDataBase = async(BASE_URL)=> {
    try {
        const res = await mongoose.connect(BASE_URL);
        console.log(`mongodb connection established succefully.`);
    } catch (error) {
        console.log(`Mongodb connection failed: ${error}`);
    };
};

export default connectToDataBase;