import * as moveset from "./moveset.js";
export {
	showHints,
	removeHints,
	addMoves,
	add,
	addListeners,
	isEmpty,
	isOpponent,
	isCheck,
};

let kingPos = { w: "74", k: "4" };

function move(e) {
	let hint = e.currentTarget;
	let piece = document.getElementById(hint.hintFor).classList[1];
	remove(hint.hintFor, piece);
	add(hint.id, piece);
	removeHints();
	let nextTurn = piece[0] == "w" ? "b" : "w";
	addListeners(nextTurn);
	if (piece[1] == "k")
		kingPos[e.currentTarget.classList[1][0]] = e.currentTarget.id;
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

function addMoves(e) {
	let box = e.currentTarget;
	moveset[box.classList[1][1]](box.classList[1][0], box.id);
}

function add(pos, piece) {
	let box = document.getElementById(pos);
	box.classList.value = ["box"];
	box.classList.add(piece);
}

function remove(pos, piece) {
	let box = document.getElementById(pos);
	box.classList.remove(piece);
}

function addListeners(color) {
	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			let box = document.getElementById(i * 10 + j);
			if (box.classList.length > 1 && box.classList[1][0] == color)
				box.addEventListener("click", addMoves);
			else box.removeEventListener("click", addMoves);
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

function isOut(pos) {
	let elem = document.getElementById(pos);
	if (elem == null) {
		return true;
	}
	return false;
}

function isPiece(pos, piece) {
	let elem = document.getElementById(pos);
	if (elem == null) {
		return false;
	} else if (elem.classList.length > 1) {
		if (elem.classList[1][1] == piece) {
			return true;
		}
	}
	return false;
}

function isCheck(pos, color) {
	let pawnPos = [];
	let diagJumps = [-9, -11, 9, 11];
	let straightJumps = [-1, -10, 1, 10];
	let knightJumps = [-8, -12, -19, -21, 8, 12, 19, 21];
	for (let i = 0; i < diagJumps.length; i++) {
		let checkPos = pos;
		while (true) {
			checkPos = checkPos + diagJumps[i];
			if (isOut(checkPos)) break;
			if (isTeam(checkPos, color)) break;
			if (isOpponent(checkPos, color)) {
				if (isPiece(checkPos, "b") || isPiece(checkPos, "q")) {
					return true;
				} else {
					break;
				}
			}
		}
	}
	for (let i = 0; i < straightJumps.length; i++) {
		let checkPos = pos;
		while (true) {
			checkPos = checkPos + straightJumps[i];
			if (isOut(checkPos)) break;
			if (isTeam(checkPos, color)) break;
			if (isOpponent(checkPos, color)) {
				if (isPiece(checkPos, "r") || isPiece(checkPos, "q")) {
					return true;
				} else {
					break;
				}
			}
		}
	}
	for (let i = 0; i < knightJumps.length; i++) {
		let checkPos = pos + knightJumps[i];
		if (isPiece(checkPos, "n") && isOpponent(checkPos, color)) {
			return true;
		}
	}
	if (color == "w") pawnPos.push(pos - 9, pos - 11);
	else pawnPos.push(pos + 9, pos + 11);
	for (let checkPos of pawnPos) {
		if (isOpponent(checkPos, color) && isPiece(checkPos, "p")) {
			return true;
		}
	}
	return false;
}
