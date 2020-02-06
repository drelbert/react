import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import './Person.css';

//Converted to class based components
class Person extends Component {
    render() {
        console.log('[Person.js] this is person...');
        return (
            <Fragment>
                <p onClick={this.props.click}>{this.props.name} : Employed for  {this.props.employed} years.</p>
                <p>{this.props.children}</p>
                <p>Update Employment Years:
                <input 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.employed} />
                </p>
            </Fragment>
  
         ) ;
    }
}

//Adding the PropTypes JavaScript object
//Note use of upper case person since this is a class based component
//Defining props used by component and which type of data 
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    employed: PropTypes.number,
    changed: PropTypes.func
};

export default Person;

// <div className="Person">
// </div>