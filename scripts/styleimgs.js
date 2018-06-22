		var modal = document.getElementById('styleImg');	
		var img = document.getElementById('styles');
		var modalImg = document.getElementById("styler");
		var captionText = document.getElementById("captioner");
		img.onclick = function()
		{
			modal.style.display = "block";
			modalImg.src = this.src;
			captionText.innerHTML = this.alt;
		}
		var span = document.getElementsByClassName("closer")[0];
		span.onclick = function() 
		{ 
			modal.style.display = "none";
		}
		var modal = document.getElementById('nostyleImg');	
		var img = document.getElementById('nostyles');
		var modalImg = document.getElementById("nostyler");
		var captionText = document.getElementById("captioners");
		img.onclick = function()
		{
			modal.style.display = "block";
			modalImg.src = this.src;
			captionText.innerHTML = this.alt;
		}
		var span = document.getElementsByClassName("closers")[0];
		span.onclick = function() 
		{ 
			modal.style.display = "none";
		}
		var span = document.getElementsByClassName("closer")[0];
		span.onclick = function() 
		{ 
			modal.style.display = "none";
		}
		var modal = document.getElementById('cssstyleImg');	
		var img = document.getElementById('cssstyles');
		var modalImg = document.getElementById("cssstyler");
		var captionText = document.getElementById("capt");
		img.onclick = function()
		{
			modal.style.display = "block";
			modalImg.src = this.src;
			captionText.innerHTML = this.alt;
		}
		var span = document.getElementsByClassName("closeit")[0];
		span.onclick = function() 
		{ 
			modal.style.display = "none";
		}