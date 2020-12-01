function msg(){
  var x,temp,sum=0,r;
  x=parseInt(document.getElementById('fo1').value);
  temp=x;
  while(x!=0){
    r=x%10;
    sum=sum*10+r;
    x=parseInt(x/10);
  }
  if(sum==temp){
    document.getElementById('fo1').value="yes palli";

  }
  else {
    document.getElementById("fo1").value="not palli";
  }
}
