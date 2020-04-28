import React from 'react';
import './App.css';
// import {
//   Route, Switch
// } from "react-router-dom"
import router from "./router/index"
import SwitchRouter from "./components/common/SwitchRouter"
function App() {
  return (
    <div className="App">
      <SwitchRouter router={router}></SwitchRouter>
    </div>
  );
}

export default App;
