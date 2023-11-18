import express from "express";
import 'dotenv/config'
import { router } from "./controllers/routes/routes";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({
    extended: true
}))

app.use(router)

app.listen(PORT, () => {
    console.log(`Server is runnint on: http://localhost:${PORT}`);
})