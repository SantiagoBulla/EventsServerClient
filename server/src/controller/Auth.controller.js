import jwt from "jsonwebtoken";
import { dbMethods as db } from "../database/auth.database.js";

const secret = process.env.JWT_SECRET_KEY || 'SECRET_KEY';

const login = async (req, res) => {
    try {
        // validation from db , return the user id and the surnames
        const { user, password } = req.body;
        const response = await db.validateLogin(user, password);

        if (response.length > 0) {
            const { iduser: sub, usersurnames: name } = response[0]; // destructuring syntax

            const token = jwt.sign( //generate the jwt
                {// PAYLOAD : DATA
                    sub,
                    name,
                    exp: Math.floor(Date.now() / 1000) + 60 * 60 // 1 hora de duración
                }, secret) //secret key

            res.status(200).json({ token, sub }); // return the user id and the token
        } else {
            res.status(401).json({ message: 'Contraseña o usuario no válido' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// receive a user token
export const validateToken = (token) => {
    try {
        // verifies if the token signature maches with the secret key
        const payload = jwt.verify(token, secret);
        // validate token expiration time 
        if (Math.floor(Date.now() / 1000) > payload.exp) {
            return { value: false, message: 'token expired' };
        }
        return { value: true, message: 'token valid' };
    } catch (error) {
        // if the token was altered the try-catch block will be executed
        return { value: false, message: error.message };
    }
}

export const methods = {
    login,
}