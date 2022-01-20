import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const ThreeParams = (props) => {
    //creating three parameters from the route
    const {variable, color1, color2} = useParams();

    return (
        <div>
            {
                isNaN(variable) ? 
                <h1 style={{color: color1, backgroundColor: color2 }}>The word is: {variable}</h1> :
                <h1 style={{color: color1, backgroundColor: color2 }}>The number is: {variable}</h1>
            }
        </div>
    );
};

export default ThreeParams;
