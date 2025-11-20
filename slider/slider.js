const slides = document.getElementById("slides");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0; 
const total = slides.children.length;

function showSlide() {
  slides.style.transform = `translateX(-${index * 400}px)`; 
}

// next
nextBtn.addEventListener("click", () => {
  index++;
  if (index >= total) index = 0; 
  showSlide();
});


prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) index = total - 1; 
  showSlide();
});
