var express = require("express");
var router = express.Router();
var player = require("../models/fifa.js");


router.get("/", function(req,res){
    player.all(function(player_data){
        console.log(player_data);
        res.render("index",{player_data});
    })
    
});

router.put("/players/update",function(req,res){
    player.update(req.body.player_id, function(result){
        console.log(result);
        res.redirect("/")
    });
});

router.post("/players/create", function(req,res){
    player.create(req.body.player_name, function(result){
        console.log(result);
        res.redirect("/");
    })
})

module.exports = router;