import * as moveset from "./moveset.js";
export { addMoves, add, remove, addListeners, isEmpty, isTeam, isOpponent };

function addMoves(e) {
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
			box.removeEventListener("click", addMoves);
		}
	}
	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			let box = document.getElementById(i * 10 + j);
			if (box.piece[0] == color) {
				box.addEventListener("click", addMoves);
			}
		}
	}
}

function isEmpty(pos) {
	let elem = document.getElementById(pos);
	if (elem == null) {
		return false;
	}
	if (elem.classList.length > 1) {
		return false;
	} else {
		return true;
	}
}

function isTeam(pos, color) {
	let elem = document.getElementById(pos);
	if (elem == null) {
		return false;
	} else if (elem.classList.length == 1) {
		return false;
	} else {
		return elem.classList[1][0] == color;
	}
}

function isOpponent(pos, color) {
	let elem = document.getElementById(pos);
	if (elem == null) {
		return false;
	} else if (elem.classList.length == 1) {
		return false;
	} else {
		return !(elem.classList[1][0] == color);
	}
}
