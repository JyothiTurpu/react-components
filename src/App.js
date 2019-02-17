import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      {name: "Max" , age: 28},
      {name: "Manu" , age: 30},
      {name: "Stephanie" , age: 25}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({persons : [
      {name: newName , age: 28},
      {name: "Manuel" , age: 30},
      {name: "Stephanie Rathod" , age: 24}
    ]});

  }

  nameChangedHandler = (event) => {
    this.setState(
      {
        persons : [
          {name: 'Max' , age:28},
          {name: event.target.value , age: 30},
          {name: 'Stephanie' , age: 26}
        ]
      }
    )
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>HELLO, This is a React APP</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler.bind(this,'Maximillian!!!')} 
        style={style}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this,'MAXIMILLAN')} changed={this.nameChangedHandler}>My Hobbies : Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
