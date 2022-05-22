import React from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
	const winnerLines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	const [deskData, setDeskData] = useState({
		count: 0,
		squares: Array(9).fill(null),
	});

	const handleClick = (e) => {
		let currentState = deskData;
		let index = e.target.getAttribute("data");
		if (currentState.squares[index] === null) {
			let step = currentState.count % 2 === 0 ? "X" : "O";
			currentState.squares[index] = step;

			for (let i = 0; i < winnerLines.length; i++) {
				let winnerLine = winnerLines[i];
				// winnerLine[0] - число от 0 до 8
				if (
					currentState.squares[winnerLine[0]] === step &&
					currentState.squares[winnerLine[1]] === step &&
					currentState.squares[winnerLine[2]] === step
				) {
					setDeskData({
						squares: currentState.squares,
						count: currentState.count,
					});

					alert(`${step} wins!`);

					setTimeout(() => {
						setDeskData({
							count: 0,
							squares: Array(9).fill(null),
						});
						return;
					}, 1000);
				}
			}
			currentState.count += 1;
			setDeskData({
				squares: currentState.squares,
				count: currentState.count,
			});
		}
	};

	return (
		<>
			<h1 style={{ textAlign: 'center' }}>Tic-Tac-Toe Game</h1>
			<div className="desk">
				{deskData.squares.map((deskItem, index) => {
					return (
						<div
							onClick={handleClick}
							key={index}
							data={index}
							className="desk__item"
						>
							{deskItem}
						</div>
					);
				})}
			</div>
		</>
	);
};

export default App;
