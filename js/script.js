/*
let text = '{"Images":[' +
	'{"URL":"img/01.jpg","Caption":"Caption 1"},'+
	'{"URL":"img/02.jpg","Caption":"Caption 2"},'+
	'{"URL":"img/03.jpg","Caption":"Caption 3"},'+
	'{"URL":"img/04.jpg","Caption":"Caption 4"},'+
	'{"URL":"img/05.jpg","Caption":"Caption 5"},'+
	'{"URL":"img/06.jpg","Caption":"Caption 6"},'+
	'{"URL":"img/07.jpg","Caption":"Caption 7"},'+
	'{"URL":"img/08.jpg","Caption":"Caption 8"},'+
	'{"URL":"img/09.jpg","Caption":"Caption 9"}'+
']}';
*/
fetch('JSON/images.json').then(function(response) {
  response.json().then(function(images) {
		for(var i = 0; i<images.Images.length; i++){
			var gallery = document.getElementById('gallery');
			var divImg = document.createElement('div');
			var img = document.createElement('img');
			var caption = document.createElement('h4');
			var link = document.createElement('a');
			divImg.class="col mt-3";
			link.href=images.Images[i].URL;
			img.class="img-responsive";
			img.style="max-width:100%";
			img.alt=images.Images[i].Caption;
			img.src=images.Images[i].URL;
			caption.innerText=images.Images[i].Caption;
			caption.style="text-align:center";
			link.appendChild(img);
			divImg.appendChild(link);
			divImg.appendChild(caption);
			gallery.appendChild(divImg);

		}
    
  });
});

