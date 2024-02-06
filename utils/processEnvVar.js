import dotenv from 'dotenv';
dotenv.config();


function processEnvironmentVariable (){
    return process.env;
};

const processEnvVar = processEnvironmentVariable();
export default processEnvVar;