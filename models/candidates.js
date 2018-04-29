const mongoose      =       require("mongoose");


//Definisco la tabella Proposal come Schema di Mongoose
//Mongoose è un wrapper utile per gestire le entry in MongoDB

const CandidateSchema = mongoose.Schema({
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
    candidate_education:{
        type: Number,
        required: true
    },
    candidate_career:{
        type: Number,
        required: true
    },
    candidate_location:{
        type: Number,
        required: true
    },
});

//Esporto lo Schema Candidati
const Candidate = module.exports = mongoose.model("Canditate", CandidateSchema);