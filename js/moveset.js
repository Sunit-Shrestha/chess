/*
p -> pawn,
n -> knight,
b -> bishop,
r -> rook,
q -> queen,
k -> king
*/

import {
	add,
	remove,
	addListeners,
	isEmpty,
	isOpponent,
} from "./board_utils.js";
export { p, n, b, r, q, k };

function move(e) {
	let hint = e.currentTarget;
	let piece = document.getElementById(hint.hintFor).piece;
	remove(hint.hintFor, piece);
	add(hint.id, piece);
	removeHints();
	let nextTurn = piece[0] == "w" ? "b" : "w";
	addListeners(nextTurn);
}

function showHints(hints, hintFor) {
	for (let i = 0; i < hints.length; i++) {
		let hint = document.getElementById(hints[i]);
		hint.classList.add("hint");
		hint.hintFor = hintFor;
		hint.addEventListener("click", move);
	}
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

function p(color, posString) {
	removeHints();
	let hints = [];
	let pos = Number(posString);
	if (color == "w") {
		if (isEmpty(pos - 10)) {
			hints.push(pos - 10);
			if (posString[0] == 6 && isEmpty(pos - 20)) {
				hints.push(pos - 20);
			}
		}
		if (!isEmpty(pos - 11) && isOpponent(pos - 11, color)) {
			hints.push(pos - 11);
		}
		if (!isEmpty(pos - 9) && isOpponent(pos - 9, color)) {
			hints.push(pos - 9);
		}
	} else {
		if (isEmpty(pos + 10)) {
			hints.push(pos + 10);
			if (posString[0] == 1 && isEmpty(pos + 20)) {
				hints.push(pos + 20);
			}
		}
		if (!isEmpty(pos + 11) && isOpponent(pos + 11, color)) {
			hints.push(pos + 11);
		}
		if (!isEmpty(pos + 9) && isOpponent(pos + 9, color)) {
			hints.push(pos + 9);
		}
	}
	showHints(hints, pos);
}

function n(color, posString) {
	let hints = [];
	let jumps = [-8, -12, -19, -21, 8, 12, 19, 21];
	let pos = Number(posString);
	for (let i = 0; i < jumps.length; i++) {
		let hintPos = pos + jumps[i];
		if (isEmpty(hintPos) || isOpponent(hintPos, color)) {
			hints.push(hintPos);
		}
	}
	showHints(hints, pos);
}

function b(color, posString) {
	let hints = [];
	let jumps = [-9, -11, 9, 11];
	let pos = Number(posString);
	for (let i = 0; i < jumps.length; i++) {
		let hintPos = pos;
		while (true) {
			hintPos = hintPos + jumps[i];
			if (isEmpty(hintPos)) {
				hints.push(hintPos);
			} else if (isOpponent(hintPos, color)) {
				hints.push(hintPos);
				break;
			} else {
				break;
			}
		}
	}
	showHints(hints, pos);
}

function r(color, posString) {
	let hints = [];
	let jumps = [-1, -10, 1, 10];
	let pos = Number(posString);
	for (let i = 0; i < jumps.length; i++) {
		let hintPos = pos;
		while (true) {
			hintPos = hintPos + jumps[i];
			if (isEmpty(hintPos)) {
				hints.push(hintPos);
			} else if (isOpponent(hintPos, color)) {
				hints.push(hintPos);
				break;
			} else {
				break;
			}
		}
	}
	showHints(hints, pos);
}

function q(color, posString) {
	let hints = [];
	let jumps = [-1, -9, -10, -11, 1, 9, 10, 11];
	let pos = Number(posString);
	for (let i = 0; i < jumps.length; i++) {
		let hintPos = pos;
		while (true) {
			hintPos = hintPos + jumps[i];
			if (isEmpty(hintPos)) {
				hints.push(hintPos);
			} else if (isOpponent(hintPos, color)) {
				hints.push(hintPos);
				break;
			} else {
				break;
			}
		}
	}
	showHints(hints, pos);
}

function k(color, posString) {
	let hints = [];
	let jumps = [-1, -9, -10, -11, 1, 9, 10, 11];
	let pos = Number(posString);
	for (let i = 0; i < jumps.length; i++) {
		let hintPos = pos + jumps[i];
		if (isEmpty(hintPos) || isOpponent(hintPos, color)) {
			hints.push(hintPos);
		}
	}
	console.log(hints);
	showHints(hints, pos);
}
