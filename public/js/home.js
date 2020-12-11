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
      // If there's an error, handle it by throwing up a bootstrap alert
      //When rendering search data, create a add button with a data-label attribute
    });
  }

  var addBtn = $("#add");

  //When add button is clicked
  addBtn.on("click", function (event) {
    var label = $(this).data("label").val().trim();
    event.preventDefault();
    var foodData = {
      name_of_food: label,
    };

    if (!foodData.name_of_food) {
      return;
    }

    $.post("/api/addIntake", foodData).then(function (result) {
      console.log(result);
    });
  });
});
