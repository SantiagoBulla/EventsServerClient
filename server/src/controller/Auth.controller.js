import { dbMethods as db } from "../database/auth.database.js";

const login = async (req, res) => {
    try {
        const { user, password } = req.body;
        const response = await db.validateLogin(user,password);
        if (response.length > 0) {
            res.json({ message: 'Usuario valido' , response: response});
        } else {
            res.json({ message: 'Contraseña o usuario no valido'});
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const methods = {
    login,
}