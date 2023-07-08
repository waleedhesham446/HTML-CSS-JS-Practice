var parent = document.querySelector(".modal-parent"),
	btn = document.querySelector("button"),
	X = document.querySelector(".X"),
	section = document.querySelector("section");

btn.addEventListener('click', function() {
	parent.style.display = "block";
	section.style.filter = "blur(5px)";
})
	
X.addEventListener("click", () => {
	parent.style.display = "none";
	section.style.filter = "blur(0px)";	
})

parent.addEventListener("click", (e) => {
	if (e.target.className === "modal-parent") {		//e.target => whatever we click
		parent.style.display = "none";
		section.style.filter = "blur(0px)";			
	}
})