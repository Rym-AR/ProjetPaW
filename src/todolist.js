//export {transformContenu};
// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faStar } from "@fortawesome/free-regular-svg-icons";
// import './todolist.css';

// import transformContenu from './home';


// const TodoList = () => {  
//  const [tasks, setTasks] = useState([]);
//  const addTask = () => {
//     const newTask = {
//       task: "",
//       completed: false,
//       important: false,
//     };

//     setTasks([...tasks, newTask]);
//  };

//  const handleCheckboxChange = (e) => {
//     const taskId = e.target.id.split("btn")[1];

//     setTasks((prevTasks) => {
//       return prevTasks.map((task, index) => {
//         if (index === parseInt(taskId)) {
//           return { ...task, completed: e.target.checked };
//         }

//         return task;
//       });
//     });
//  };
// const handleStarIconClick = (index) => {
//   // alert('salut')
//     setTasks((prevTasks) => {
//       return prevTasks.map((task, i) => {
//         if (i === index) {
//           return { ...task, important: !task.important };
//         }

//         return task;
//       });
//     });
//  };

//  const deleteTask = (index) => {
//     setTasks((prevTasks) => {
//       return prevTasks.filter((task, i) => i !== index);
//     });
//  };
// //  const transformContenu = (contenu) =>{
// //   const h1=document.createElement("h1");
// //   h1.textContent= contenu;
// //   document.title.appendChild(h1);
// //  }

//  return (
//     <div className="TodoList">
//       <div className="title">
//         {/* {transformContenu} */}
//         {/* <h1>{setSelectedCategory}</h1> */}
//         <FontAwesomeIcon icon={faPlus} id="iconPlus" onClick={addTask} />
//       </div>

//       <div className="inputsBox">
//         {tasks.map((task, index) => (
//           <div className="inputs" key={index}>
//             <input
//               type="text"
//               placeholder="Enter a task here..."
//               className="inputText"
//               value={task.task}
//               onChange={(e) => {
//                 setTasks((prevTasks) => {
//                  return prevTasks.map((task, i) => {
//                     if (i === index) {
//                       return { ...task, task: e.target.value };
//                     }

//                     return task;
//                  });
//                 });
//               }}
//               style={{
//                 textDecoration: task.completed ? "line-through" : "none",
//                 background: task.important ? "rgba(248, 0, 0, 0.5)" : "none",
//               }}
//             />

//             <input
//               type="checkbox"
//               className="checkbox"
//               id={`btn${index}`}
//               checked={task.completed}
//               onChange={handleCheckboxChange}
//             />&nbsp;

//            <FontAwesomeIcon
//               icon={faStar}
//              onClick={() => handleStarIconClick(index)}
//              className={task.important ? "star-filled" : "star-empty"}
// />&nbsp;

//            <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(index)} />
//          </div>
//         ))}
//       </div>
//     </div>
//  );
// };

// export default TodoList;
// import React, { useState, useEffect } from 'react';
import './todolist.css';

//  const TodoList = () => {
//   const [todos, setTodos] = useState(
//     JSON.parse(localStorage.getItem('corbeille')) || []
//   );

//   useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(todos));
//   }, [todos]);

//   const addTodo = () => {
//     const newTodo = {
//       text: '',
//       completed: false,
//       important: false,
//     };

//     setTodos([...todos, newTodo]);
//   };

//   const toggleTodo = (id) => {
//     const updatedTodos = [...todos];
//     const todo = updatedTodos.find((todo) => todo.id === id);

//     todo.completed = !todo.completed;
//     setTodos(updatedTodos);
//   };

//   const toggleImportant = (id) => {
//     const updatedTodos = [...todos];
//     const todo = updatedTodos.find((todo) => todo.id === id);

//     todo.important = !todo.important;
//     setTodos(updatedTodos);
//   };

//   const removeTodo = (id) => {
//     const updatedTodos = todos.filter((todo) => todo.id !== id);
//     setTodos(updatedTodos);

//     const currentCorbeille = JSON.parse(localStorage.getItem('corbeille')) || [];
//     const valeurElement = id;
//     currentCorbeille.push(valeurElement);
//     localStorage.setItem('corbeille', JSON.stringify(currentCorbeille));
//   };
// const TodoList = () => {
//   const [todos, setTodos] = useState(
//     JSON.parse(localStorage.getItem('todos')) || []
//   );

//   useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(todos));
//   }, [todos]);

//   const addTodo = () => {
//     const newTodo = {
//       id: Date.now(), // Add a unique identifier for each todo
//       text: '',
//       completed: false,
//       important: false,
//     };

//     setTodos([...todos, newTodo]);
//   };

//   const toggleTodo = (id) => {
//     const updatedTodos = [...todos];
//     const todoIndex = updatedTodos.findIndex((todo) => todo.id === id);

//     updatedTodos[todoIndex].completed = !updatedTodos[todoIndex].completed;
//     setTodos(updatedTodos);
//   };

//   const toggleImportant = (id) => {
//     const updatedTodos = [...todos];
//     const todoIndex = updatedTodos.findIndex((todo) => todo.id === id);

//     updatedTodos[todoIndex].important = !updatedTodos[todoIndex].important;
//     setTodos(updatedTodos);
//   };

//   const removeTodo = (id) => {
//     const updatedTodos = todos.filter((todo) => todo.id !== id);

//     setTodos(updatedTodos);

//     const currentCorbeille = JSON.parse(localStorage.getItem('corbeille')) || [];
//     currentCorbeille.push(id); // Store the todo ID, not the text
//     localStorage.setItem('corbeille', JSON.stringify(currentCorbeille));
//   };

  // const TodoList = () => {
  //   const [todos, setTodos] = useState(
  //     JSON.parse(localStorage.getItem('todos')) || []
  //   );
  
  //   useEffect(() => {
  //     localStorage.setItem('todos', JSON.stringify(todos));
  //   }, [todos]);
  
  //   const addTodo = () => {
  //     const newTodo = {
  //       id: Date.now(),
  //       text: '',
  //       completed: false,
  //       important: false,
  //     };
  
  //     setTodos([...todos, newTodo]);
  //   };
  
  //   const toggleTodo = (id) => {
  //     const updatedTodos = [...todos];
  //     const todoIndex = updatedTodos.findIndex((todo) => todo.id === id);
  
  //     updatedTodos[todoIndex].completed = !updatedTodos[todoIndex].completed;
  //     setTodos(updatedTodos);
  //   };
  
  //   const toggleImportant = (id) => {
  //     const updatedTodos = [...todos];
  //     const todoIndex = updatedTodos.findIndex((todo) => todo.id === id);
  
  //     updatedTodos[todoIndex].important = !updatedTodos[todoIndex].important;
  //     setTodos(updatedTodos);
  //   };
  
  //   const removeTodo = (id) => {
  //     const updatedTodos = todos.filter((todo) => todo.id !== id);
  
  //     setTodos(updatedTodos);
  
  //     const currentCorbeille = JSON.parse(localStorage.getItem('corbeille')) || [];
  //     currentCorbeille.push(id);
  //     localStorage.setItem('corbeille', JSON.stringify(currentCorbeille));
  //   };
//   return (
//     <div className="box">
//       <div className="title">
//         <h1>Perso</h1>
//         <i className="fa-duotone fa-plus" onClick={addTodo} />
//       </div>

//       <div className="inputsBox">
//         {todos.map((todo) => (
//           <div className="inputs" key={todo.id}>
//             <input
//               type="text"
//               placeholder="Saisissez votre tâche ici..."
//               className="inputText"
//               value={todo.text}
//               onChange={(event) => {
//                 const updatedTodos = [...todos];
//                 const index = updatedTodos.findIndex((item) => item.id === todo.id);
//                 updatedTodos[index].text = event.target.value;

//                 setTodos(updatedTodos);
//               }}
//             />
//             <input
//               type="checkbox"
//               className="checkBox"
//               checked={todo.completed}
//               onChange={(event) => toggleTodo(todo.id)}
//             />
//             {todo.important ? (
//               <i className="fa-solid fa-star" onClick={toggleImportant(todo.id)} />
//             ) : (
//               <i className="fa-regular fa-star" onClick={toggleImportant(todo.id)} />
//             )}
//             <i className="fa-solid fa-trash" onClick={() => removeTodo(todo.id)} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
//--------------------
//  return (
//     <div className="TodoList">
//       <div className="title">
//         {/* {transformContenu} */}
//         {/* <h1>{setSelectedCategory}</h1> */}
//         <FontAwesomeIcon icon={faPlus} id="iconPlus" onClick={ajouterTache} />
//       </div>

//       <div className="inputsBox">
//       {todos.map((todo) => (
//           <div className="inputs" key={todo.id}>
//             <input
//               type="text"
//               placeholder="Saisissez votre tâche ici..."
//               className="inputText"
//               value={todo.text}
//               onChange={(event) => {
//                 const updatedTodos = [...todos];
//                 const index = updatedTodos.findIndex((item) => item.id === todo.id);
//                 updatedTodos[index].text = event.target.value;

//                 setTodos(updatedTodos);
//               }}
// />

//             <input
//               type="checkbox"
//               className="checkbox"
//               // id={`btn${index}`}
//               checked={todo.completed}
//               onChange={() => check()}
//             />&nbsp;
           
//            <FontAwesomeIcon
//               icon={faStar}
//              onClick={() => important()}
//              className={todo.important ? "star-filled" : "star-empty"}
// />&nbsp;

//            <FontAwesomeIcon icon={faTrash} onClick={() => supprimer()}  />
//          </div>
//         ))}
//       </div>
//     </div>
//  );
// };


// export default TodoList;
//------------------------------marche mais boucle infin
//import { FaPlus, FaStar, FaTrash } from 'react-icons/fa';
// function TodoList() {
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     const storedTasks = JSON.parse(localStorage.getItem('recup')) || [];
//      setTasks(storedTasks);
//     localStorage.setItem('corbeille', JSON.stringify(tasks));
//    }, [tasks]);

//   const addTask = () => {
//     const newTask = {
//       task: '',
//       completed: false,
//       important: false,
//     };
//     setTasks([...tasks, newTask]);
//   };

//   const handleTaskChange = (taskIndex, property, value) => {
//     const updatedTasks = [...tasks];
//     const updatedTask = { ...updatedTasks[taskIndex] };
//     updatedTask[property] = value;
//     updatedTasks[taskIndex] = updatedTask;
//     setTasks(updatedTasks);
//   };

//   const handleTaskDelete = (taskIndex) => {
//     const updatedTasks = [...tasks];
//     updatedTasks.splice(taskIndex, 1);
//     setTasks(updatedTasks);

//     const currentList = JSON.parse(localStorage.getItem('corbeille')) || [];
//     const deletedTaskValue = tasks[taskIndex].task;
//     currentList.push(deletedTaskValue);
//     localStorage.setItem('corbeille', JSON.stringify(currentList));
//   };

  

//   const renderTasks = () => (
//     tasks.map((task, taskIndex) => (
//       <div className="inputs" key={taskIndex}>
//         <input
//           type="text"
//           className="inputText"
//           placeholder="Saisissez votre tâche ici..."
//           value={task.task}
//           onChange={(event) =>
//             handleTaskChange(taskIndex, 'task', event.target.value)
//           }
//           style={{
//             textDecoration: task.completed ? 'line-through' : 'none',
//             background: task.important ? 'rgba(248, 0, 0, 0.5)' : 'none',
//           }}
//         />
//         <input
//           type="checkbox"
//           className="checkBox"
//           checked={task.completed}
//           onChange={(event) =>
//             handleTaskChange(taskIndex, 'completed', event.target.checked)
//           }
//         />
//         <FontAwesomeIcon icon={faStar}
//           className={`fa-regular ${task.important ? 'fa-solid' : ''}`}
//           onClick={() => handleTaskChange(taskIndex, 'important', !task.important)}
//         />
//         <FontAwesomeIcon icon={faTrash} onClick={() => handleTaskDelete(taskIndex)} />
//       </div>
//     ))
//   );

//   return (
//     <main>
//       <div className="box">
//         <div className="title">
//           <h1>Perso</h1>
//           <FontAwesomeIcon icon={faPlus} id="iconPlus" onClick={addTask} />
//         </div>
//         <div className="inputsBox" id="inputsBox">
//           {renderTasks()}
//         </div>
//       </div>
//     </main>
//   );
// }

// export default TodoList;
//-----------------valeur null
// function TodoList() {
//   const TodoList = () => {  
//   // State for storing tasks
//   const [tasks, setTasks] = useState([]);

//   // Initialize tasks from localStorage if available
//   useEffect(() => {
//     const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     setTasks(storedTasks);
//   }, []);

//   // Add a new task
//   const addTask = () => {
//     const newTask = {
//       task: '',
//       completed: false,
//       important: false,
//     };
//     setTasks([...tasks, newTask]);
//   };

//   // Handle task changes
//   const handleTaskChange = (taskIndex, property, value) => {
//     const updatedTasks = [...tasks];
//     const updatedTask = { ...updatedTasks[taskIndex] };
//     updatedTask[property] = value;
//     updatedTasks[taskIndex] = updatedTask;
//     setTasks(updatedTasks);
//   };

//   // Handle task deletion
//     const handleTaskDelete = (taskIndex) => {
//     const updatedTasks = [...tasks];
//     updatedTasks.splice(taskIndex, 1);
//     setTasks(updatedTasks);

//     // Save deleted task to 'corbeille' in localStorage
//     const deletedTask = updatedTasks[taskIndex];
//     const currentCorbeille = JSON.parse(localStorage.getItem('corbeille')) || [];
//     currentCorbeille.push(deletedTask);
//     localStorage.setItem('corbeille', JSON.stringify(currentCorbeille));

//   };

//   // Render tasks
//   const renderTasks = () => {
//     return (
//       tasks.map((task, taskIndex) => (
//         <div className="inputs" key={taskIndex}>
//           <input
//             type="text"
//             className="inputText"
//             placeholder="Saisissez votre tâche ici..."
//             value={task.task}
//             onChange={(event) =>
//               handleTaskChange(taskIndex, 'task', event.target.value)
//             }
//             style={{
//               textDecoration: task.completed ? 'line-through' : 'none',
//               background: task.important ? 'rgba(248, 0, 0, 0.5)' : 'none',
//             }}
//           />
//           <input
//             type="checkbox"
//             className="checkBox"
//             checked={task.completed}
//             onChange={(event) =>
//               handleTaskChange(taskIndex, 'completed', event.target.checked)
//             }
//           />
//           <FontAwesomeIcon
//             icon={faStar}
//             className={`fa-regular ${task.important ? 'fa-solid' : ''}`}
//             onClick={() => handleTaskChange(taskIndex, 'important', !task.important)}
//           />
//           <FontAwesomeIcon icon={faTrash} onClick={() => handleTaskDelete(taskIndex)} />
//         </div>
//       ))
//     );
//   };
//   }
//   return (
//     <main>
//       <div className="box">
//         <div className="title">
//           <h1>Perso</h1>
//           <FontAwesomeIcon icon={faPlus} id="iconPlus" onClick={addTask} />
//         </div>
//         <div className="inputsBox" id="inputsBox">
//           {renderTasks()}
//         </div>
//       </div>
//     </main>
//   );
// };
 
// export default TodoList;
// import React, { useState, useEffect } from 'react';

// const ToDoList = () => {
//   // State for tasks
//   const [tasks, setTasks] = useState([]);

//   // State for new task input
//   const [newTask, setNewTask] = useState('');

//   // State for new task date
//   const [newTaskDate, setNewTaskDate] = useState(new Date());

//   // Get tasks from localStorage
//   useEffect(() => {
//     const storedTasks = JSON.parse(localStorage.getItem('recup')) || [];
//     setTasks(storedTasks);
//   }, []);

//   // Handle adding a new task
//    const addTask = () => {
//     if (newTask) {
//       const newTaskObject = {
//         text: newTask,
//         completed: false,
//         important: false,
//         date: newTaskDate,
//       };
//       setTasks([...tasks, newTaskObject]);
//       localStorage.setItem('recup', JSON.stringify([...tasks, newTaskObject]));
//       setNewTask('');
//     }
//   };

//   // Handle checking a task as completed
//   const checkTask = (index) => {
//     const newTasks = [...tasks];
//     newTasks[index].completed = !newTasks[index].completed;
//     setTasks(newTasks);
//     localStorage.setItem('recup', JSON.stringify(newTasks));
//   };

//   // Handle removing a task
//   const removeTask = (index) => {
//     const newTasks = [...tasks];
//     const removedTask = newTasks.splice(index, 1)[0];
//     const trashList = JSON.parse(localStorage.getItem('corbeille')) || [];
//     trashList.push(removedTask);
//     localStorage.setItem('corbeille', JSON.stringify(trashList));
//     setTasks(newTasks);
//     localStorage.setItem('recup', JSON.stringify(newTasks));
//   };

//   // Handle marking a task as important
//   const markImportant = (index) => {
//     const newTasks = [...tasks];
//     newTasks[index].important = !newTasks[index].important;
//     setTasks(newTasks);
//     localStorage.setItem('recup', JSON.stringify(newTasks));
//   };

//   // Handle date change for new task
//   const handleDateChange = (event) => {
//     setNewTaskDate(new Date(event.target.value));
//   };

// //   return (
// //     <main>
// //       <div className="box">
// //         <div className="title">
// //           <h1>Perso</h1>
// //           <FontAwesomeIcon icon={faPlus} id="iconPlus" onClick={addTask}/>
// //         </div>
// //         <div className="inputsBox" id="inputsBox">
// //           {tasks.map((task, index) => (
// //             <div key={index} className="inputs">
// //               <input
// //                 type="text"
// //                 value={task.text}
// //                 readOnly
// //                 className={task.completed ? 'completed' : ''}
// //               />
// //               <input
// //                 type="checkbox"
// //                 checked={task.completed}
// //                 onChange={() => checkTask(index)}
// //               />
// //               {/* <i
// //                 className={`fa-solid ${task.important ? 'fa-star' : 'fa-star-o'}`}
// //                 onClick={() => markImportant(index)}
// //               ></i> */}
// //               <FontAwesomeIcon
// //                 icon={faStar}
// //                 className={`fa-regular ${task.important ? 'fa-solid' : ''}`}
// //                 onClick={() => markImportant(index)}
// //               />
// //               <FontAwesomeIcon icon={faTrash}
// //                 onClick={() => removeTask(index)}
// //               />
// //               <span className="space"></span>
// //               <input
// //                 type="date"
// //                 value={task.date}
// //                 style={{ width: '60px', border: 'none' }}
// //                 className="inputDate"
// //                 readOnly
// //               />
// //             </div>
// //           ))}
// //         </div>
// //         <div className="newTask">
// //           <input
// //             type="text"
// //             placeholder="Saisissez votre tâche ici..."
// //             value={newTask}
// //             onChange={(event) => setNewTask(event.target.value)}
// //           />
// //           <input
// //             type="date"
// //             onChange={handleDateChange}
// //           />
// //           {/* <button onClick={addTask}>Ajouter</button> */}
// //         </div>
// //       </div>
// //     </main>
// //   );
// // };
// // Render tasks
//   const renderTasks = () => {
//     return (
//       tasks.map((task, taskIndex) => (
//         <div className="inputs" key={taskIndex}>
//           <input
//             type="text"
//             className="inputText"
//             placeholder="Saisissez votre tâche ici..."
//             value={task.task}
//             onChange={(event) =>
//               handleTaskChange(taskIndex, 'task', event.target.value)
//             }
//             style={{
//               textDecoration: task.completed ? 'line-through' : 'none',
//               background: task.important ? 'rgba(248, 0, 0, 0.5)' : 'none',
//             }}
//           />
//           <input
//             type="checkbox"
//             className="checkBox"
//             checked={task.completed}
//             onChange={(index) => 
//               checkTask = (index)
//             }
//           />
//           <FontAwesomeIcon
//             icon={faStar}
//             className={`fa-regular ${task.important ? 'fa-solid' : ''}`}
//             onClick={() => handleTaskChange(taskIndex, 'important', !task.important)}
//           />
//           <FontAwesomeIcon icon={faTrash} onClick={() => handleTaskDelete(taskIndex)} />
//         </div>
//       ))
//     );
//   };
  
//   return (
//     <main>
//       <div className="box">
//         <div className="title">
//           <h1>Perso</h1>
//           <FontAwesomeIcon icon={faPlus} id="iconPlus" onClick={addTask} />
//         </div>
//         <div className="inputsBox" id="inputsBox">
//           {renderTasks()}
//         </div>
//       </div>
//     </main>
//   );
// };

// export default ToDoList;
//-------------------blackbox

// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import './todolist.css';
// import { faPlus, faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
// // import { faDate } from '@fortawesome/free-regular-svg-icons';

// const Todolist = () => {
//  const [inputs, setInputs] = useState([]);
//  const [input, setInput] = useState('');
//  const [corbeille, setCorbeille] = useState([]);

//  useEffect(() => {
//     const savedInputs = JSON.parse(localStorage.getItem('inputs')) || [];
//     const savedCorbeille = JSON.parse(localStorage.getItem('corbeille')) || [];

//     setInputs(savedInputs);
//     setCorbeille(savedCorbeille);
//  }, []);

// //  const handleInputChange = (e) => {
// //     setInput(e.target.value);
// //  };

//  const addTodo = () => {
//     if (input.trim()) {
//       const newTodo = {
//         text: input,
//         completed: false,
//         important: false,
//         date: new Date().toISOString().slice(0, 10),
//       };

//       setInputs([...inputs, newTodo]);
//       setInput('');
//     }
//  };

//  const removeTodo = (index) => {
//     const todo = inputs[index];
//     const newList = inputs.filter((_, i) => i !== index);

//     setInputs(newList);
//     setCorbeille([...corbeille, todo]);

//     localStorage.setItem('corbeille', JSON.stringify(corbeille));
//  };

//  const handleCheck = (index) => {
//     const updatedTodos = inputs.map((todo, i) => {
//       if (i === index) {
//         todo.completed = !todo.completed;
//       }
//       return todo;
//     });

//     setInputs(updatedTodos);
//  };

//  const handleImportant = (index) => {
//     const updatedTodos = inputs.map((todo, i) => {
//       if (i === index) {
//         todo.important = !todo.important;
//       }
//       return todo;
//     });

//     setInputs(updatedTodos);
//  };

//  useEffect(() => {
//     localStorage.setItem('inputs', JSON.stringify(inputs));
//  }, [inputs]);

//  return (
//     <div className="App">
//       <div className="box">
//         <div className="title">
//           <h1>Perso</h1>
//           <button onClick={addTodo}>
//             <FontAwesomeIcon icon={faPlus} />
//           </button>
//         </div>
//         <div className="inputsBox">
//           {inputs.map((todo, index) => (
//             <div className="input" key={index}>
//               <input
//                 type="text"
//                 value={todo.text}
//                 readOnly
//                 className={todo.completed ? 'completed' : ''}
//                 style={{
//                  background: todo.important ? 'rgba(248, 0, 0, 0.5)' : '',
//                 }}
//               />
//               <input type="checkbox" checked={todo.completed} onChange={() => handleCheck(index)} />
//               <FontAwesomeIcon
//                 icon={todo.important ? faStar : faStar}
//                 onClick={() => handleImportant(index)}
//               />
//               <button onClick={() => removeTodo(index)}>
//                 <FontAwesomeIcon icon={faTrash} />
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//  );
// };

// export default Todolist;
//----------blackbox essayer de regler le prblm du btn +
// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import './todolist.css';
// import { faPlus, faStar, faTrash } from '@fortawesome/free-solid-svg-icons';

// const Todolist = () => {
//   //localStorage.clear();
//  const [inputs, setInputs] = useState([]);
//  const [input, setInput] = useState('');
//  const [corbeille, setCorbeille] = useState([]);
//  const [formVisible, setFormVisible] = useState(false);

//  useEffect(() => {
//     const savedInputs = JSON.parse(localStorage.getItem('inputs')) || [];
//     const savedCorbeille = JSON.parse(localStorage.getItem('corbeille')) || [];

//     setInputs(savedInputs);
//     setCorbeille(savedCorbeille);
//  }, []);

//  const addTodo = () => {
//     if (input.trim()) {
//       const newTodo = {
//         text: input,
//         completed: false,
//         important: false,
//         date: new Date().toISOString().slice(0, 10),
//       };
//       setInputs([...inputs, newTodo]);
//       setInput('');
//     }
//  };

//  const removeTodo = (index) => {
//     const todo = inputs[index];
//     const newList = inputs.filter((_, i) => i !== index);

//     setInputs(newList);
//     setCorbeille([...corbeille, todo.text]);
//     localStorage.setItem('corbeille', JSON.stringify(corbeille));
//  };

//  const handleCheck = (index) => {
//     const updatedTodos = inputs.map((todo, i) => {
//       if (i === index) {
//         todo.completed = !todo.completed;
//       }
//       return todo;
//     });

//     setInputs(updatedTodos);
//  };

//  const handleImportant = (index) => {
//     const updatedTodos = inputs.map((todo, i) => {
//       if (i === index) {
//         todo.important = !todo.important;
//       }
//       return todo;
//     });

//     setInputs(updatedTodos);
//  };

//  useEffect(() => {
//     localStorage.setItem('inputs', JSON.stringify(inputs));
//  }, [inputs]);
// // useEffect(() => {
// //   const savedInputs = JSON.parse(localStorage.getItem('inputs')) || [];
// //   const savedCorbeille = JSON.parse(localStorage.getItem('corbeille')) || [];

// //   setInputs(savedInputs);
// //   setCorbeille(savedCorbeille);
// // }, []);

//  return (
//     <div className="App">
//       <div className="box">
//         <div className="title">
//           <h1>Perso</h1>
//           <button onClick={() => setFormVisible(!formVisible)}>
//             <FontAwesomeIcon icon={faPlus} onClick={addTodo} />
//           </button>
//         </div>
//          {formVisible && (
//           <form onSubmit={(e) => {
//             e.preventDefault();
//             addTodo();
//           }}> 
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//             />
//              <button type="submit">Ajouter</button>
//           </form>
//         )} 
//         <div className="inputsBox">
//           {inputs.map((todo, index) => (
//             <div className="input" key={index}>
//               <input
//                 type="text"
//                 value={todo.text}
//                 readOnly
//                 className={todo.completed ? 'completed' : ''}
//                 style={{
//                  background: todo.important ? 'rgba(248, 0, 0, 0.5)' : '',
//                 }}
//               />
//               <input type="checkbox" checked={todo.completed} onChange={() => handleCheck(index)} />
//               <FontAwesomeIcon
//                 icon={todo.important ? faStar : faStar}
//                 onClick={() => handleImportant(index)}
//               />
//               <button onClick={() => removeTodo(index)}>
//                 <FontAwesomeIcon icon={faTrash} />
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//  );
// };

// export default Todolist;
//------------- un autre essaie 
import React, { useState, useEffect } from 'react';
import './todolist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
// import { faPlus, faStar, faTrash } from '@fortawesome/free-solid-svg-icons';

function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [dates, setDates] = useState([]);
  const [corbeille, setCorbeille] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('recup')) || [];
    const storedDates = JSON.parse(localStorage.getItem('dates')) || [];
    const storedCorbeille = JSON.parse(localStorage.getItem('corbeille')) || [];

    setTasks(storedTasks);
    setDates(storedDates);
    setCorbeille(storedCorbeille);
  }, []);

  useEffect(() => {
    localStorage.setItem('recup', JSON.stringify(tasks));
    localStorage.setItem('dates', JSON.stringify(dates));
    localStorage.setItem('corbeille', JSON.stringify(corbeille));
  }, [tasks, dates, corbeille]);

  const handleAddTask = () => {
    const newTask = {
      text: '',
      completed: false,
      important: false,
      date: '',
    };
    setTasks([...tasks, newTask]);
  };

  const handleChangeTask = (index, field, value) => {
    const updatedTasks = [...tasks];
    updatedTasks[index][field] = value;
    setTasks(updatedTasks);

    if (field === 'completed' && value) {
      updatedTasks[index].textDecoration = 'line-through';
      updatedTasks[index].background = 'rgb(241, 240, 240)';
    } else {
      updatedTasks[index].textDecoration = 'none';
      updatedTasks[index].background = 'none';
    }

    if (field === 'important') {
      if (value) {
        updatedTasks[index].background = 'rgba(248, 0, 0, 0.5)';
      } else {
        updatedTasks[index].background = 'none';
      }
    }

    if (field === 'date') {
      updatedTasks[index].date = value;

      const today = new Date();
      const selectedDate = new Date(value);

      if (selectedDate.getDate() === today.getDate() &&
        selectedDate.getMonth() === today.getMonth() &&
        selectedDate.getFullYear() === today.getFullYear()) {
        dates.push(updatedTasks[index].text);
        setDates(dates);
      }
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    const updatedCorbeille = [...corbeille];

    const deletedTask = updatedTasks.splice(index, 1)[0];
    updatedCorbeille.push(deletedTask.text);

    setTasks(updatedTasks);
    setCorbeille(updatedCorbeille);

    localStorage.setItem('corbeille', JSON.stringify(corbeille));
  };

  return (
    <div className="App">
      <main>
        <div className="box">
          <div className="title">
            <h1>Perso</h1>
            <FontAwesomeIcon icon={faPlus} size="lg" onClick={handleAddTask} />
          </div>
          <div className="inputsBox">
            {tasks.map((task, index) => (
              <div className="inputs" key={index}>
                <input
                  type="text"
                  placeholder="Saisissez votre tâche ici..."
                  className="inputText"
                  value={task.text}
                  onChange={(e) => handleChangeTask(index, 'text', e.target.value)}
                  style={{ textDecoration: task.textDecoration, background: task.background }}
                />
                <input
                  type="checkbox"
                  className="checkBox"
                  checked={task.completed}
                  onChange={(e) => handleChangeTask(index, 'completed', e.target.checked)}
                />
                <FontAwesomeIcon
                  icon={task.important ? faStar : faStar}
                  className="starIcon"
                  onDoubleClick={() => handleChangeTask(index, 'important', true)}
                  onClick={() => handleChangeTask(index, 'important', false)}
                />
                <input
                  type="date"
                  value={task.date}
                  onChange={(e) => handleChangeTask(index, 'date', e.target.value)}
                  style={{ width: 60, border: 'none' }}
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  className="trashIcon"
                  size="lg"
                  onClick={() => handleDeleteTask(index)}
                />
                <span className="space" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
 };
 export default Todolist;
