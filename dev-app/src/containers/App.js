import React, { Component } from 'react';

import Base from '../components/Base/Base';
import Persons from '../components/Persons/Persons';
import TalentDev from '../components/TalentDev/TalentDev';
import ButtonAppBar from '../Material/AppBar/AppBar';

import './App.css';

class App extends Component {
  //This sytax takes care of setting the constructor(props), super(props)
  //So no need to explicitly add it
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

  //Adding lifecycle hooks, will remove later 
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js shouldComponentUpdate')
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js componentDidUpdate')
  }
  //End of lifecycle hooks 

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
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.employedChangedHandler}
            />;
    }
  
    return ( 
      <div className="App">
        <ButtonAppBar
        />
        <Base 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
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
