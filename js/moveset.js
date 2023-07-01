import {
	removeHints,
	showHints,
	isEmpty,
	isOpponent,
	isCheck,
} from "./board_utils.js";
export { p, n, b, r, q, k };

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
	removeHints();
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
	removeHints();
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
	removeHints();
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
	removeHints();
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
	removeHints();
	let hints = [];
	let jumps = [-1, -9, -10, -11, 1, 9, 10, 11];
	let pos = Number(posString);
	for (let i = 0; i < jumps.length; i++) {
		let hintPos = pos + jumps[i];
		if (
			(isOpponent(hintPos, color) || isEmpty(hintPos)) &&
			!isCheck(hintPos, color)
		)
			hints.push(hintPos);
	}
	showHints(hints, pos);
}
