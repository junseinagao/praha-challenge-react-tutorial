import { FC } from "react";

type SquareProps = {
  value: string;
  onSquareClick: () => void;
  testId: number;
};
export const Square: FC<SquareProps> = ({ value, onSquareClick, testId }) => {
  return (
    <button
      data-test={`square-button-${testId}`}
      className="square"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};
