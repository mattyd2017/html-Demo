		var modal = document.getElementById('bernImg');	
		var img = document.getElementById('berners');
		var modalImg = document.getElementById("berner");
		var captionText = document.getElementById("captions");
		img.onclick = function()
		{
			modal.style.display = "block";
			modalImg.src = this.src;
			captionText.innerHTML = this.alt;
		}
		var span = document.getElementsByClassName("closes")[0];
		span.onclick = function() 
		{ 
			modal.style.display = "none";
		}
		