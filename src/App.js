import Saisie from './Saisie';
import Selection from './Selection';
import AfficheCapteur from './AfficheCapteur';
import React, {useEffect, useState} from "react";
import {
    Routes,
    Route
} from "react-router-dom";
import './App.css';
import AfficheHistorique from './AfficheHistorique';


function App() {

    const [input, setInput] = useState(''); //le texte saisi dans le champ de Saisie
    const [data, setData] = useState(''); //le fichier json que l'on obtient avec input
    const [selection, setSelection] = useState([]); //le capteur qui est actuellement affiché
    const updateURL = e => {setInput(e.target.value);}
    const changerSelection = tab => {setSelection(tab); console.log(tab);}

    useEffect(() => {
        fetch(input)
        .then(function(response) {
            return response.json()
        }).then(function(json) {
            if (!jsonEquals(json, data)) //Si ce n'est pas la même donnée qu'avant, l'actualise (évite les boucles infinies)
                setData(json);
        }).catch(function(ex) {
            setData('');
            setSelection([]);
        });
    });

    return (
        <div className="wrapper" > 
         <p className="one">
            <h1>Welcome</h1>
            <h4>Entrez dans la barre de recherche l'URL suivante : https://pigne.org/teaching/sensors_data.json</h4>
            <Saisie update={updateURL} />
            </p>
            <p className='two'>
            <Selection json={data} selectionner={changerSelection}/>
            </p>
           <p className="three">
           <AfficheCapteur json={selection}/>
            <AfficheHistorique json={selection}/>
            </p>
            <Routes>
                <Route path={`/${selection.name}`} element={<AfficheCapteur json={selection}/>} />
            </Routes>
           
        </div>
    );
}

function jsonEquals(object1, object2){
  if (object1.length !== object2.length)
      return false;

  for (let i in object1)
      if (!object2.hasOwnProperty(i))
          return false;
  return true;
}
export default App;
