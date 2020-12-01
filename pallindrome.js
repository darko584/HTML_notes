function msgo(){
var x,t,u=0;
x=document.getElementById('s1').value;
t=x.length;
var a=[];
a = x.split("");

var b=[];
var d=t-1;
for(i=d;i<=0;i++){
b.push(a[i]);
}


  if(a==b){
    document.getElementById('s2').value="palli";
  }
  else{
  document.getElementById('s2').value=b;
}
  }
