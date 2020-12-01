function grades() {
  var myTab = document.getElementById('tb');
  //document.getElementById('pp').innerHTML=myTab.rows.length;
  var l = myTab.rows.length;
  var x = [l]; //declaring array
  for (var i = 1; i < myTab.rows.length; i++) {
    x.push(document.getElementById('tb').rows[i].cells
      .namedItem("rr").innerHTML);
    //  x.push(document.getElementById('tb').rows[i].cells.namedItem("rr").innerHTML);
  }
  for (var i = 0; i < myTab.rows.length; i++) {
    if (x[i] >= 80) {
      document.getElementById('tb').rows[i].cells.namedItem("n1").innerHTML = "Distinction";
    } else if (x[i] >= 60 && x[i] <= 79) {
      document.getElementById('tb').rows[i].cells.namedItem("n1").innerHTML = "First division";
    } else if (x[i] >= 45 && x[i] <= 59) {
      document.getElementById('tb').rows[i].cells.namedItem("n1").innerHTML = "Second disvision";
    } else if (x[i] >= 32 && x[i] <= 44) {
      document.getElementById('tb').rows[i].cells.namedItem("n1").innerHTML = "Third disvision";
    } else {
      document.getElementById('tb').rows[i].cells.namedItem("n1").innerHTML = "fails";
    }
  }
}
