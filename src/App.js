// import React, { useState,useEffect } from "react";
// //import ajouterCategorie from './home.js';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// //import ajouterCategorie from './home.js';
// import TodoList from "./todolist";
// //import './todolist.js'
// import './todolist.css';
// const App = () => {
  // const [todoList, setTodoList] = useState([]);

  // const ajouterCategorie = (e) => {
  //        e.preventDefault(); 
  //       const valeur = document.getElementById("input").value;
  //       if (valeur !== "") {
  //         const newTodoList = [...todoList];
  //         newTodoList.push({
  //           id: Date.now(),
  //           text: valeur,
  //           completed: false,
  //         });
  //         setTodoList(newTodoList);
  //         document.getElementById("input").value = "";
  //       }
  //     };

  // const afficherTodolist = (e) => {
  //   e.preventDefault();    
  //   window.location.href = '/todolist';
  // };

  // useEffect(() => {
  //   document.querySelectorAll(".cat").forEach((el) => el.addEventListener("click", afficherTodolist));
  // }, [todoList]);
//-----------------
 
//   const [liste, setListe] = useState([]);
//   const ulRef = React.useRef(null);

//   useEffect(() => {
//     const storedListe = JSON.parse(localStorage.getItem('maListe')) || [];
//     setListe(storedListe);

//     const liElements = storedListe.map((element) => {
//       const li = document.createElement('li');
//       li.textContent = element;
//       return li;
//     });

//     ulRef.current.append(...liElements);
//   }, []);
//   const [todoList, setTodoList] = useState([]);
//   const ajouterCategorie = (e) => {
//     e.preventDefault();
//     const valeur = document.getElementById('input').value; 
//       if (valeur !== "") {
//                 const newTodoList = [...todoList];
//                 newTodoList.push({
//                   id: Date.now(),
//                   text: valeur,
//                   completed: false,
//                 });
//                 setTodoList(newTodoList);
//                 document.getElementById("input").value = "";
//               }
//       // Add the new category to the liste state
//       const nouvelElement = valeur;
//       setListe((prevListe) => [...prevListe, nouvelElement]);
  
//       // Update local storage with the updated list
//       localStorage.setItem('maListe', JSON.stringify([...liste, nouvelElement]));
  
//       // Add an event listener to the new category item to show the todo list
//       //li.addEventListener('click', afficherTodolist);
//     }
  
//   const afficherTodolist = (e) => {
//       e.preventDefault();    
//       window.location.href = '/todolist';
//     };
  
//     useEffect(() => {
//       document.querySelectorAll(".cat").forEach((el) => el.addEventListener("click", afficherTodolist));
//     }, [todoList]);
  
//   return (
//     <div>
//       <div className="page">
//         <div className="main-left">
//           <div className="barre">
//             <ul id="catList">
//             <h3>Categories</h3>
//               <input type="text" id="input" />
//             <FontAwesomeIcon icon={faPlus} id="iconPlus" onClick={ajouterCategorie} />
//               {todoList.map((todo) => (
//                 <li key={todo.id} className="cat">
//                   {todo.text}
//                 </li>
//               ))}
//             </ul>
//             <h3>Important</h3>
//             <h3>Corbeille</h3>
//           </div>
//         </div>
//         <div className="main-right">
//           <div className="profil">
//             <div className="photo"></div>
//           </div>
//           <div className="main">
//           {window.location.pathname === '/todolist' ? <TodoList /> : null}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
//   }

// export default App;
//------------------
import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
//import { Link } from 'react-router-dom';
import TodoList from "./todolist";
import './todolist.css';

const App = () => {
 //localStorage.clear();
 const [liste, setListe] = useState([]);
 const ulRef = useRef(null);

 useEffect(() => {
    
    const storedListe = JSON.parse(localStorage.getItem('maListe')) || [];
    setListe(storedListe);

    const liElements = storedListe.map((element) => {
      const li = document.createElement('li');
      li.textContent = element;

      li.addEventListener('click', () => {
        window.location.href = '/todolist';
      }); 
      return li;
    });

    ulRef.current.append(...liElements);
    

 }, []);


// ...

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




