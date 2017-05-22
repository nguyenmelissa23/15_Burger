var db = require("../models");


module.exports = function(app){
    app.get("/", function(req,res){
        var hbrsObj = {
            devouredTrue: [], 
            devouredFalse: []
        };
        db.Burger
            .findAll({})
            .then(function(dbBurger){
            for (var i = 0; i < dbBurger.length; i++){
                var currentBurger = dbBurger[i];
                if (currentBurger.devoured == true){
                    hbrsObj.devouredTrue.push(currentBurger);
                } else if (currentBurger.devoured == false){
                    hbrsObj.devouredFalse.push(currentBurger);
                }
            }
            res.render("index", hbrsObj);
        });
    });

    app.post("/addBurger", function(req, res){
        console.log(req.body);
        var newBurger = {
            burger_name: req.body.burgerName,
            devoured: false
        };
        db.Burger.create(newBurger).then(function(dbBurger){
            res.json(dbBurger);
            // console.log(dbBurger);
            // res.redirect("/");
        }); 
    });

    
    app.post("/devourBurger", function(req, res){
        db.Burger.update({
            devoured: false
        }, {
            where: {
                burger_name: req.body.burgerName
            }
        }).then(function(dbBurger){
            res.json(dbBurger);
            // res.redirect("/");
        }); 
    });
};