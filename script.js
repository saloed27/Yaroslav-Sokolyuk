var slideIndex=1;
showSlides(slideIndex);

function currentSlide(n){
	showSlides(slideIndex = n);
}

function showSlides(n){
	var i;
  var slides = document.getElementsByClassName("slider__slide");
	var dots = document.getElementsByClassName("dot");

	if(n > slides.length){
		slideIndex = 1;
	}
	if(n < 1){
		slideIndex = slides.length;
	}
	for(i=0; i<slides.length; i++){
		slides[i].style.display = "none";
	}
	for(i=0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace("active","");
	}
	 slides[slideIndex-1].style.display = "block";
	 dots[slideIndex-1].className+= " active";
}

var slideIndex_2=1;
showSlides_2(slideIndex_2);

function currentSlide_2(m){
	showSlides_2(slideIndex_2 = m);
}
function showSlides_2(m){
	var i;
  var slides_2 = document.getElementsByClassName("slider__slide_2");
	var dots_2 = document.getElementsByClassName("dot_2");

	if(m > slides_2.length){
		slideIndex_2 = 1;
	}
	if(m < 1){
		slideIndex_2 = slides_2.length;
	}
	for(i=0; i<slides_2.length; i++){
		slides_2[i].style.display = "none";
	}
	for(i=0; i < dots_2.length; i++){
		dots_2[i].className = dots_2[i].className.replace("active","");
	}
	 slides_2[slideIndex_2-1].style.display = "block";
	 dots_2[slideIndex_2-1].className+= " active";
}

var slideIndex_3=1;
showSlides_3(slideIndex_3);

function currentSlide_3(v){
	showSlides_3(slideIndex_3 = v);
}
function showSlides_3(v){
	var i;
  var slides_3 = document.getElementsByClassName("slider__slide_3");

	if(v > slides_3.length){
		slideIndex_3 = 1;
	}
	if(v < 1){
		slideIndex_3 = slides_3.length;
	}
	for(i=0; i<slides_3.length; i++){
		slides_3[i].style.display = "none";
	}

	 slides_3[slideIndex_3-1].style.display = "block";
}
