let sliderImages = document.querySelectorAll('.slide'),
	arrowLeft = document.querySelector("#arrow-left"),
	arrowRight = document.querySelector("#arrow-right"),
	current = 0;

//Clear All Content
function reset() {
	for (let i = 0 ; i < sliderImages.length ; i++) {
		sliderImages[i].style.display = "none";
	}
};

//Init Slider
let startSlide = () => {
	reset();
	sliderImages[0].style.display = "block";
};

startSlide();

//Show Previous
let slideLeft = () => {
	reset();
	sliderImages[current - 1] .style.display = "block";
	current--;
}

//Show Next
let slideRight = () => {
	reset();
	sliderImages[current + 1] .style.display = "block";
	current++;
}

//Left Arrow Click
arrowLeft.addEventListener('click', () => {
	if (current === 0) {
		current = sliderImages.length;
	}
	slideLeft();
})

//Right Arrow Click
arrowRight.addEventListener('click', () => {
	if (current === sliderImages.length - 1) {
		current = -1;
	}
	slideRight();
})


