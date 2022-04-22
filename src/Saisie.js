import React from 'react';

function Saisie(props) {
    return (
        <div>
            <span>URL:</span>
            <br/>
            <input type="text" name="url" placeholder="lien" onInput={e => props.update(e)} className='inputUrl'/>
        </div>
    );
}

export default Saisie;
