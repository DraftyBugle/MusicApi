import  express  from "express";
import { connection } from "./db_config.js";
import {router as musicRT } from "./src/musicRt.js"

const PORT = process.env.PORT ?? 3000;
const app = express ();

app.use(express.json());

app.listen (PORT ,err =>{
    console.log(
      err ? `Hay un error ${err}`:
      `El servidor corre en  http://localhost:${PORT}`
    );
})

app.use("/music",musicRT);


