$(document).ready(function () {
    //use GET request to figure out which user is logged in
    $.get("/api/user_data").then(function (data) {
        $(".member-name").text(data.email);
    });

    //getting reference to form and inputs
    var updateBtn = $("#update");
    var firstName = $("#firstName");
    var lastName = $("#lastName");
    var gender = $("#gender");
    var feet = $("#feet");
    var inches = $("#inches");
    var weight = $("#weight");
    var age = $("#age");
   // var calorieIntake = $("#calorie-intake");
    var activity = $("#activity");
    var goal = $("#goal");

    updateBtn.on("click", function (event) {
        event.preventDefault();
        var updateData = {
            first_name: firstName.val().trim(),
            last_name: lastName.val().trim(),
            gender: gender.val(),
            age: parseInt(age.val().trim()),
            feet: parseInt(feet.val()),
            inches: parseInt(inches.val()),
            weight: parseFloat(weight.val()),
            no_of_active_days: activity.val(),
            lose_or_gain_weight: goal.val()
        }

        console.log(updateData);

        var height = (updateData.feet * 12) + updateData.inches;

        var BMR;
        var factor;

        if ( updateData.gender ==="male") {
            BMR = 66 + (6.3 * updateData.weight) + (12.9 * height) - (6.8 * updateData.age)
        } else if ( updateData.gender ==="female") {
            BMR = 655 + (4.3 * updateData.weight) + (4.7 * height) - (4.7 * updateData.age)
        } else {
            BMR = 360 + (5.3 * updateData.weight) + (8.8 * height) - (5.8 * updateData.age)
        };

        if (updateData.no_of_active_days === "low") {
            factor = 1.2
        } else if (updateData.no_of_active_days === "moderate") {
            factor =  1.375
        } else if (updateData.no_of_active_days === "active") {
            factor =  1.55
        } else {
            factor = 1.725
        };

        updateData.height = height;
        updateData.totalCalories = BMR * factor;



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