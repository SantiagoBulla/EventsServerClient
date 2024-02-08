import { getConnection } from "../config/database.js";

const validateLogin = async (user, password) => {
    try {
        const connection = await getConnection();
        const response = await connection.query('select * from user where useremail = ? and userpassword = ?', [user,password]);
        return response;
    } catch (error) {
        throw new Error(`Error validate user from the database: ${error}`);
    }
}

export const dbMethods = {
    validateLogin
}