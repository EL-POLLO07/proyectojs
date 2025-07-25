import{Schema, model}from "mongoose";

//crea un aestructura para la tabla 
const EsquemaAlumnos = new Schema({
    name:String, 
    edad:Number,
    calificacion:Number
})

//creacion de tabla
export const TablaAlumnos = new model("Alumnos", EsquemaAlumnos)

