import express from "express";
import morgan from "morgan";
import cors from "cors";
import eventsRouter from "./src/routes/Events.router.js";
import authRouter from "./src/routes/Auth.router.js";

//create express application
const app = express();
const PORT = 9000;

//middleware [intermediate actions beetwen request and response]
app.use(morgan("dev")); //-> show the http petitions only in dev mode
app.use(express.json()); //-> Allows server interact and understand json data from client side
app.use(cors()); //-> allows the client to interact with the api access point 

//routes
app.use('/api/events/', eventsRouter);
app.use('/api/auth/', authRouter);

//project index route
app.get('/api', async (req, res) => {
    res.json({ message: "Hello World" });
});

//Server up
app.listen(PORT, (req, res) => {
    console.log(`Server listening on port http://localhost:${PORT}/api `);
});