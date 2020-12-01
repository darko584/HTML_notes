function rev(){
  var x,sum=0,r,temp;
  //var a = [10];
x=parseInt(document.getElementById('n1').value);
temp=x;
while(temp!=0){
  r=temp % 10;
sum=sum*10+r;
temp=parseInt(temp/10);
}
document.getElementById('n2').value=sum;
}
