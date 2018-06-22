	var modal = document.getElementById('scriptImg');		
		var img = document.getElementById('script');
		var modalImg = document.getElementById("scripts");
		var captionText = document.getElementById("captioned");
		img.onclick = function()
		{
			modal.style.display = "block";
			modalImg.src = this.src;
			captionText.innerHTML = this.alt;
		}
		var span = document.getElementsByClassName("closed")[0];
		span.onclick = function() 
		{ 
			modal.style.display = "none";
		}
		var modal = document.getElementById('lakeimage');	
		var img = document.getElementById('lakes');
		var modalImg = document.getElementById("lakeside");
		var captionText = document.getElementById("caption");
		img.onclick = function()
		{
			modal.style.display = "block";
			modalImg.src = this.src;
			captionText.innerHTML = this.alt;
		}
		var span = document.getElementsByClassName("close")[0];
		span.onclick = function() 
		{ 
			modal.style.display = "none";
		}
		
		