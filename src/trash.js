// import React, { useState } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRotateLeft, faTrash } from "@fortawesome/free-solid-svg-icons";
// import './trash.css';

// const Trash = () => {
//   const [trashData, setTrashData] = useState(
//     JSON.parse(localStorage.getItem('corbeille')) || []
//   );

//   const supprimer = (elementASupprimer) => {
//     const listeTaches = document.getElementById('parent');
//     if (listeTaches.contains(elementASupprimer)) {
//       listeTaches.removeChild(elementASupprimer);
//     }

//     const valeurElement = elementASupprimer.innerText;
//     const currentList = JSON.parse(localStorage.getItem('corbeille')) || [];
//     const index = currentList.indexOf(valeurElement);
//     if (index !== -1) {
//       currentList.splice(index, 1);
//     }

//     localStorage.setItem('corbeille', JSON.stringify(currentList));
//     setTrashData(currentList);
//   };

//   const recup = (elementArest) => {
//     const listeTaches = document.getElementById('parent');
//     if (listeTaches.contains(elementArest)) {
//       listeTaches.removeChild(elementArest);
//     }

//     const currentListe = JSON.parse(localStorage.getItem('recup')) || [];
//     const valeurElemente = elementArest.querySelector('div').innerText;
//     currentListe.push(valeurElemente);

//     localStorage.setItem('recup', JSON.stringify(currentListe));

//     const valeuree = elementArest.innerText;
//     const trashData = JSON.parse(localStorage.getItem('corbeille')) || [];
//     const index = trashData.indexOf(valeuree);
//     if (index !== -1) {
//       trashData.splice(index, 1);
//     }

//     localStorage.setItem('corbeille', JSON.stringify(trashData));
//     setTrashData(trashData);
//   };

//   return (
//     <div className="box">
//       <div className="title">
//         <h1>Corbeille</h1>
//       </div>
//       <div className="parent">
//         {trashData.map((element) => (
//           <div className="container" key={element}>
//             <div className="div">{element}</div>
//             <FontAwesomeIcon icon={faArrowRotateLeft} onClick={() => recup(element)} />             
//             <FontAwesomeIcon icon={faTrash} onClick={() => supprimer(element)} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Trash;
//----------version fonctionne sauff quand je restaure le textcontent ne s'affiche pas 
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';

function Trash() {
  const [trashData, setTrashData] = useState([]);

  useEffect(() => {
    const storedTrashData = JSON.parse(localStorage.getItem('corbeille')) || [];
    setTrashData(storedTrashData);
  }, []);

  useEffect(() => {
    localStorage.setItem('corbeille', JSON.stringify(trashData));
  }, [trashData]);

  const handleRestore = (index) => {
    const updatedTrashData = [...trashData];
    const updatedRecup = JSON.parse(localStorage.getItem('recup')) || [];
  
    const restoredTask = updatedTrashData.splice(index, 1)[0];
    updatedRecup.push(restoredTask);
  
    setTrashData(updatedTrashData);
    localStorage.setItem('recup', JSON.stringify(updatedRecup));
  };

  const handleDelete = (index) => {
    const updatedTrashData = [...trashData];

    const deletedTask = updatedTrashData.splice(index, 1)[0];

    setTrashData(updatedTrashData);
    localStorage.setItem('corbeille', JSON.stringify(updatedTrashData));
  };

  return (
    <div className="App">
      <main>
        <div className="box">
          <div className="title">
            <h1>Corbeille</h1>
          </div>
          <div className="parent">
            {trashData.map((task, index) => (
              <div className="container" key={index}>
                <div className="div">{task}</div>
                <FontAwesomeIcon icon={faArrowRotateLeft} onClick={() => handleRestore(index)} />
                <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(index)} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Trash;
//-------------------- essaie de regler lae text content quand je restaure
// import React, { useState, useEffect } from 'react';
// import './trash.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRotateLeft, faTrash } from "@fortawesome/free-solid-svg-icons";

// function Trash() {
//   const [trashData, setTrashData] = useState(() => {
//     const data = localStorage.getItem('corbeille');
//     return data ? JSON.parse(data) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem('corbeille', JSON.stringify(trashData));
//   }, [trashData]);

//   const supprimer = (e) => {
//     const container = e.target.closest('.container');
//     const tacheSupValue = container.querySelector('.tacheSup').textContent;

//     const updatedTrashData = trashData.filter((item) => item !== tacheSupValue);
//     setTrashData(updatedTrashData);

//     container.parentNode.removeChild(container);
//   };

//   const recup = (e) => {
//     const container = e.target.closest('.container');
//     const tacheSupValue = container.querySelector('.tacheSup').textContent;

//     setTrashData(trashData.filter((item) => item !== tacheSupValue));
//     container.parentNode.removeChild(container);

//     const recupData = JSON.parse(localStorage.getItem('recup')) || [];
//     recupData.push(tacheSupValue);
//     localStorage.setItem('recup', JSON.stringify(recupData));
//   };

//   const renderTrashItems = () => {
//     return trashData.map((tache) => (
//       <div className="container" key={tache}>
//         <div className="div">
//           <div className="tacheSup">{tache}</div>
//           <div className="icons">
//           <FontAwesomeIcon icon={faArrowRotateLeft} onClick={recup} />
//           <FontAwesomeIcon icon={faTrash} onClick={supprimer} />
//           </div>
//         </div>
//       </div>
//     ));
//   };

//   return (
//     <main>
//       <div className="box">
//         <div className="title">
//           <h1>Corbeille</h1>
//         </div>
//         <div className="parent" id="parent">
//           {renderTrashItems()}
//         </div>
//       </div>
//     </main>
//   );
// }

// export default Trash;



//---------version tres encienne
// import React, { useState, useEffect } from 'react';
// import React, { Component } from 'react';
// import './trash.css';

// const Trash = () => {
//   const [trashData, setTrashData] = useState(JSON.parse(localStorage.getItem('corbeille')) || []);

//   useEffect(() => {
//     localStorage.setItem('corbeille', JSON.stringify(trashData));
//   }, [trashData]);

//   const supprimer = (event) => {
//     const elementASupprimer = event.target.parentNode;
//     const valeurElement = elementASupprimer.querySelector('div').textContent;

//     setTrashData((prevTrashData) => prevTrashData.filter((item) => item !== valeurElement));

//     localStorage.setItem('corbeille', JSON.stringify(trashData));
//   };

//   const recup = (event) => {
//     const elementArest = event.target.parentNode;
//     const valeurElemente = elementArest.querySelector('div').textContent;

//     setTrashData((prevTrashData) => [...prevTrashData, valeurElemente]);

//     localStorage.setItem('corbeille', JSON.stringify(trashData));
//   };
// const Trash = () => {
//   const [trashData, setTrashData] = useState(JSON.parse(localStorage.getItem('corbeille')) || []);

//   useEffect(() => {
//     localStorage.setItem('corbeille', JSON.stringify(trashData));
//   }, [trashData]);

//   const supprimer = (id) => {
//     setTrashData((prevTrashData) => prevTrashData.filter((item) => item !== id));
//     localStorage.setItem('corbeille', JSON.stringify(trashData));
//   };

//   const recup = (id) => {
//     setTrashData((prevTrashData) => prevTrashData.filter((item) => item !== id));

//     const currentTodos = JSON.parse(localStorage.getItem('todos')) || [];
//     currentTodos.push(id); // Store the todo ID, not the text
//     localStorage.setItem('todos', JSON.stringify(currentTodos));
//   };
//---------------
// import {trash , recup, supprimer} from './home';

// class Trash extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       trashData: trash(),
//     };
//   } 

//   render() {
//     const { trashData } = this.state;
//   return (
//     <div className="box">
//       <div className="title">
//         <h1>Corbeille</h1>
//       </div>

//       <div className="parent">
//         {trashData.map((item) => (
//           <div className="container" key={item}>
//             <div className="div">{item}</div>
//             <i className="fa-solid fa-arrow-rotate-left" onClick={recup} />
//             <i className="fa-solid fa-trash" onClick={supprimer} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// };

// export default Trash;
