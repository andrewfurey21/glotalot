import React from 'react';
import "./styles/main.scss";
import { Navbar } from './components/Navbar';
import { TextsPage } from './components/TextsPage';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <TextsPage/>
    </div>
  );
}

export default App;
