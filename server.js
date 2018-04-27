//importo le librerie principali
var express         =       require("express");
var mongoose        =       require("mongoose");
var body_parser     =       require("body-parser");
var cors            =       require("cors");

var path            =       require("path");
const routes        =       require("./route/routes");

// Configutazione Server
var app     = express();

//Porta del server NodeJS
var port    = 3000;



//Aggiunta middleware
app.use(cors());
app.use(body_parser.json());

//utilizzo dei file statici
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use("/api", routes);

//Risorsa Home

app.get("/", (req, res) =>{
//Risposta del server quando si va nella home del sito
    res.send("Foobar");
});


//Avvio server
app.listen(port,()=>{
    console.log("Ciao mondo!");
});