import React from "react";
import { useEffect, useState } from "react";
import Overlay from "./components/Overlay";
import "./App.css";
import { pokemonData } from "./components/pokemonData";
import Header from "./components/Header";

const App = () => {
  const [randomPokemon, setRandomPokemon] = useState(pokemonData);
  const [chosenPokemon, setChosenPokemon] = useState([]);
  const [activateOverlay, setActivateOverlay] = useState(false);
  const [score, setScore] = useState(0);

  const shuffleArray = (array) => {
    let currentIndex = array.length;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  };

  const resetGame = () => {
    setScore(0);
    setChosenPokemon([]);
    setActivateOverlay(false);
  };

  const handleClick = (id) => {
    if (chosenPokemon.includes(randomPokemon[id].text)) {
      setActivateOverlay(true);
    } else {
      setChosenPokemon([...chosenPokemon, randomPokemon[id].text]);
      setScore(score + 1);
    }

    if (score === randomPokemon.length) {
      setActivateOverlay(true);
    }

    // Shuffle cards
    setRandomPokemon((prevState) => {
      const newPokemon = [...prevState];
      shuffleArray(newPokemon);
      return newPokemon;
    });
  };

  useEffect(() => {
    if (chosenPokemon.length === randomPokemon.length) {
      setActivateOverlay(true);
    }
  }, [chosenPokemon]);

  return (
    <div id="main">
      {activateOverlay && <Overlay score={score} resetGame={resetGame} />}
      <Header score={score} />
      <div id="body">
        {randomPokemon.map((item, index) => {
          return (
            <div
              className="pokemon-card"
              id={index}
              key={index}
              onClick={() => {
                handleClick(index);
              }}
            >
              <img src={item.img} alt={item.text} />
              {item.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
