
    // var trasrecup = JSON.parse(localStorage.getItem('recup')) || [];

    // for (var i = 0; i < trasrecup.length; i++) {
    //  const div = document.createElement("div");
    // const inputText= document.createElement('input');
    // inputText.type='text';
    // inputText.value = trasrecup[i];
    // //  inputText.placeholder ="saisissez votre tache ici..";
    // inputText.classList.add('inputText');
    // //creer le checkbox pour les tache accomplie
    // const checkBox=document.createElement('input');
    // checkBox.type='checkbox';
    
    // checkBox.classList.add('checkBox');
    // //creer l'icon important
    // const starIcon = document.createElement('i');
    // starIcon.classList.add('fa-regular','fa-star');
    // //creer l'icone de suppression
    // const trashIcon = document.createElement('i');
    // trashIcon.classList.add('fa-solid','fa-trash');
    // //ajouter input date
    // const inputDate = document.createElement('input');
    // inputDate.type = 'date'
    // inputDate.style.width = '60px'; 
    // inputDate.style.border="none"
    // inputDate.classList.add('inputDate');
    // var datesArray = localStorage.getItem('dates') ? JSON.parse(localStorage.getItem('dates')) : [];
    // // Ajoutez un écouteur d'événements "change" à l'élément d'entrée de date
    // inputDate.addEventListener('change', function() {
    // // Obtenez la date sélectionnée par l'utilisateur
    // var selectedDate = new Date(inputDate.value);
    
    // // Obtenez la date d'aujourd'hui
    // var today = new Date();
    
    // // Vérifiez si la date sélectionnée est la date d'aujourd'hui
    // if (selectedDate.getDate() === today.getDate() &&
    //    selectedDate.getMonth() === today.getMonth() &&
    //    selectedDate.getFullYear() === today.getFullYear()) {
    //      datesArray.push(inputText.value);
    //  // Stockez la date dans le localStorage
    //  localStorage.setItem('dates', JSON.stringify(datesArray));
    // }
    // });
    
    // var valeur = inputText.value
    // trashIcon.id = 'btnSup' + valeur;
    // checkBox.id = 'btn' + valeur;
    // starIcon.id= 'b'+valeur;
    // checkBox.addEventListener("click",check)
    //   // Attach the supprimer function to the button
    // trashIcon.addEventListener('click', supprimer);
    // var spacer = document.createElement('span');
    // spacer.className = 'space';
    // //tt relier 
    // div.appendChild(inputText);
    // div.appendChild(checkBox);
    
    // div.appendChild(starIcon);
    
    // div.appendChild(trashIcon);
    // div.appendChild(spacer);
    // div.appendChild(inputDate);
    // const inputsBox=document.getElementById("inputsBox");
    // inputsBox.appendChild(div);
    // //  checkBox.addEventListener("change",check)
    // function check(){
    // const valeure=inputText.value;
    // if(checkBox.checked && valeure!=""){ 
    //   console.log(valeure);
    //   inputText.style.textDecoration="line-through";
    //   inputText.style.background="rgb(241, 240, 240)";
    // }
    // else{
    //   inputText.style.textDecoration="none"
    //   inputText.style.background="none"
    // }
    // }
    // starIcon.addEventListener('dblclick',important)
    // function important() {
    //  starIcon.classList.remove('fa-regular','fa-star');
    //  starIcon.classList.add('fa-solid','fa-star');
    //  inputText.style.background="rgba(248, 0, 0, 0.5)";
    // }
    // starIcon.addEventListener('click',noImportant)
    // function noImportant(){
    // starIcon.classList.remove('fa-solid','fa-star');
    // starIcon.classList.add('fa-regular','fa-star');   
    //  inputText.style.background="none"
    // }
    
    // }
    // function ajouterTache(){
      
    
    //  //creer le div qui contient input et les boutons
    //  const div = document.createElement("div");
    //  div.classList.add('inputs');
    //  //creer input sur lequel on saisie la tache
    //  const inputText= document.createElement('input');
    //  inputText.type='text';
    //  inputText.placeholder ="saisissez votre tache ici..";
    //  inputText.classList.add('inputText');
    //  //creer le checkbox pour les tache accomplie
    //  const checkBox=document.createElement('input');
    //  checkBox.type='checkbox';
    //  checkBox.classList.add('checkBox');
    //  //creer l'icon important
    //  const starIcon = document.createElement('i');
    //  starIcon.classList.add('fa-regular','fa-star');
    //  //creer l'icone de suppression
    //  const trashIcon = document.createElement('i');
    //  trashIcon.classList.add('fa-solid','fa-trash');
    // //ajouter input date
    //  const inputDate = document.createElement('input');
    //  inputDate.type = 'date';
    //  inputDate.style.width = '60px'; 
    //  inputDate.style.border="none"
    
    //  inputDate.classList.add('inputDate');
    //  var datesArray = localStorage.getItem('dates') ? JSON.parse(localStorage.getItem('dates')) : [];
    //  // Ajoutez un écouteur d'événements "change" à l'élément d'entrée de date
    // inputDate.addEventListener('change', function() {
    //  // Obtenez la date sélectionnée par l'utilisateur
    //  var selectedDate = new Date(inputDate.value);
     
    //  // Obtenez la date d'aujourd'hui
    //  var today = new Date();
    
    //  // Vérifiez si la date sélectionnée est la date d'aujourd'hui
    //  if (selectedDate.getDate() === today.getDate() &&
    //      selectedDate.getMonth() === today.getMonth() &&
    //      selectedDate.getFullYear() === today.getFullYear()) {
    //        datesArray.push(inputText.value);
    //    // Stockez la date dans le localStorage
    //    localStorage.setItem('dates', JSON.stringify(datesArray));
    //  }
    // });
    
     
    //  var valeur = inputText.value
    //  trashIcon.id = 'btnSup' + valeur;
    //  checkBox.id = 'btn' + valeur;
    //  starIcon.id= 'b'+valeur;
    //  checkBox.addEventListener("click",check)
    //    // Attach the supprimer function to the button
    //  trashIcon.addEventListener('click', supprimer);
    //  var spacer = document.createElement('span');
    //  spacer.className = 'space';
    //  //tt relier 
    //  div.appendChild(inputText);
    //  div.appendChild(checkBox);
    //  div.appendChild(starIcon);
    //  div.appendChild(trashIcon);
    //  div.appendChild(spacer);
    //  div.appendChild(inputDate);
    //  const inputsBox=document.getElementById("inputsBox");
    //  inputsBox.appendChild(div);
    // //  checkBox.addEventListener("change",check)
    // function check(){
    //  const valeure=inputText.value;
    //  if(checkBox.checked && valeure!=""){ 
    //    console.log(valeure);
    //    inputText.style.textDecoration="line-through";
    //    inputText.style.background="rgb(241, 240, 240)";
    //  }
    //  else{
    //    inputText.style.textDecoration="none"
    //    inputText.style.background="none"
    //  }
    // }
    // starIcon.addEventListener('dblclick',important)
    // function important() {
    //   starIcon.classList.remove('fa-regular','fa-star');
    //   starIcon.classList.add('fa-solid','fa-star');
    //   inputText.style.background="rgba(248, 0, 0, 0.5)";
    // }
    // starIcon.addEventListener('click',noImportant)
    // function noImportant(){
    //  starIcon.classList.remove('fa-solid','fa-star');
    //  starIcon.classList.add('fa-regular','fa-star');   
    //   inputText.style.background="none"
    
    // }
    // }
    // document.getElementById("iconPlus").addEventListener("click", ajouterTache);
    
    // function supprimer() {
    //    // Get the tasks list container
    //    var listeTaches = document.getElementById('inputsBox');  
    
    //    // Get the element to remove
    //    var elementASupprimer = this.parentNode;
    
    //    // Check if the tasks list container contains the element to remove
    //    if (listeTaches.contains(elementASupprimer)) {
    //        // Remove the element from the tasks list container
    //        listeTaches.removeChild(elementASupprimer);
    //    }
    
    //    var currentList = JSON.parse(localStorage.getItem("corbeille")) || [];
    //    var valeurElement = elementASupprimer.querySelector('input').value;
    //    currentList.push(valeurElement);
    
    //    localStorage.setItem('corbeille', JSON.stringify(currentList));
    //    var index = trasrecup.indexOf(valeurElement);
    //   if (index !== -1) {
    //       trasrecup.splice(index, 1);
    //   }
    
    //   // Update the localStorage with the new list of tasks for the key "corbeille"
    //   localStorage.setItem('recup', JSON.stringify(trasrecup));
      
    // }

