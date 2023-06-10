import React from 'react';
import "./styles/main.scss";
import { Navbar } from './components/Navbar';
import { TextHeader } from './components/TextHeader'


function App() {
  return (
    <div className="app">
      <Navbar/>
      <TextHeader/>
    </div>
  );
}

export default App;
