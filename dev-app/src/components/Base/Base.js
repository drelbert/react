import React, { useEffect, useRef } from 'react';
import Button from '@material-ui/core/button';

const base = props => {
  //Ref set up
  const toggleButtonRef = useRef(null);

  useEffect(() => {
    console.log('[Base.js] first useEffect for useRef');
    toggleButtonRef.current.click();
    return () => {
      console.log('{Base.js] cleanup');
    };
  }, []);

  useEffect(() => {
    console.log('[Base.js] useEffect from Base...');
    setTimeout(() => {
      alert('This alert');
    }, 1000);
  }, []);

    return (
      <div>
        <Button 
          variant="contained"
          color="primary"
          ref={toggleButtonRef}
          onClick={props.clicked}>
          View Employee List
       </Button>
      </div>

    );
}

export default base;
