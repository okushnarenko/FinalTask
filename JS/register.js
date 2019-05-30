var input_field_1 = document.getElementById("password");
var input_field_2 = document.getElementById("password2");

function validate_passwords(){

  if(input_field_1.value == input_field_2.value){   
    //alert("Passwords matched!");
  }else{
    alert("Passwords do not match!");
  };
  return false;
};