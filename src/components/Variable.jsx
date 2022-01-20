import React from 'react';
import { useParams } from 'react-router-dom';

const Variable = () => {
    //making "variable" a local variable
    const {variable} = useParams();


    return (
        <div>
            {
                // Determining if it or is not a number to render a different Key 
                isNaN(variable) ? 
                <h1>The word is: {variable}</h1> :
                <h1>The number is: {variable}</h1>
            }
        </div>
    );
};

export default Variable;
