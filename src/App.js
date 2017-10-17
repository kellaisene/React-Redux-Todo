import React, { Component } from 'react';
import Header from "./components/header/";
import TaskBar from './components/taskbar/';
import TaskList from './components/tasklist/';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <TaskBar/>
        <TaskList/>
      </div>
    );
  }
}

export default App;

// <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React with Redux</h1>
      //   </header>
      //   <div className="Todo-App">
      //     <form>
      //       <input type="text"/>
      //     </form>
      //     <div className="Todo-List">
      //       <ul>
      //         <li>
      //           <input type="checkbox"/> Create Static UI
      //         </li>
      //         <li>
      //           <input type="checkbox"/> Create Static State
      //         </li>
      //         <li>
      //           <input type="checkbox"/> Create Static Render UI
      //         </li>

      //       </ul>
      //   </div>
      //   </div>
      // </div>