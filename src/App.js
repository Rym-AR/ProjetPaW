// import React, { useState, useEffect, useRef } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import TodoList from "./todolist";
// import './todolist.css';


// const App = () => {
  
//  //localStorage.clear();
//  const [liste, setListe] = useState([]);
//  const ulRef = useRef(null);
 

//  useEffect(() => {
    
//     const storedListe = JSON.parse(localStorage.getItem('maListe')) || [];
//     setListe(storedListe);

//     const liElements = storedListe.map((element) => {
//       const li = document.createElement('li');
//       li.textContent = element;
      

//       li.addEventListener('click', () => {
//         alert(element)
//         window.location.href = '/todolist';
//       }); 
//       return li;
//     });

//     ulRef.current.append(...liElements);
    

//  }, []);

//  const [todoList, setTodoList] = useState([]);

//  const ajouterCategorie = (e) => {
//     e.preventDefault();
//     const valeur = document.getElementById('input').value; 
//     if (valeur !== "") {
//       const newTodoList = [...todoList];
//       newTodoList.push({
//         id: Date.now(),
//         text: valeur,
//         completed: false,
//       });
//       setTodoList(newTodoList);
//       document.getElementById("input").value = "";
//     }

//     const nouvelElement = valeur;
//     setListe((prevListe) => [...prevListe, nouvelElement]);
//     localStorage.setItem('maListe', JSON.stringify([...liste, nouvelElement]));
//     //
//     let setSelectedCategory;
//     let element;
   
//     setSelectedCategory(element);

//     const li = document.createElement('li');
//     li.textContent = nouvelElement;
//     ulRef.current.appendChild(li);

//     li.addEventListener('click', () => {
//       window.location.href = '/todolist';
//     });
//  };

//  return (
//    <div>
//      <div className="page">
//        <div className="main-left">
//          <div className="barre">
//            <ul id="catList">
//              <h3>Categories</h3>
//              <input type="text" id="input" />
//              <FontAwesomeIcon icon={faPlus} id="iconPlus" onClick={ajouterCategorie} />
//              <ul ref={ulRef}></ul>
//            </ul>
//            <h3>Important</h3>
//            <h3>Corbeille</h3>
//          </div>
//        </div>
//        <div className="main-right">
//          <div className="profil">
//            <div className="photo"></div>
//          </div>
//          <div className="main">
//            {window.location.pathname === '/todolist' ? <TodoList /> : null}
//          </div>
//        </div>
//      </div>
//    </div>
//  );
// }

// export default App;
//------------
import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import TodoList from "./todolist";
//import {transformContenu} from './todolist.js'
import './todolist.css';
import transformContenu from './home.js';

const App = () => {
  
 //localStorage.clear();
 const [liste, setListe] = useState([]);
 const ulRef = useRef(null);
 let elements = useState([]);

 useEffect(() => {
    
    const storedListe = JSON.parse(localStorage.getItem('maListe')) || [];
    setListe(storedListe);
    
    elements.forEach(element => {
      
    
    const liElements = storedListe.map((element) => {
      const li = document.createElement('li');
      li.textContent = element;
      

      li.addEventListener('click', () => {
        // alert(element)
         window.location.href = '/todolist';
        transformContenu(element);
      }); 
      return li;
    });

    ulRef.current.append(...liElements);
  });
 }, []);
 const [todoList, setTodoList] = useState([]);

 const ajouterCategorie = (e) => {
    e.preventDefault();
    const valeur = document.getElementById('input').value; 
    if (valeur !== "") {
      const newTodoList = [...todoList];
      newTodoList.push({
        id: Date.now(),
        text: valeur,
        completed: false,
      });
      setTodoList(newTodoList);
      document.getElementById("input").value = "";
    }

    const nouvelElement = valeur;
    setListe((prevListe) => [...prevListe, nouvelElement]);
    localStorage.setItem('maListe', JSON.stringify([...liste, nouvelElement]));
    //
    let setSelectedCategory;
    let element;
   
    setSelectedCategory(element);

    const li = document.createElement('li');
    li.textContent = nouvelElement;
    ulRef.current.appendChild(li);

    li.addEventListener('click', () => {
      window.location.href = '/todolist';
    });
 };

 return (
   <div>
     <div className="page">
       <div className="main-left">
         <div className="barre">
           <ul id="catList">
             <h3>Categories</h3>
             <input type="text" id="input" />
             <FontAwesomeIcon icon={faPlus} id="iconPlus" onClick={ajouterCategorie} />
             <ul ref={ulRef}></ul>
           </ul>
           <h3>Important</h3>
           <h3>Corbeille</h3>
         </div>
       </div>
       <div className="main-right">
         <div className="profil">
           <div className="photo"></div>
         </div>
         <div className="main">
           {window.location.pathname === '/todolist' ? <TodoList /> : null}
         </div>
       </div>
     </div>
   </div>
 );
}

export default App;









