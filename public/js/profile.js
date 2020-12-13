$(document).ready(function () {
    //use GET request to figure out which user is logged in
    $.get("/api/user-data").then(function (data) {
        $(".member-name").text(data.email);
    });

    //getting reference to form and inputs
    var updateBtn = $("#update");
    var firstName = $("#firstName");
    var lastName = $("#lastName");
    var height = $("#height");
    var weight = $("weight");
    var age = $("#age");
    var calorieIntake = $("#calorie-intake");
    var activity = $("#activity");
    var high = $("#high");
    var active = $("#active");
    var moderate = $("#moderate");
    var low = ("#low");
    var goal = ("#goal");
    var lose = ("#lose");
    var gain = ("#gain");
    var maintain = ("maintian");


});