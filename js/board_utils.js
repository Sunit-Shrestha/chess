import * as moveset from "./moveset.js";
export { moves, add, remove, addListeners };

function moves(e) {
	let box = e.currentTarget;
	moveset[box.piece[1]](box.piece[0], box.id);
}

function add(pos, piece) {
	let box = document.getElementById(pos);
	box.classList.value = ["box"];
	box.classList.add(piece);
	box.piece = piece;
}

function remove(pos, piece) {
	let box = document.getElementById(pos);
	box.classList.remove(piece);
	box.piece = "";
}

function addListeners(color) {
	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			let box = document.getElementById(i * 10 + j);
			box.removeEventListener("click", moves);
		}
	}
	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			let box = document.getElementById(i * 10 + j);
			if (box.piece[0] == color) {
				box.addEventListener("click", moves);
			}
		}
	}
}
