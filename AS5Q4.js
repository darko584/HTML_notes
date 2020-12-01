var x,y,z,t;
function suma(){
  x=parseInt(document.getElementById('n1').value);
  y=parseInt(document.getElementById('n2').value);
  z=parseInt(document.getElementById('n3').value);

   t=x+y+z;
  document.getElementById('s2').value= t;
  document.getElementById('n11').innerHTML= x;
  document.getElementById('n22').innerHTML= t;
}
