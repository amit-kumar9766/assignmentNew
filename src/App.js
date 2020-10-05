import React from 'react';
import logo from './logo.svg';
import Sidebar from './components/Sidebar';
import LeftSide from './components/LeftSide';
import Rightside from './components/Rightside';
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
      {/* <Welcome/> */}
      <Sidebar/>
      <LeftSide/>
      <Rightside/>
    </div>
  );
}

export default App;
