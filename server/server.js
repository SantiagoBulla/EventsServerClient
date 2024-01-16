import express, { json } from "express";
import morgan from "morgan";
import { getConnection } from "./src/config/database.js"

//create express application
const app = express();
const PORT = 9000;

//middleware [intermediate actions beetwen request and response]
app.use(morgan("dev")); //-> show the http petitions only in dev mode
app.use(express.json()); //-> Allows server interact and understand json data from client side

//routes

//project index route
app.get('/api', async (req, res) => {
    res.json({ message: "Hello World" });
});

//Server up
app.listen(PORT, (req, res) => {
    console.log(`Server listening on port http://localhost:${PORT}/api `);
});