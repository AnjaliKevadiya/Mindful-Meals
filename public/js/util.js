$(document).ready(function () {
  // GET request to figure out which user is logged in
  $.get("/api/user_data").then(function (data) {
    Cookies.set("id", data.id);
    $(".member-name").text(data.email);
  });

  // logout on click
  $(".logout").on("click", function () {
    // remove cookie
    Cookies.remove("id");

    $.get("/logout");
  });
});
