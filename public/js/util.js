$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    Cookies.set("id", data.id);
    $(".member-name").text(data.email);
  });

  //
  $(".logout").on("click", function () {
    // remove cookie
    Cookies.remove("id");

    $.get("/logout");
  });
});
