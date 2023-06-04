function valider() {
  var year = parseInt(document.getElementById("t1").value);
  var month = parseInt(document.getElementById("t2").value);
  var day = parseInt(document.getElementById("t3").value);

  var today = new Date();
  var birthDate = new Date(year, month - 1, day);

  var age = today.getFullYear() - birthDate.getFullYear();
  var age_month = today.getMonth() - birthDate.getMonth();
  var age_day = today.getDay() - birthDate.getDay();

  document.getElementById("demo").innerHTML =
    "Your age is " +
    age +
    " years " +
    " and " +
    age_month +
    " month and " +
    age_day +
    " day";
}
