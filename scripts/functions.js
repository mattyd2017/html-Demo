function add()
	{
		var a,b,c;
		a = Number(document.getElementById("first").value);
		b = Number(document.getElementById("second").value);
		c = a + b;
		
		alert(c);
		document.getElementById("first").value = "";
		document.getElementById("second").value = "";
	}
function showInput() 
	{
        document.getElementById('display').innerHTML = document.getElementById("user_input").value;
		document.getElementById('display').value = "";
		
	}