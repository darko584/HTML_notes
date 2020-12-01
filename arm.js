function calc(){
  var x=parseInt(document.getElementById('n1').value);
  var n,temp,res=0;
temp=x;
 while(x>0) {
   var rem = x%10;

   res += (rem*rem*rem);
   x=parseInt(x/10);
 }
 if(temp==res){
   document.getElementById('n2').value="armstrong";
 }
 else {
   document.getElementById('n2').value="not armstrong";
 }

}
