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
// function transformContenu(contenu) {
//     const h1 = document.createElement("h1");
//     h1.textContent = contenu;
//     document.title = h1.textContent;
    
//   }
//--------------------trash.js
// coust trash(){
// const trash = () => {
// // Récupérer les données du localStorage
// var trashData = JSON.parse(localStorage.getItem('corbeille')) || [];

// // Créer autant de conteneurs que de données
// for (var i = 0; i < trashData.length; i++) {
//  // Créer un nouveau conteneur
//  var container = document.createElement('div');
//  container.classList.add('container');

//  // Créer un nouvel div
//  var div = document.createElement('div');
//  div.classList.add('div');
//  div.textContent = trashData[i];

//  var restoreIcon = document.createElement('i');
//  restoreIcon.classList.add('fa-solid','fa-arrow-rotate-left');
//  // Créer un icône de corbeille
//  var trashIcon = document.createElement('i');
//  trashIcon.classList.add('fa-solid','fa-trash');


 
//  // Ajouter le div et l'icône à un élément parent (par exemple un div)
//  container.appendChild(div);
//  container.appendChild(restoreIcon);
//  container.appendChild(trashIcon);
// //  document.getElementById('parent').appendChild(container);
// const parentElement = document.querySelector('#parent');
// if (parentElement) {
//   // Append the container to the parent element
//   parentElement.appendChild(container);
// }
//  trashIcon.addEventListener('click', supprimer);
//  restoreIcon.addEventListener('click',recup)
// }


//  const supprimer = () =>  {
   
//     // Get the tasks list container
//     var listeTaches = document.getElementById('parent');  

//     // Get the element to remove
//     var elementASupprimer = this.parentNode;

//     // Check if the tasks list container contains the element to remove
//     if (listeTaches.contains(elementASupprimer)) {
//         // Remove the element from the tasks list container
//         listeTaches.removeChild(elementASupprimer);
//     }
    
//    // Get the value of the removed element
//    var valeurElement = elementASupprimer.innerText;

//    // Get the current list of tasks from the localStorage with the key "corbeille"
//    var trashData = JSON.parse(localStorage.getItem('corbeille')) || [];

//    // Remove the value of the removed element from the trashData list
//    var index = trashData.indexOf(valeurElement);
//    if (index !== -1) {
//        trashData.splice(index, 1);
//    }

//    // Update the localStorage with the new list of tasks for the key "corbeille"
//    localStorage.setItem('corbeille', JSON.stringify(trashData));

// }
//  const recup = () => {
//      // Get the tasks list container
//      var listeTaches = document.getElementById('parent');  

//      // Get the element to remove
//      var elementArest = this.parentNode;
 
//      // Check if the tasks list container contains the element to remove
//      if (listeTaches.contains(elementArest)) {
//          // Remove the element from the tasks list container
//          listeTaches.removeChild(elementArest);
//      }
 
//      var currentListe = JSON.parse(localStorage.getItem("recup")) || [];
//      var valeurElemente = elementArest.querySelector('div').innerText;
//      currentListe.push(valeurElemente);
 
//      localStorage.setItem('recup', JSON.stringify(currentListe));
//       // Get the value of the removed element
//    var valeuree = elementArest.innerText;

//    // Get the current list of tasks from the localStorage with the key "corbeille"
//    var trashData = JSON.parse(localStorage.getItem('corbeille')) || [];

//    // Remove the value of the removed element from the trashData list
//    var index = trashData.indexOf(valeuree);
//    if (index !== -1) {
//        trashData.splice(index, 1);
//    }

//    // Update the localStorage with the new list of tasks for the key "corbeille"
//    localStorage.setItem('corbeille', JSON.stringify(trashData));
// }

// };
// export  default trash;