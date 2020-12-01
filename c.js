var x,y;
function three(){
var temp;

x=parseInt(document.getElementById('one').value);
y=parseInt(document.getElementById('two').value);
temp=x;
x=y;
y=temp;
 document.getElementById('three').innerHTML=x;
 document.getElementById('four').innerHTML=y;
 document.getElementById('one').value=x;
 document.getElementById('two').value=y;
}
//function four(){
  //document.getElementById('')
//}


//var x = parseInt(document.getElementById("").value);
/*function calc(){
	var x=parseInt(document.getElementById("num1").value);
	var y=parseInt(document.getElementById("num2").value);
	document.getElementById("result").innerHTML=x+y;
}*/
/*<body>
	<h1>Result</h1>
	<p id="result"></p>
	<form>
		Number 1: <input type="number" name="" id="num1" >
		Number 2: <input type="number" name="" id="num2">
		<button type="button" onclick="calc()">Calculate</button>
	</form>
</body>*/
