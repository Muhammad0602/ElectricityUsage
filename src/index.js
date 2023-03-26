import './style.css';
import { usersInfo } from '../usersInfo';
import { Temporal } from '@js-temporal/polyfill';

const mainContainer = document.querySelector('.main-container');
const users = document.querySelector('#users');



// function chooseDay() {
//     const today = Temporal.Now.plainDateISO().toString();
//     const index = 0;
//     if(today === "2023-03-27") { index = 1;} 
//     else if (today === "2023-03-28") { index = 2};
//     return index;
// }

users.addEventListener('change', chooseUser);

const article = ((user, id) => {

    const today = Temporal.Now.plainDateISO().toString();
    let index;
    switch(today) {
        case "2023-03-27":
            index = 1;
            break;
        case "2023-03-28":
            index = 2;
            break;
        case "2023-03-29":
            index = 3;
            break;
        case "2023-03-30":
            index = 4;
            break;
        case "2023-03-31":
            index = 5;
            break;   
        default: 
           index = 0;
           break;    
    }

    return `
     <article class="container" id="${id}">
       <div class="address">Address:${user.Address}</div>
       <div class="name">FullName: ${user['Full Name']}</div>
       <div class="date">Date: ${user.Date}</div>
       <div class="reading">Reading: ${user.Reading[index]}</div>
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
        switch(e.target.value) {
        case 'user1': 
            mainContainer.innerHTML = article(usersInfo[0], 0)
           break;``
        case 'user2': 
            mainContainer.innerHTML = article(usersInfo[1],1)
           break;
        case 'user3': 
            mainContainer.innerHTML = article(usersInfo[2], 2)
           break;
        
        default:
            renderAll();
            break;
        }         
}
