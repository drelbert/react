import React, { Component } from 'react';

import Person from './Person/Person';
import TalentDev from './TalentDev/TalentDev';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { id: 'emp22', name: 'El Dorado', employed: 4 },
      { id: 'emp45', name: 'Domigo', employed: 3 },
      { id: 'emp34', name: 'Julia', employed: 8 },
    ],
    otherState: 'some other value',
    showPersons: false,
    userInput: ''
  }

  employedChangedHandler = ( event, id  ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    //Create new object then use spread operator to work on that object not the original 
    const person = {
      ...this.state.persons[personIndex]
    };
    //Update the years on the copy
    person.employed = event.target.value;

    //Updating the array 
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    //Set state on updated person array 
    this.setState( {persons:persons} );
  }


  deletePersonHandler = (personIndex) => {
    //Updating state in an immutable fashion 
    //const persons = this.persons.slice()
    //Alternatively use spread operator
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  inputChangeHandler = (event) => {
    this.setState({userInput: event.target.value});
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    //Converting the array into JSX with .map() method
    if (this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map((person, index) => {
          return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            employed={person.employed} 
            key={person.id}
            changed={(event) => this.employedChangedHandler(event, person.id)}
            />
        })}
        </div> 
      );
    }
  
    return ( 
      <div className="App">
        <h1>Dev App</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>
          View Employee List
        </button>
      {persons}
      <hr />
        <input 
          type="text" 
          onChange={this.inputChangeHandler} 
          value={this.state.userInput} />
          <p>{this.state.userInput}</p>
          <TalentDev inputLength={this.state.userInput.opportunity} />
      </div>
    );
  }
}

export default App;
