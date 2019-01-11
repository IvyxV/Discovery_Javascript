function superCalcul(pointure, date)
{
  result = ((((parseInt(pointure) * 2 + 5) * 50) - parseInt(date)) + 1766);
  alert(result);
}

document.querySelector("#submit").onclick = function()
{
  var pointure = document.querySelector("#shoeSize").value;
  var date = document.querySelector("#yearOfBirth").value;
  superCalcul(pointure, date);
}
