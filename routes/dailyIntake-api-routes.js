var db = require("../models");

module.exports = function(app) {
    app.post("/api/addIntake", function (req, res) {
        console.log(req.body);
        db.DailyIntake.create({
            name_of_food: req.body.name_of_food,
            UserId: req.user.id
        }).then( function (foodres) {
            res.json(foodres)
        });
    });

    app.get("/api/getIntake", function (req, res) {
          //logic for querying data to get all dailyIntake
    });
      //app.delete(“/api/deleteIntake”, function (req, res) {
          //logic for deleting dailyIntake(food) item
      // });   

};