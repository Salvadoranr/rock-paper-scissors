import React,{ useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import './App.css';


const App= () => {
  const [userName, setUserName] = useState('');
  
  function handleUserName(name){
    setUserName(name)
  }
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/game" element={<Game userName={userName} />}></Route>
          <Route path="*" element={<Home handleUserName={handleUserName}/>}></Route>
        </Routes>
      </BrowserRouter>

  );
}

export default App;


