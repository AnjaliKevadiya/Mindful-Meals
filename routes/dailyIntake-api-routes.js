var db = require("../models");

module.exports = function (app) {
  app.post("/api/addIntake", function (req, res) {
    console.log(req.body);
    db.DailyIntake.create({
      name_of_food: req.body.name_of_food,
      UserId: req.user.id,
    }).then(function (foodres) {
      db.Nutrients.create({
        protein: req.body.nutrients.PROCNT,
        carbs: req.body.nutrients.CHOCDF,
        fats: req.body.nutrients.FAT,
        fiber: req.body.nutrients.FIBTG,
        calories: req.body.nutrients.ENERC_KCAL,
        DailyIntakeId: foodres.id,
      }).then(function (foodres) {
        res.json(foodres);
      });
    });
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
