/*
p -> pawn,
n -> knight,
b -> bishop,
r -> rook,
q -> queen,
k -> king
*/

import { add, remove, addListeners } from "./board_utils.js";
export { p, b, r, q, k };

function move(e) {
	let hint = e.currentTarget;
	let piece = document.getElementById(hint.hintFor).piece;
	remove(hint.hintFor, piece);
	add(hint.id, piece);
	removeHints();
	let nextTurn = piece[0] == "w" ? "b" : "w";
	addListeners(nextTurn);
}

function removeHints() {
	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			let box = document.getElementById(i * 10 + j);
			box.hintFor = "";
			box.classList.remove("hint");
			box.removeEventListener("click", move);
		}
	}
}

function p(color, pos) {
	removeHints();
	let hints = [];
	if (color == "w") {
		hints.push(Number(pos) - 10);
		if (Number(pos[0]) == 6) {
			hints.push(Number(pos) - 20);
		}
	} else {
		hints.push(Number(pos) + 10);
		if (Number(pos[0]) == 1) {
			hints.push(Number(pos) + 20);
		}
	}
	console.log(hints);
	for (let i = 0; i < hints.length; i++) {
		let hint = document.getElementById(hints[i]);
		hint.classList.add("hint");
		hint.hintFor = pos;
		hint.addEventListener("click", move);
	}
}

function n(color, pos) {}

function b(color, pos) {}

function r(color, pos) {}

function q(color, pos) {}

function k(color, pos) {}
