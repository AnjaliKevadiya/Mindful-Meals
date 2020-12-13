var db = require("../models");

module.exports = function (app) {
  app.post("/api/addIntake", function (req, res) {
    console.log(req.body);
    db.DailyIntake.create({
      name_of_food: req.body.name_of_food,
      UserId: req.user.id,
    }).then(function (foodres) {
      db.Nutrients.create({
        protein: req.body.protein,
        carbs: req.body.carbs,
        fats: req.body.fats,
        fiber: req.body.fiber,
        calories: req.body.calories,
        DailyIntakeId: foodres.id,
      }).then(function (foodres) {
        res.json(foodres);
      });
    });
  });

  app.get("/api/getIntake/:user_id", function (req, res) {
    //logic for querying data to get all dailyIntake
    db.DailyIntake.findAll({
      where: {
        UserId: req.params.user_id,
      },
      include: db.Nutrients,
    }).then(function (dbDailyIntake) {
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
