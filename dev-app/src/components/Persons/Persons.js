import React, { Component } from 'react';

import Person from './Person/Person';

//Simplified approach with => one liner, given what is placed in the function body
//Converting the array into JSX with .map() method
//original function prior to class additionconst persons = (props) => props.persons.map((person, index) => {

class Persons extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shoulComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Person.js] getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('[Person.js] componentDidUpdate');
    }

    render() {
        console.log('[Persons.js] this is persons ...')
        return this.props.persons.map((person, index) =>{
            return (
            <Person 
            click={() =>this.props.clicked(index)}
            name={person.name}
            employed={person.employed} 
            key={person.id}
            changed={(event) => this.props.changed(event, person.id)}
            />
            );
        });
    }
}


export default Persons;