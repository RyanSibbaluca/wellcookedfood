import React, { Component } from 'react';
import './App.css';
import FinderForm from './components/finderForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">App-title</h1>
        </header>
        <FinderForm/>
      </div>
    );
  }
}

export default App;
