import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import { getLocalStorage, setLocalStorage, startStorage } from "./utils/manageLocalStorage";
import{LVL1, LVL2} from './gameLvls'
import "./App.css";

const App = () => {
  const [userName, setUserName] = useState("");
  const [player, setPlayer] = useState({ name: '', score: 0 })

  function handleUserName(name) {
    setUserName(name);
    setPlayer({ ...player, name })
  }
  function handleStorage() {
    startStorage('player', userName)
    const currentLS = getLocalStorage('player')
    const isOldPayer = currentLS ? currentLS.find(el => el.name === player.name) : null
    if (!isOldPayer) {
      setLocalStorage('player', [...currentLS, { name: userName, score: 0 }])
    } else {
      setPlayer(isOldPayer)
    }
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/game" element={<Game player={player} options={LVL1} lvl={1} />}></Route>
        <Route path="/game-hard" element={<Game player={player} options={LVL2} lvl={2} />}></Route>
        <Route
          path="*"
          element={<Home handleUserName={handleUserName} handleButton={handleStorage} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
