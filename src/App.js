import React, { useState,useEffect } from "react";
//import ajouterCategorie from './home.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
//import ajouterCategorie from './home.js';
import TodoList from "./todolist";
//import './todolist.js'
import './todolist.css';
const App = () => {
  const [todoList, setTodoList] = useState([]);

  const ajouterCategorie = (e) => {
         e.preventDefault(); 
        const valeur = document.getElementById("input").value;
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
      };

  const afficherTodolist = (e) => {
    e.preventDefault();
    
    window.location.href = '/todolist';
  };

  useEffect(() => {
    document.querySelectorAll(".cat").forEach((el) => el.addEventListener("click", afficherTodolist));
  }, [todoList]);

  return (
    <div>
      <div className="page">
        <div className="main-left">
          <div className="barre">
            <ul id="catList">
            <h3>Categories</h3>
              <input type="text" id="input" />
            <FontAwesomeIcon icon={faPlus} id="iconPlus" onClick={ajouterCategorie} />
              {todoList.map((todo) => (
                <li key={todo.id} className="cat">
                  {todo.text}
                </li>
              ))}
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
};

export default App;



