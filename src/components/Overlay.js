import React from "react";
import { pokemonData } from "./pokemonData";

const Overlay = ({ score, resetGame }) => {
  return (
    <>
      {score === pokemonData.length ? (
        <div id="overlay" onClick={resetGame}>
          <div className="modal">
            Congratulations You Won!
            <p>Click Anywhere to Exit</p>
          </div>
        </div>
      ) : (
        <div id="overlay" onClick={resetGame}>
          <div className="modal">
            Game Over! Try Again!
            <p>Click Anywhere to Exit</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Overlay;
