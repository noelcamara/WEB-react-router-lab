import React from 'react';
import { Link } from "react-router-dom";

function Selection(props) {

    let rows = [];

    for (const ligne of props.json) {

        rows.push(

            <p className='selection'>
                <Link
                    onClick={() => props.selectionner(ligne)}
                    key={`link${ligne.name}`}
                    to={`/${ligne.name.toLowerCase().replaceAll(" ", "_").normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className='title'>
                    {ligne.name}
                </Link>
            </p>
        );

    }


    return rows;

}

export default Selection;
