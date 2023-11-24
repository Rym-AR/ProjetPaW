// const ajouterCategorie = () => {
//   const inputElement = document.getElementById('input');
//   if (inputElement) {
//     const valeur = inputElement.value.trim();
//     if (valeur !== '') {
//       const li = document.createElement('li');
//       li.classList.add('cat');

//       const recup = document.createTextNode(valeur);
//       li.appendChild(recup);

//       // Add onClick event handler to redirect to todolist.js
//       li.addEventListener('click', () => {
//         window.location.href = '/todolist';
//       });

//       const catList = document.getElementById('catList');
//       catList.appendChild(li);
//       inputElement.value = '';
      
//     }
//   }
// };
 //import React from "react";
//  const transformContenu = (contenu) =>{
//     const h1=document.createElement("h1");
//     h1.textContent= contenu;
//     document.title.appendChild(h1);
//    };
// function transformContenu (contenu){
//     const h1=document.createElement("h1");
//     h1.textContent= contenu;
//     document.title.appendChild(h1);
// }
function transformContenu(contenu) {
    const h1 = document.createElement("h1");
    h1.textContent = contenu;
    document.title = h1.textContent;
    
  }
  