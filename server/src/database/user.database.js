import { getConnection } from "../config/database.js";

/**
 * 
 * @returns the database response with the user data or with an error
 */
const getUserById = async (id) => {
    try {
        const connection = await getConnection();
        const data = await connection.query('select * from user where iduser = ?', id);
        return data;
    } catch (error) {
        throw new Error(`Error fetching user data from database: ${error}`);
    }
}

export const dbMethods = {
    getUserById,
}