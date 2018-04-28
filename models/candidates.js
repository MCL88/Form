const mongoose      =       require("mongoose");


//Definisco la tabella Proposal come Schema di Mongoose
//Mongoose è un wrapper utile per gestire le entry in MongoDB

const CandidateSchema = mongoose.Schema({
    candidate_id:{
        type: String,
        required: true
    },
    candidate_name:{
        type: String,
        required: true
    },
    candidate_surname:{
        type: String,
        required: true
    },
    candidate_age:{
        type: String,
        required: true
    },
    candidate_email:{
        type: String,
        required: true
    },
    candidate_telephone:{
        type: String,
        required: true
    },
    education:{
        type: String,
        required: true
    },
    carrers:{
        type: String,
        required: true
    },
    carrer_location:{
        type: String,
        required: true
    },
});

//Esporto lo Schema Candidati
const Candidate = model.exports = mongoose.exports("Canditate", CandidateSchema)