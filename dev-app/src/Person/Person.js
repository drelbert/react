import React from 'react';

import './Person.css';

const person = ( props ) => {
    return (
        <div className="Person">
            <p onClick={props.click}>{props.name} : Employed for  {props.employed} years.</p>
            <p>{props.children}</p>
            <p>Update Employment Years:
            <input type="text" onChange={props.changed} value={props.employed} />
            </p>
        </div>
    )
};

export default person;