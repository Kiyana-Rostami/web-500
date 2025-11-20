
function changeImage(src, thumb) {
  const mainImage = document.getElementById("mainImage");
  mainImage.src = src;

 
  const thumbs = document.querySelectorAll(".thumbs img");
  thumbs.forEach(function(t) {
    t.classList.remove("active");
  });

  thumb.classList.add("active");
}
const thumbs = document.querySelectorAll(".thumbs img");
thumbs.forEach(function(thumb) {
  thumb.addEventListener("click", function() {
    const bigSrc = this.src.replace("/80/60", "/400/250");
    changeImage(bigSrc, this);
  });
});
