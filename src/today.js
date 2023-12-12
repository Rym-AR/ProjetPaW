// import React, { useState, useEffect } from 'react';
// import './today.css'


// const Today = () => {
//   // State for today's tasks
//   const [tasks, setTasks] = useState([]);

//   // Get tasks from localStorage
//   useEffect(() => {
//     const storedTasks = JSON.parse(localStorage.getItem('dates')) || [];
//     setTasks(storedTasks);
//   }, []);

//   // Handle adding a new task
//   const addTask = (event) => {
//     event.preventDefault();
//     const newTask = event.target.elements.task.value;
//     if (newTask) {
//       setTasks([...tasks, newTask]);
//       localStorage.setItem('dates', JSON.stringify([...tasks, newTask]));
//     }
//     event.target.reset();
//   };

//   // Handle checking a task as completed
//   const checkTask = (index) => {
//     const newTasks = [...tasks];
//     newTasks[index].completed = !newTasks[index].completed;
//     setTasks(newTasks);
//     localStorage.setItem('dates', JSON.stringify(newTasks));
//   };

//   // Handle removing a task
//   const removeTask = (index) => {
//     const newTasks = [...tasks];
//     newTasks.splice(index, 1);
//     setTasks(newTasks);
//     localStorage.setItem('dates', JSON.stringify(newTasks));
//   };

//   // Handle marking a task as important
//   const markImportant = (index) => {
//     const newTasks = [...tasks];
//     newTasks[index].important = !newTasks[index].important;
//     setTasks(newTasks);
//     localStorage.setItem('dates', JSON.stringify(newTasks));
//   };

//   return (
//     <main>
//       <div className="box">
//         <div className="title">
//           <h1>Aujourd'hui</h1>
//         </div>
//         <form onSubmit={addTask}>
//           <input
//             type="text"
//             name="task"
//             placeholder="Ajouter une tâche"
//           />
//           <button type="submit">Ajouter</button>
//         </form>
//         <div className="parent">
//           {tasks.map((task, index) => (
//             <div key={index} className="task">
//               <input
//                 type="checkbox"
//                 checked={task.completed}
//                 onChange={() => checkTask(index)}
//               />
//               <input
//                 type="text"
//                 value={task.text}
//                 readOnly
//                 className={task.completed ? 'completed' : ''}
//               />
//               <i
//                 className={`fa-solid ${task.important ? 'fa-star' : 'fa-star-o'}`}
//                 onClick={() => markImportant(index)}
//               ></i>
//               <i
//                 className="fa-solid fa-trash"
//                 onClick={() => removeTask(index)}
//               ></i>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Today;
//----------blackBox
import React, { useState, useEffect } from 'react';
import './today.css';
// import '../css/all.min.css';

const Today = () => {
 const [today, setToday] = useState([]);
 const [input, setInput] = useState('');

 useEffect(() => {
    const todayData = JSON.parse(localStorage.getItem('dates')) || [];
    setToday(todayData);
 }, []);

//  const addTask = (e) => {
//     e.preventDefault();
//     if (input !== '') {
//       const newToday = [...today, input];
//       setToday(newToday);
//       setInput('');
//       localStorage.setItem('dates', JSON.stringify(newToday));
//     }
//  };

 const deleteTask = (index) => {
    const newToday = today.filter((_, i) => i !== index);
    setToday(newToday);
    localStorage.setItem('dates', JSON.stringify(newToday));
 };

 const completeTask = (index) => {
    const newToday = [...today];
    newToday[index] = newToday[index].replace('inputText', 'inputTextLineThrough');
    setToday(newToday);
 };

 const importantTask = (index) => {
    const newToday = [...today];
    newToday[index] = newToday[index].replace('background:none;', 'background:rgba(248, 0, 0, 0.5);');
    setToday(newToday);
 };

 const notImportantTask = (index) => {
    const newToday = [...today];
    newToday[index] = newToday[index].replace('background:rgba(248, 0, 0, 0.5);', 'background:none;');
    setToday(newToday);
 };

 return (
    <div className="box">
      <div className="title">
        <h1>Aujourd'hui</h1>
      </div>
      <div className="parent" id="parent">
        {today.map((task, index) => (
          <div key={index}>
            <span
              className={task.includes('inputTextLineThrough') ? 'inputTextLineThrough' : 'inputText'}
              onClick={() => importantTask(index)}
            >
              {task}
            </span>
            <i className="fas fa-star" onClick={() => notImportantTask(index)} />
            <i className="fas fa-check" onClick={() => completeTask(index)} />
            <i className="fas fa-trash" onClick={() => deleteTask(index)} />
          </div>
        ))}
      </div>
      {/* <form onSubmit={addTask}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Ajouter</button>
      </form> */}
    </div>
 );
};

export default Today;
