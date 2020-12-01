var x;
function msg(){
x=parseInt(document.getElementById('n1').value);
if(x<18){
  document.getElementById('n2').value="i";
}
else{
  document.getElementById('n2').value="e";
}
}
