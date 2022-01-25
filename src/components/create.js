// User Interface
const container = document.getElementById('main-container');
const form = document.getElementById('main-form');
let ID;
let deleteBtn;

//constructor/factories

let todoList = [];

const todoConstructor = ({title, date, description, priority, ID}) => {
    return {title, date, description, priority, ID}
}

const getTodoListInfo = (event) => {
    const title = event.target.item.value;
    const date = event.target.date.value;
    const description = event.target.description.value;
    const priority = event.target.priority.value;
    ID = new Date().toISOString();

    return {title, date, description, priority, ID}
}



function addItemToList(todoItem) {
    todoList.push(todoItem);
}

function removeItem(ID) {
    console.log(ID);
    todoList = todoList.filter((item) => item.ID !== ID);
}


//generated todoItem Bar

function userSuppliedInfo (todoItem) {
    const itemBar = document.createElement('div');
    container.appendChild(itemBar);
    itemBar.setAttribute('id', ID);

    const itemTitle = document.createElement('h2');
    itemBar.appendChild(itemTitle);

    const itemDate = document.createElement('p');
    itemBar.appendChild(itemDate);

    const itemDescription = document.createElement('p');
    itemBar.appendChild(itemDescription);

    const itemPriority = document.createElement('p');
    itemBar.appendChild(itemPriority);

    deleteBtn = document.createElement('button');
    itemBar.appendChild(deleteBtn);
    deleteBtn.setAttribute('id', 'deleteBtn');

    itemTitle.textContent = todoItem.title;
    itemDate.textContent = todoItem.date;
    itemDescription.textContent = todoItem.description;
    itemPriority.textContent = todoItem.priority;
    deleteBtn.textContent = 'delete';
    
    deleteBtn.addEventListener('click', (event) => {
        removeItem(itemBar.id);
        console.log(todoList)
        itemBar.textContent = ''; 
    })
}




export const create = () => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const todoItem = todoConstructor(getTodoListInfo(event));
        userSuppliedInfo(todoItem);
        addItemToList(todoItem);
        console.log(todoList)
        
    })
}


