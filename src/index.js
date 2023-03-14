import './style.css';
import { Temporal } from '@js-temporal/polyfill';


const now = Temporal.Now.plainDateISO();

let usersInfo = [
    {
        Address: "Sino1, kuch.J.Rasulov, b. 67/7, u. 60",
        "Full Name": "Davlatov Davlatali",
        Date: now,
        Reading: 4536
    },
    {
        Address: "Sino1, kuch.J.Rasulov, b. 67/7, u. 63",
        "Full Name": "Sodikov Bahrom",
        Date: now,
        Reading: 4265
    },
    {
        Address: "Sino1, kuch.J.Rasulov, b. 67/7, u. 65",
        "Full Name": "Pirov Yosh",
        Date: now,
        Reading: 2876
    }

]
const mainContainer = document.querySelector('.main-container');
const users = document.querySelector('#users');

users.addEventListener('change', chooseUser);

const article = ((user, id) => {
    return `
     <article class="container" id="${id}">
       <div class="address">Address:${user.Address}</div>
       <div class="name">FullName: ${user['Full Name']}</div>
       <div class="date">Date: ${user.Date}</div>
       <div class="reading">Reading: ${user.Reading}</div>
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
           break;
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
