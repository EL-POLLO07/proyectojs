//immportaciones d elibrerias
import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();//acceder a la configuracion de dotenv 

//conectar una base de datos 
mongoose.connect(process.env.urlbd)//nos permite conectarnos a mongo
.then(()=>{
    console.log("conectola base de datos")
})
.catch((error)=>{
    console.log("no se conecto", error)
})//promesa

const app = express();//creando un servidor local 
app.use(cors()); //seguridad en el servidor 

app.listen(4000, ()=>{
    console.log("se escucha el servidor")
})//verificas la funcionalidad del servidor 



