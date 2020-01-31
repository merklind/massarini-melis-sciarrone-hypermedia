$(document).ready(function() {
  var form = $("#signUpForm");
  form.submit(function(event) {
    event.preventDefault();
    var url = "/user/register";
    var data = {};
    form.serializeArray().forEach(item => {
      data[item.name] = item.value;
    });

    $.ajax({
      method: "POST",
      url: url,
      data: JSON.stringify(data),
      dataType: "json",
      contentType: "application/json",
      success: function(data) {
        window.location.href = "/";
      }
    });
  });
});