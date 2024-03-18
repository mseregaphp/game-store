import React from "react";
import "./game-page.css";
import { useSelector } from "react-redux";
import { GameCover } from "../../components/game-cover/game-cover";
import { GameGenre } from "../../components/game-genre/game-genre";
import { GameBuy } from "../../components/game-buy/game-buy";

export const GamePage = () => {
  const game = useSelector((state) => state.games.currentGame);

  if (!game) return null;
  return (
    <div className="GamePage">
      <h1 className="game-page__title">{game.title}</h1>
      <div className="game-page__content">
        <div className="game-page__left">
          <iframe
            src={game.video}
            width="90%"
            height="400px"
            title="Youtube Video Player"
            frameBorder="0"
          ></iframe>
        </div>
        <div className="game-page__right">
          <GameCover image={game.image} />
          <p>{game.description}</p>
          <p className="secondary-text">Популярные метки этого продукта: </p>
          {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
          <div className="game-page__buy-game">
            <GameBuy game={game} />
          </div>
        </div>
      </div>
    </div>
  );
};
