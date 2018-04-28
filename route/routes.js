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
    //aggiungi
});

router.delete("/candidate/:id", (req, res, next) => {
    //elimina candidato
});


module.exports = router;