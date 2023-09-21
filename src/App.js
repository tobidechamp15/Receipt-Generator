import React from 'react';

// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Signup from './Components/Signup'
import Login from './Components/Login';

function App() {
  return (
    <div className=" bg-black h-screen ">
      <Signup />
      {/* <Login /> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;
