import { FC } from "react";
import { Square } from "./Square";
import { Squares } from "./types";

const calculateDraw = (squares: Squares) => {
  return (
    squares.every((square) => square !== null) && !calculateWinner(squares)
  );
};

const calculateWinner = (squares: Squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

type BoardProps = {
  xIsNext: boolean;
  squares: Squares;
  onPlay: (nextSquares: Squares) => void;
};
export const Board: FC<BoardProps> = ({ xIsNext, squares, onPlay }) => {
  const handleClick = (i: number) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "次のプレイヤー: " + (xIsNext ? "X" : "O");
  }
  const isDraw = calculateDraw(squares);
  if (isDraw) {
    status = "Draw!";
  }
  return (
    <>
      <div className="status">{status}</div>
      {[...Array(3).keys()].map((i) => (
        <div className="board-row" key={`board-row-${i}`}>
          {[...Array(3).keys()].map((j) => {
            const index = i * 3 + j;
            const value = squares[index];
            const onSquareClick = () => handleClick(index);
            return (
              <Square
                key={`square-${index}`}
                testId={index}
                value={value}
                onSquareClick={onSquareClick}
              />
            );
          })}
        </div>
      ))}
    </>
  );
};
