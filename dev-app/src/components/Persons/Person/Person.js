import React, { Component } from 'react';

import './Person.css';

//Converted to class based components
class Person extends Component {
    render() {
        console.log('[Person.js] this is person...');
        return (
            <div className="Person">
                <p onClick={this.props.click}>{this.props.name} : Employed for  {this.props.employed} years.</p>
                <p>{this.props.children}</p>
                <p>Update Employment Years:
                <input type="text" 
                    onChange={this.props.changed} 
                    value={this.props.employed} />
                </p>
            </div>
        );
    }
}

export default Person;