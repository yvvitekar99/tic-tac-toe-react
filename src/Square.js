import React from "react";

const Square = ({ style, idx, handleClick, value = "" }) => {
  const leftCol = [0, 3, 6];
  const rightCol = [2, 5, 8];
  const middleRow = [3, 4, 5];
  return (
    <div
      onClick={() => handleClick(idx)}
      style={{
        height: "200px",
        width: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "128px",
        fontWeight: 600,
        borderBottom: middleRow.includes(idx) ? "1px solid black" : "none",
        borderTop: middleRow.includes(idx) ? "1px solid black" : "none",
        borderLeft: leftCol.includes(idx) ? "none" : "1px solid black",
        borderRight: rightCol.includes(idx) ? "none" : "1px solid black",
      }}
    >
      {value}
    </div>
  );
};

export default Square;
