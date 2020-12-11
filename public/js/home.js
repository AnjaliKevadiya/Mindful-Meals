$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.email);
  });

  var searchBtn = $("#search");
  var searchInput = $("#input-search");

  // When the signup button is clicked, we validate the email and password are not blank
  searchBtn.on("click", function (event) {
    event.preventDefault();
    var searchData = {
      name: searchInput.val().trim(),
    };

    if (!searchData.name) {
      searchInput.val("");
      return;
    }
    // If we have an food name, call the searchForFoodNuterients function
    searchForFoodNuterients(searchData.name);
    searchInput.val("");
  });

  function searchForFoodNuterients(name) {
    $.get(`/api/search?name=${name}`).then(function (data) {
      console.log(data);
      $(".foodContainer").empty()

      if(!data.parsed[0]){
        $(".foodContainer2").append(`<h3>Nutrition facts for ${name} are not found</h3><br><h3>Please try again</h3>`)
      }else{

      $(".foodContainer").append(`

      <div class="card text-center">
      <div class="card-header">
        ${data.text}
      </div>
      <div class="card-body bg-success">
        <h5 class="card-title">Nutrients:</h5>
        <p class="card-text"><b>Calories:</b>${data.parsed[0].food.nutrients.ENERC_KCAL}cal <br> <b>Carbs</b>:${data.parsed[0].food.nutrients.CHOCDF}g <br><b>Fat:</b>${data.parsed[0].food.nutrients.FAT}g<br> <b>Fiber:</b>${data.parsed[0].food.nutrients.FIBTG}g <br> <b>Protein:</b>${data.parsed[0].food.nutrients.PROCNT}g</p>
        <a href="#" class="btn btn-primary">Add</a>
      </div>
            `)}
      // If there's an error, handle it by throwing up a bootstrap alert
    });
  }
});