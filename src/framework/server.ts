import express from "express";

const app = express();

app.get('/hello', (req, res, next) => {
    res.send("Hello World");    
})

app.get('/oldfeature', (req, res, next) => {
    res.status(503).send({message:"Servicio deshabilitado"})    
})

export default app;