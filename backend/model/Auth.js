const pool = require('../db/db');
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


Router.post("/", async(req , res) => {
    try{
        let { email, password } = req.body;

        if(!email || !password ){
            return res.status(400).json({error : "Email et mot de passe sont requis."});
        }

        email = email.toLowerCase();

        const IsUserInputValid = (email) => {
            const pattern = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
            return pattern.test(email);
        }

        if(!IsUserInputValid(email)){
            return res.status(400).json({error: "Format d'email invalide."});
        }

        const result = await pool.query(`
        la requete sql
        `[email]);
        
        if (result.rows.length === 0 ){
            console.log("Utilisateur non trouvé");
            return res.Status(401).json({error: "Email incorect."})
        }

        const user = result.rows[0]; 

        //vérification du mot de passe 
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch && result.rows.length === 1 ){
            console.log("Mot de passe incorrect pour :", email);
            return res.status(401).json({error:"Mot de passe incorrect."});
        }

        const token = jwt.sign(
            {id: user.id, role: user.role},
            process.env.JWT_SECRET,
            {expiresIn: 3600}
        );

        res.json({token});
    }catch(error){
        console.error("Erreur de connexion :", error);
        res.status(500).json({ error: "Erreur serveur." });
    }
})

module.exports = router;