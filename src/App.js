import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {
  render() {
    var courses = [
      { name: 'Complete iOS dev course', price: 199},
      { name: 'Complete Android dev course', price: 159},
      { name: 'Complete Pentesting course', price: 100},
      { name: 'Complete AI,ML,Dl course', price: 500}
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Course sales project</h1>
        </header>
        <Coursesales items={courses}/>
      </div>
    );
  }
}

export default App;
