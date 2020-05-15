import React, { Component } from 'react';
import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello App'
    }
  }
  render() {
    return (

      <div className="TodoApp">
        <h3>{this.state.message}</h3>
        <form>
        <label htmlFor="newTodo">New Todo</label>
        <input id="newTodo" name="newTodo" />
        </form>
      </div>

    );
  }
}
export default App;