import React from 'react';
import './App.css';
import TableDisplay from './table.display';
import pic from '../src/assets/door-close.jpeg';

const t = (y) => {
    for (const [t, capital] of Object.entries(y))
    {
        if(capital ==="Porte du Garage")
        {
            return <div>

                 <img src={pic} width="100px" alt="door open" />
                
                   </div>
           
        }
        else
        {
            for(const [identifiant,valeur] of Object.entries(capital))
            {
                if(identifiant==="values")
                {
                    return <div>
                            <div> 
                                  <span> Valeur : actuelle :</span>  
                                <p className='tempActuelle'>
                                    <h2> {valeur[0]}&deg; </h2>
                                    </p>
                            </div> 
                            <div>
                                {<TableDisplay data={valeur} />}
                            
                            </div>
                        </div>;
                }
            }
        }

    }
}


function AfficheHistorique(props) {
    
    return (
    
           <p>
               {
                   t(props.json)
               }
           </p>
            
      
  
    );
}

export default AfficheHistorique;
