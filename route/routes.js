const express      =        require("express");
const router       =        express.Router();

const Candidate    =        require("../models/candidates");

router.get("/candidate", (req, res, next) => {
 //   res.send("Ritrovata la lista canditatura");
    Candidate.find((err, candidates) =>{
        res.json(candidates);
    });
});

router.post("/candidate", (req, res, next) => {
    //aggiungi candidato

    let newCandidate = new Candidate({
        candidate_name                  : req.body.candidate_name,
        candidate_surname               : req.body.candidate_surname,
        candidate_age                   : req.body.candidate_age,
        candidate_email                 : req.body.candidate_email,
        candidate_telephone             : req.body.candidate_telephone,
        candidate_education             : req.body.candidate_education,
        candidate_career                : req.body.candidate_career,
        candidate_location              : req.body.candidate_location

    });

    newCandidate.save((err, candidate)=>{
        if(err){
            res.json({msg:"Errore nel salvataggio del candidato: ", err});
        }
        else{
            res.json({msg:"Candidato salvato nel database", candidate});
        }
    });
});

router.delete("/candidate/:id", (req, res, next) => {
    Candidate.remove({_id: req.params.id},(err, results)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(results);
        }
    })
});


module.exports = router;