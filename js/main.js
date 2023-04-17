import { add, addListeners } from "./board_utils.js";

const pieces = ["r", "n", "b", "q", "k", "b", "n", "r"];
const board = document.querySelector("#board");

for (let i = 0; i < 8; i++) {
	for (let j = 0; j < 8; j++) {
		let pos = i * 10 + j;
		let box = document.createElement("div");
		box.id = pos;
		box.className = "box";
		box.piece = "";
		board.append(box);
	}
}

for (let i = 0; i < 8; i++) {
	add(i, `b${pieces[i]}`);
	add(10 + i, "bp");
	add(70 + i, `w${pieces[i]}`);
	add(60 + i, "wp");
}

addListeners("w");
