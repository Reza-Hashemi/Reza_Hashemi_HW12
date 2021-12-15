$('#login').submit(function (e) { 
  e.preventDefault();
  
  const data = {
    username: $('#username').val(),
    password: $('#password').val()
  };
  console.log(data);

  $.post("http://localhost:2021/authentication/login", data,
    function (data, textStatus, jqXHR) {
      console.log(data);
      
      
    }
    
    
  );
  
});