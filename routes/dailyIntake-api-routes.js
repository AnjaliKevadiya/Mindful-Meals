var db = require("../models");

module.exports = function (app) {
  app.post("/api/addIntake", function (req, res) {
    //logic for inserting data into dailyIntake
    //add to dailyintake seperate query for this
    //also for neutient table
  });

  app.get("/api/getIntake", function (req, res) {
    //logic for querying data to get all dailyIntake
    var query = {};
    if (req.query.user_id) {
      query.User = req.query.user_id;
    }
    db.DailyIntake.findAll({}).then(function (dbDailyIntake) {
      res.json(dbDailyIntake);
    });
  });
  app.delete("/api/deleteIntake/:id", function (req, res) {
    // logic for deleting dailyIntake(food) item
    db.DailyIntake.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function (dbDailyIntake) {
      res.json(dbDailyIntake);
    });
  });
};
