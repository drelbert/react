import React from 'react';

const TalentDev = (props) => {
    //Using a var to check dev title length
    let validationMessage = 'Dev Opportunity Added';

    if (props.inputLength <= 5) {
        validationMessage = 'Please Add More Details';
    }

    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    );
};

export default TalentDev