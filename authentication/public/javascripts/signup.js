$('#signup').submit(function (e) { 
  e.preventDefault();
  
  
  const data = {
    username: $('#username').val(),
    password: $('#password').val(),
    email: $('#email').val(),
    gender: $("#selector option:selected ").text(),
  };
  console.log(data);
  $.post("http://localhost:2021/authentication/signup", data,
    function (data, textStatus, jqXHR) {
      console.log(data);
    },
    
  );
});