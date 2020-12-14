$(document).ready(function () {
    //use GET request to figure out which user is logged in
    $.get("/api/user_data").then(function (data) {
        $(".member-name").text(data.email);
    });

    //getting reference to form and inputs
    var updateBtn = $("#update");
    var firstName = $("#firstName");
    var lastName = $("#lastName");
    var height = $("#height");
    var weight = $("weight");
    var age = $("#age");
   // var calorieIntake = $("#calorie-intake");
    var activity = $("#activity");
    var goal = $("#goal");

    updateBtn.on("click", function (event) {
        event.preventDefault();
        var updateData = {
            first_name: firstName.val().trim(),
            last_name: lastName.val().trim(),
            age: age.val(),
            feet: feet.val(),
            inches: inches.val(),
            weight: weight.val(),
            no_of_active_days: activity.val(),
            lose_or_gain_weight: goal.val()
        }


    updateProfile(updateData);
    
    // Update user profile
    function updateProfile(updateData) {
    $.ajax({
        method: "PUT",
        url: "/api/user_data",
        data: updateData
    }).then(function() {
        window.location.href = "/home";
    });
}
});

});