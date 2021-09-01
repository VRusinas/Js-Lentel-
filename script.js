
function myCreateFunction() {
    if(inputValue_name.value.length > 0 && inputValue_srname.value.length > 0 && inputValue_age.value > 0)
  {
  var ilgis = document.getElementById("myTable").rows.length;
  var table = document.getElementById("myTable");
  var row = table.insertRow(ilgis);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = inputValue_name.value;
  cell2.innerHTML = inputValue_srname.value;
  cell3.innerHTML = inputValue_age.value;
  inputValue_name.value = "";
  inputValue_srname.value = "";
  inputValue_age.value = "";
}
else {
  alert("Užpildykite visus laukelius teisingai");
  }
}
function delete_first() {
var x = document.getElementById("myTable").rows.length;
if(x > 1)
{document.getElementById("myTable").deleteRow(1);}
else{alert("Viskas ištrinta");}
}
function delete_last() {
  var x = document.getElementById("myTable").rows.length;
  if(x > 1)
  {document.getElementById("myTable").deleteRow(x-1);}
  else{alert("Viskas ištrinta");}
}
