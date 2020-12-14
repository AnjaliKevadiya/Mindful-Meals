$(document).ready(function () {
  // GET request to figure out which user is logged in
  $.get("/api/user_data").then(function (data) {
    Cookies.set("id", data.id);
    $(".member-name").text(data.email);
    // var progressValue = Math.round(data.progress);
    // switch (progressValue) {
    //   case progressValue < 25: 
    //   case progressValue < 50 && progressValue >= 25: 
    //   case progressValue < 75 && progressValue >= 50:
    //   case progressValue <= 100 && progressValue >= 75:
    //   default:  
  });

  // logout on click
  $(".logout").on("click", function () {
    // remove cookie
    Cookies.remove("id");

    $.get("/logout");
  });
});
