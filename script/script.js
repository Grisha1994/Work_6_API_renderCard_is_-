const users = document.querySelector('.users');

let usersArray = [];

function getUsers(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function(res){
        return res.json()
    })
    .then(function(json){
        usersArray = json;
        renderCard();
    })
}

getUsers();    

function renderCard(){
    usersArray.map(function({userId, id, title, completed}){
        const userCard = document.createElement('div');
        const userIdElem = document.createElement('p');
        const idElem = document.createElement('p');
        const titleElem = document.createElement('p');
        const completedElem = document.createElement('p');

        userIdElem.innerText = `User Id: ${userId}`;
        idElem.innerText = `Id: ${id}`;
        titleElem.innerText = `Title: ${title}`;
        completedElem.innerText = `Completed: ${completed}`;

        userCard.classList.add('card');

        userCard.append(userIdElem, idElem, titleElem, completedElem);
        users.append(userCard);
    })
}

