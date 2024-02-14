import { validateToken } from "../controller/Auth.controller.js";
import { dbMethods as db } from "../database/user.database.js";
const secret = process.env.JWT_SECRET_KEY || 'SECRET_KEY';

/**
 * 
 * @returns the user information
 */
const getUser = async (req, res) => {
    try {
        //capture the necesary data from the request
        const token = req.headers.authorization.split(" ")[1];
        const { id } = req.params;
        //validate the user token
        const validation = validateToken(token);
        //if the token validation return true the server response with the user data, but response with a errorMessage
        if (validation.value) {
            const userData = await db.getUserById(id);
            res.json(userData);
        } else {
            res.status(401).json('El token ha expirado o no no ha podido ser validado por el servidor');
        }
    } catch (error) {
        res.json(error);
    }
}

export const methods = {
    getUser,
}