function valider() {
  var year = parseInt(document.getElementById("t1").value);
  var month = parseInt(document.getElementById("t2").value) - 1;
  var day = parseInt(document.getElementById("t3").value);

  var today = new Date();
  var birthDate = new Date(year, month, day);

  var age = today.getFullYear() - birthDate.getFullYear();
  var age_month = today.getMonth() - birthDate.getMonth();
  var age_day = today.getDate() - birthDate.getDate();

  if (age_month < 0 || (age_month === 0 && age_day < 0)) {
    age--;
  }

  document.getElementById("demo").innerHTML =
    "Your age is " +
    age +
    " years, " +
    (age_month < 0 ? 12 + age_month : age_month) +
    " months, and " +
    (age_day < 0 ? 31 + age_day : age_day) +
    " days.";
}
