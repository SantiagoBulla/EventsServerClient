import mysql from "promise-mysql";
import config from "./config.js";

//create a connection with the mysql database
const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password,
});

// return a method with the connection
export const getConnection = () => {
    return connection;
}