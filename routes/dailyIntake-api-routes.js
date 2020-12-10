var db = require("../models");

module.exports = function(app) {
    app.post("/api/addIntake", function (req, res) {
        console.log(req.body);
        db.dailyIntake.create({
            name_of_food: req.body.name_of_food,
            id: req.body.id
        })
        //logic for inserting data into dailyIntake
        db.DailyIntake.create(req.body).then(function (dbDailyIntake) {
            res.json(dbDailyIntake);
        });
        //add to dailyintake seperate query for this
        //also for nutrient table
    });

    app.get("/api/getIntake", function (req, res) {
          //logic for querying data to get all dailyIntake
    });
      //app.delete(“/api/deleteIntake”, function (req, res) {
          //logic for deleting dailyIntake(food) item
      // });   

};