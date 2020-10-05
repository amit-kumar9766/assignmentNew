import React from 'react';
import logo from './logo.svg';
import Sidebar from './components/Sidebar';
import LeftSide from './components/LeftSide';
import Rightside from './components/Rightside';
import Welcome from './components/Welcome'
import {Link,BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <Welcome/> */}
      <Route path="/assignmentNew" exact>
      <Sidebar/>
      <LeftSide/>
      <Rightside/>
   
     </Route>
    
    </div>
  );
}

export default App;
