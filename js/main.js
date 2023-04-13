const pieces = ["r", "n", "b", "q", "k", "b", "n", "r"];
const board = document.querySelector("#board");

for (let i = 0; i < 8; i++) {
	for (let j = 0; j < 8; j++) {
		let pos = `${i}${j}`;
		let box = document.createElement("div");
		box.id = pos;
		box.className = "box";
		board.append(box);
	}
}

for (let i = 0; i < 8; i++) {
	document.getElementById(`0${i}`).classList.add(`b${pieces[i]}`);
	document.getElementById(`1${i}`).classList.add(`bp`);
	document.getElementById(`6${i}`).classList.add(`w${pieces[i]}`);
	document.getElementById(`7${i}`).classList.add(`wp`);
}
