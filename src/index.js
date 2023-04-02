import './style.css';
import { usersInfo } from './usersInfo.js';
import popup from './popup.js';

const mainContainer = document.querySelector('.main-container');
// const users = document.querySelector('#users');
const logBtn = document.querySelector('#log-btn')
const overlay = document.querySelector('#overlay');

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
})



});

const article = ((user, id) => {
    const today = new Date().getUTCDate();
   
    return `
     <article class="container" id="${id}">
       <div class="account">Personal Account: ${user.account}</div>
       <div class="address">Address:${user.Address}</div>
       <div class="name">Full Name: ${user['Full Name']}</div>
       <div class="date">Date: ${user.Date}</div>
       <div class="reading">Reading: ${user.Reading[today-1]}</div>
     </article>
     `
 })

const renderAll = () => {
    mainContainer.innerHTML = usersInfo.map((user, index) => {
        return article(user, index);
    }).join('');

}
renderAll();

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
            renderAll();
            break;
        }         
}
