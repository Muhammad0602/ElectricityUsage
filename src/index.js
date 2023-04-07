import './style.css';
import { usersInfo } from './usersInfo.js';
import popup from './popup.js';

const mainContainer = document.querySelector('.main-container');
// const users = document.querySelector('#users');
const logBtn = document.querySelector('#log-btn')
const overlay = document.querySelector('#overlay');
const text = document.querySelector('#article');

// users.addEventListener('change', chooseUser);
logBtn.addEventListener('click', () => {
   popup();
   overlay.classList.add('active');
   const closeBtn = document.getElementById("close-btn");
   const model = document.querySelector('.modal');

   closeBtn.addEventListener('click', () => {
      document.body.removeChild(model);
      overlay.classList.remove('active');
   })

   const form = document.querySelector('#login-form'); 
   form.addEventListener('submit', (e) => {
     e.preventDefault();
     const idInput = document.querySelector('#modal-input');
     chooseUser(idInput);
     document.body.removeChild(model);
     overlay.classList.remove('active');
     mainContainer.style.display = "flex";
     text.style.display = 'none';
})



});

const article = ((user, id) => {
    const today = new Date().getUTCDate();
   
    return `
     <article class="container" id="${id}">
       <div class="info">Personal Account: <p>${user.account}</p></div>
       <div class="info address">Address: <p>${user.Address}</p></div>
       <div class="info">Full Name: <p>${user['Full Name']}</p></div>
       <div class="info">Date: <p>${user.Date}</p></div>
       <div class="info">Reading: <p>${user.Reading[today-1]}</p></div>
     </article>
     `
 })

// const renderAll = () => {
//     mainContainer.innerHTML = usersInfo.map((user, index) => {
//         return article(user, index);
//     }).join('');

// }
// renderAll();

function chooseUser(e) {
        switch(e.value) {
        case '111222333': 
            mainContainer.innerHTML = article(usersInfo[0], 0)
           break;
        case '111222334': 
            mainContainer.innerHTML = article(usersInfo[1],1)
           break;
        case '111222335': 
            mainContainer.innerHTML = article(usersInfo[2], 2)
           break;
        
        default:
            // renderAll();
            mainContainer.innerHTML = article(usersInfo[0], 0)
            break;
        }         
}
