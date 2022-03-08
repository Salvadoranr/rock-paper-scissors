import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import IconButton from "../components/IconButton";
import generateSelection from "../utils/generateSelection";
import { getLocalStorage, setLocalStorage } from "../utils/manageLocalStorage";
import handleMessage from "../utils/handleMessage";

const Game = ({ player, options, lvl }) => {
  const [firstSelection, setFirstSelection] = useState("");
  const [secondSelection, setSecondSelection] = useState("");
  const [message, setMessage] = useState("");
  const [winning, setWin] = useState(player.score);
  const [winningLvl2, setWinsLvl] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const optionsList = Object.keys(options).map((el) => options[el]);

  function handleSelection(ev) {
    const { name } = ev.currentTarget;
    setFirstSelection(name);
    setSecondSelection("...");
    setDisabled(true);
    triggerBotSelection(name);
  }

  function triggerBotSelection(playerSelection) {
    setTimeout(() => {
      const botSelection = generateSelection(options);
      setSecondSelection(botSelection);
      if(lvl===1){
        setMessage(
          handleMessage(playerSelection, botSelection, options, winning, setWin)
        );
      }else{
        setMessage(
          handleMessage(playerSelection, botSelection, options, winningLvl2, setWinsLvl)
        );
      }
      
      setDisabled(false);
    }, 1000);
  }

  useEffect(() => {
    if (!player.name) {
      window.location.href = "/home";
    }
  }, []);
  useEffect(()=>{
    const currentLS = getLocalStorage('player')
    const players = currentLS.filter( el => el.name !== player.name )
    setLocalStorage('player',[...players,{...player,score:winning}])

  },[winning])

  return (
    player.name && (
      <Fragment>
        <Header name={player.name} />
        <div className="container u-mt-2">
          <h3 className="text u-mt-1-5">
            Score:{lvl===1 ? <span>{winning}</span>: <span>{winningLvl2}</span>}
          </h3>
          <div className="game_options u-mt-1-5">
            {optionsList.map((el) => (
              <IconButton
                name={el.name}
                key={el.name}
                handleClick={handleSelection}
                disabled={disabled}
                icon={el.icon}
              />
            ))}
          </div>
          <p className="text u-mt-1-5">
          <span className="text-small"> You choose: </span> {firstSelection.toUpperCase()}
          </p>
          <p className="text u-mt-1-5">
          <span className="text-small"> The Bot choose: </span> {secondSelection.toUpperCase()}
          </p>
          <p className="text u-mt-1"> {message}</p>

          {winning > 25 && lvl === 1 &&
            <Link to="/game-hard">
              <button className="btn u-mt-1-5" type="submit" >
                New level Unlock!
              </button>
            </Link>
          }
        </div>
      </Fragment>
    )
  );
};
export default Game;
