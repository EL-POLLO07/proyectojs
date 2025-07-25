import { TablaAlumnos } from "../models/alumnos.model.js";

TablaAlumnos.create({
    name:"jesus",
    edad:25,
    calificacion:10
}, 
{
    name:"jessi",
    edad:24,
    calificacion:9.9
},
{
    name:"giovas",
    edad:18,
    calificacion:10
})

export const test =()=>{
    console.log("se esta llamando al controlador desde app")
}
