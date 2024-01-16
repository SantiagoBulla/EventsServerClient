import { config } from "dotenv";

//Loads .env file contents into process.env by default. 
config();

//export the enviroment variables that were configurated in .env file
export default {
    host: process.env.HOST || '',
    database: process.env.DATABASE || '',
    user: process.env.USER || '',
    password: process.env.PASSWORD,
}
