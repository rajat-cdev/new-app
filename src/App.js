import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react';

function App() {
  return (
    <>
      {/* <Navbar title="TextUtils" about="About-TextUtils"/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
      <Textform heading="Enter Your Text" mode={mode} />
      {/* <About /> */}
      </div>
    </>
  );
}

export default App;
