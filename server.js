// import neccessory module
import processEnvVar from "./utils/processEnvVar.js";
import server from "./index.js";
import connectToDataBase from "./config/database.js";

// process environment variables
const PORT = processEnvVar.PORT;
const BASE_URL = processEnvVar.LOCAL_DB_URL;
const DATABASE_NAME = processEnvVar.DATABASE_NAME;

// server listening on specifying port 
server.listen(PORT, ()=>{
    console.log(`Server listening on http://localhost:${PORT}`);
    connectToDataBase(BASE_URL, DATABASE_NAME);
});