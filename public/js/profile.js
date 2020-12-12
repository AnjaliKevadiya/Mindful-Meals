$(document).ready(function () {
    //use GET request to figure out which user is logged in
    $.get("/api/user-data").then(function (data) {
        $(".member-name").text(data.email);
    });

    

});