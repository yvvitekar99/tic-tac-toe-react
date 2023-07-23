import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Square from "./Square";

function App() {
  const [playerState, setPlayerState] = useState("X");
  const [values, setValues] = useState(["", "", "", "", "", "", "", "", ""]);
  const [winner, setWinner] = useState("");
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const reset = () => {
    setPlayerState("X");
    setValues(["", "", "", "", "", "", "", "", ""]);
    setWinner("");
  };

  const checkwinner = (board) => {
    for (let i = 0; i < winPatterns.length; i++) {
      const [a, b, c] = winPatterns[i];
      if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
      // for (let j = 0; j < 3; j++) {
      //   if (data[winPatterns[i][j]] === "X") {
      //     temp += 10;
      //   } else if (data[winPatterns[i][j]] === "O") {
      //     temp += 12;
      //   } else {
      //     temp += 0;
      //   }
      // }
      // if (temp === 30) {
      //   return "X";
      // }
      // if (temp === 36) {
      //   return "O";
      // }
    }
    return false;
  };
  const handleClick = (index) => {
    if (values[index]) {
      return;
    }
    if (winner) {
      return;
    }

    let temp = [...values];
    if (playerState === "X") {
      temp[index] = "X";
      setPlayerState("O");
    } else {
      setPlayerState("X");
      temp[index] = "O";
    }
    const winnerState = checkwinner(temp);
    if (winnerState) {
      setWinner(winnerState);
    }
    setValues(temp);
  };
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          height: "604px",
          width: "604px",
          border: "1px solid black",
        }}
      >
        {values.map((ele, idx) => {
          return <Square handleClick={handleClick} idx={idx} value={ele} />;
        })}
      </div>
      <div
        style={{
          fontSize: "32px",
          marginLeft: "4rem",
          display: "flex",
          alignItems: "center",
          height: "40vh",
        }}
      >
        {winner ? `Winner is :${winner}` : `Next Move : ${playerState}`}
      </div>
      <div style={{ position: "fixed", right: 50, top: 50 }}>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
