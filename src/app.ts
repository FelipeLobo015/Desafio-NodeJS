import express, { response } from "express";
import { router } from "./routes";

const app = express();
app.use(express.json());
app.use(router);

app.listen(4000, ()=> {console.log("Server is running")})
