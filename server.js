//importo le librerie principali
var express         =       require("express");
var mongoose        =       require("mongoose");
var body_parser     =       require("body-parser");
var cors            =       require("cors");

var path            =       require("path");

// Configutazione Server
var app     = express();

//Porta del server NodeJS
var port    = 3000;

//Risorsa Home

app.get("/", (req, res) =>{

    res.send("Foobar");
});

//Avvio server
app.listen(port,()=>{
    console.log("Ciao mondo!")
});