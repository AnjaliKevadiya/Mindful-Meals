// Requiring our models
var db = require("../models");
const axios = require("axios");

// Routes
// =============================================================
module.exports = function (app) {
  app.get("/api/search", function (req, res) {
    console.log(req.query.name);
    axios({
      method: "get",
      url: `https://api.edamam.com/api/food-database/v2/parser?ingr=${req.query.name}&app_id=67d00f61&app_key=d1f74c4f7cb95657ee6dd37b41502fb8`,
    }).then(function (response) {
      res.json({
        text: response.data.text,
        parsed: response.data.parsed,
      });
    });
  });
};
