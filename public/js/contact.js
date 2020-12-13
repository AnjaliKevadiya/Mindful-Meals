$(document).ready(function () {
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.email);
  });

  // Getting references to our form and input
  var contactForm = $("form.contact");
  var inputName = $("input#inputName");
  var inputEmail = $("input#inputEmail");
  var inputPhoneNumber = $("input#inputPhoneNumber");
  var textareaMessage = $("textarea#textareaMessage");

  // When the send button is clicked, we validate the name, email, message are not blank
  contactForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      name: inputName.val().trim(),
      email: inputEmail.val().trim(),
      phonenumber: inputPhoneNumber.val().trim(),
      message: textareaMessage.val().trim(),
    };

    if (!userData.name || !userData.email || !userData.message) {
      return;
    }
    // If we have an name, email and message run the signUpUser function
    addContact(userData);
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function addContact(userData) {
    $.post("/api/contact", userData)
      .then(function (data) {
        inputName.val("");
        inputEmail.val("");
        inputPhoneNumber.val("");
        textareaMessage.val("");

        //show them alert or label or something to let user know that they added contact
      })
      .catch(handleErr);
  }

  function handleErr(err) {
    $("#alert .msg").text(JSON.stringify(err.responseJSON));
    $("#alert").fadeIn(500);
  }
});
