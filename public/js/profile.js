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
    var goal = ("#goal");

    updateBtn.on("click", function (event) {
        event.preventDefault();
        var updateData = {
            first_name: firstName.val().trim(),
            last_name: lastName.val().trim(),
            age: age.val(),
            height: Integer.parseInt(height),
            weight: weight.val(),
            no_of_active_days: activity.val(),
            lose_or_gain_weight: goal.val()
        }

        console.log(updateData);

        $.post("/api/user_info", updateData).then(function (result) {
            console.log(result);
        });
    });


});