import React from "react";

const Header = ({ score }) => {
  return (
    <header>
      <img src="./images/pokemon_logo.png" alt="Pokemon Logo" />
      <h1>Memory Game</h1>
      <h2>Score: {score}</h2>
    </header>
  );
};

export default Header;
