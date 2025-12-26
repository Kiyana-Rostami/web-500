document.addEventListener("DOMContentLoaded", () => {
  const arr = [1,2,3,4,5];
  const display = document.getElementById("arrayDisplay");
  const shuffleBtn = document.getElementById("shuffleBtn");

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  shuffleBtn.addEventListener("click", () => {
    const shuffled = shuffle([...arr]);
    display.textContent = `[${shuffled.join(",")}]`;
  });
});
