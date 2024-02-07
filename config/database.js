import mongoose from "mongoose";


const connectToDataBase = async(BASE_URL, DB_name='MyDatabase')=> {
    try {
        await mongoose.connect(`${BASE_URL}/${DB_name}`);
        console.log(`mongodb connection established succefully.`);
    } catch (error) {
        console.log(`Mongodb connection failed: ${error}`);
    };
};

export default connectToDataBase;