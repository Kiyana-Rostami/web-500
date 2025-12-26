
const board = document.getElementById("board");
const statusEl = document.getElementById("status");
const scoreEl = document.getElementById("score");
const resetBtn = document.getElementById("reset");

const SIZE = 16;
const COLORS = ["pink", "violet", "turquoise", "gold", "lime", "skyblue","lightcoral"];
let cells = [];
let filled = 0;
let score = 0;

function init() {
    board.innerHTML = "";
    cells = [];
    filled = 0;
    score = 0;

    for (let i = 0; i < SIZE; i++) {
        let type = Math.random() < 0.2 ? "bomb" : "normal";
        cells.push(type);

        let cell = document.createElement("div");
        cell.className = "cell";
        cell.dataset.index = i;
        board.appendChild(cell);

        cell.addEventListener("click", handleClick);
    }
    updateUI();
}

function handleClick(e) {
    const cell = e.currentTarget;
    const index = cell.dataset.index;

    switch (cells[index]) {
        case "bomb":
            cell.style.backgroundColor = "black";
            cell.textContent = "💣";
            score -= 1;
            break;

        case "normal":
            let randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
            cell.style.backgroundColor = randomColor;
            filled++;
            score += 1;
            break;
    }

    updateUI();
}

function updateUI() {
    statusEl.textContent = `${filled}/16 filled`;
    scoreEl.textContent = `Score: ${score}`;
}

resetBtn.addEventListener("click", init);

function handleClick(e) {
    const cell = e.currentTarget;
    const index = cell.dataset.index;

    if (cell.classList.contains("filled")) return;

    switch (cells[index]) {
        case "bomb":
            cell.style.backgroundColor = "black";
            cell.textContent = "💣";
            cell.classList.add("filled");
            score -= 1;
            break;

        case "normal":
            let randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
            cell.style.backgroundColor = randomColor;
            cell.classList.add("filled");
            filled++;
            score += 1;
            break;
    }

    updateUI();
}
