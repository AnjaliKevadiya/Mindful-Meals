$(document).ready(function () {
  var progress, totalCalories;
  //use GET request to figure out which user is logged in
  var eat = $(".fa-carrot");
  var progressEl = $("#progress");
  function updateProgressColor() {
    if (parseFloat(progress) < 80) {
      eat.css("color", "orange");
    } else if (parseFloat(progress) >= 80 && parseFloat(progress) < 100) {
      eat.css("color", "#93c54b");
    } else {
      eat.css("color", "red");
    }
  }

  $.get("/api/progress").then(function (data) {
    console.log(data);
    progress = data.progress;
    totalCalories = data.totalCalories;
    console.log(progress, totalCalories);

    updateProgressColor();

    progressEl.text(parseInt(progress) + "%");

    // call function to get all food items of logged in user
    getDailyIntake();
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
      $(".foodContainer").empty();
      $(".foodContainer2").empty();

      if (!data.parsed[0]) {
        $(".foodContainer2").append(
          `<h3>Nutrition facts for ${name} are not found</h3><br><h3>Please try again</h3>`
        );
      } else {
        $(".foodContainer").append(`

          <div class="card text-center">
          <div class="card-header">
            ${data.text}
          </div>
          <div class="card-body bg-success">
            <h5 class="card-title">Nutrients:</h5>
            <p class="card-text"><b>Calories:</b>${data.parsed[0].food.nutrients.ENERC_KCAL}cal <br> <b>Carbs</b>:${data.parsed[0].food.nutrients.CHOCDF}g <br><b>Fat:</b>${data.parsed[0].food.nutrients.FAT}g<br> <b>Fiber:</b>${data.parsed[0].food.nutrients.FIBTG}g <br> <b>Protein:</b>${data.parsed[0].food.nutrients.PROCNT}g</p>
            <a href="#" class="btn btn-primary" id="add" >Add</a>
          </div>
        `);

        addFoodToList(data);
      }
    });
  }

  function addFoodToList(data) {
    var addBtn = $("#add");

    //When add button is clicked
    addBtn.on("click", function (event) {
      var nameVal = data.text;
      var proteinVal = data.parsed[0].food.nutrients.PROCNT;
      var carbsVal = data.parsed[0].food.nutrients.CHOCDF;
      var fatsVal = data.parsed[0].food.nutrients.FAT;
      var fiberVal = data.parsed[0].food.nutrients.FIBTG;
      var caloriesVal = data.parsed[0].food.nutrients.ENERC_KCAL;

      event.preventDefault();
      var foodData = {
        name_of_food: nameVal,
        protein: proteinVal,
        carbs: carbsVal,
        fats: fatsVal,
        fiber: fiberVal,
        calories: caloriesVal,
      };

      console.log(foodData);

      $.post("/api/addIntake", foodData).then(function (result) {
        console.log(result);
        getDailyIntake();
      });
    });
  }

  function getDailyIntake() {
    const id = Cookies.get("id");
    console.log(id);
    $.get(`/api/getIntake/${id}`).then(function (result) {
      console.log("all food item of logged in user ", result);
      var caloriesConsumed = 0;

      //clear the nutrientsList before adding new item
      $(".nutrientsList").empty();

      result.forEach((food) => {
        caloriesConsumed += parseFloat(food.Nutrients[0].calories);
        // console.log("food", food);
        console.log(caloriesConsumed);

        if (parseFloat(totalCalories) === 0) {
          progress = 0;
        } else {
          progress = (caloriesConsumed / parseFloat(totalCalories)) * 100;
        }

        console.log(progress);

        $.ajax({
          method: "PUT",
          url: "/api/progress",
          data: { progress: progress },
        }).then(function (result) {
          progressEl.text(parseInt(progress) + "%");
          updateProgressColor();
        });

        $(".nutrientsList").append(`
        <tr>
          <th scope="row">${food.name_of_food}</th>
          <td>${food.Nutrients[0].calories}</td>
          <td>${food.Nutrients[0].carbs}</td>
          <td>${food.Nutrients[0].fats}</td>
          <td>${food.Nutrients[0].fiber}</td>
          <td>${food.Nutrients[0].protein}</td>
        </tr>
      `);
      });

      //display result data
    });
  }

  // <td><button type="button" onclick="deleteFoodItem(${food.id})" class="btn btn-danger delete-food">Danger</button></td>
  // function deleteFoodItem(id) {
  //   console.log("delete hit", id);
  //   $.delete(`/api/deleteIntake/${id}`).then(function (result) {
  //     getDailyIntake();
  //   });
  // }
});
