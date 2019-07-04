import React from 'react';
import Header from "./components/Header.js";
import Clicker from './components/Clicker.js';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header title = "React Clicker"></Header>
      <Clicker></Clicker>
    </div>
  );
}

export default App;
