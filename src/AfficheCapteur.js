import React from 'react';
import './App.css';

function AfficheCapteur(props) {
    return (
        <div className='capteur'>
            <p>
                {props.json.name}
            </p>
        </div>
    );
}

export default AfficheCapteur;
