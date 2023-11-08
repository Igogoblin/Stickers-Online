import React from "react";
import "./App.css";
import Sticker from "./components/Sticker";
import Home from "./components/Home";
import Manager from "./components/manager/Manager";

function App() {
  return (
    <div className="App">
      <main>
        <Manager></Manager>
        <Sticker></Sticker>
      </main>

      <footer>
        <Home></Home>
      </footer>
    </div>
  );
}

export default App;
