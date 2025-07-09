import './App.css';
import React from 'react';
import Navbar from './component/Navbar';
import Content from './component/Content';
import Poloroid from './component/Poloroid';
import About from './component/About';
function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Content />
        <Poloroid />
        <About />
      </div>
    </div>
  );
}


export default App;
