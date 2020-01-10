import React from 'react';

import Person from './Person/Person';

//Simplified approach with => one liner, given what is placed in the function body
const persons = (props) => props.persons.map((person, index) => {
    //All JSX code goes here 
        return <Person 
          click={() => props.clicked(index)}
          name={person.name}
          employed={person.employed} 
          key={person.id}
          changed={(event) => props.changed(event, person.id)}
          />
      });

export default persons;