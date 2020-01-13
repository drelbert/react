import React, {useEffect } from 'react';
import Button from '@material-ui/core/button';

const base = (props) => {
  useEffect(() => {
    console.log('[Base.js] useEffect from Base...')
  });

    return (
      <div>
        <Button 
          variant="contained"
          color="primary"
          onClick={props.clicked}>
          View Employee List
       </Button>
      </div>

    );
}

export default base;
