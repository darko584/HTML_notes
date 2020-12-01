function msg(){
  var x;
  x=parseInt(document.getElementById('fo').value);
  if(x%2==0){
    document.getElementById('fo').value="even";
  } else{
    document.getElementById('fo').value="odd";
  }
}
