const express      =        require("express");
const router       =        express.Router();

router.get("/add_proposal", (req, res, next) => {
    res.send("Ritrovata la lista canditatura");
});

router.post("/add_proposal", (req, res, next) => {
    //aggiungi
});

router.delete("/add_proposal/:id", (req, res, next) => {
    //elimina proposta di lavoro
});


module.exports = router;