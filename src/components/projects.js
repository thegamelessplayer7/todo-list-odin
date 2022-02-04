import { create } from './components/create.js';



create();


const createList = document.getElementById('create-btn');

/*

// User Interface
const container = document.getElementById('main-container');
// const contentContainer = document.createElement('div');
// container.appendChild(contentContainer);
const form = document.getElementById('main-form');
// const projectForm = document.getElementById('project-list-form');
let ID;
let deleteBtn;
let itemBar;
let listName;
let sidebarModule;


let holdLists = [];

//constructor/factories

let todoList = [];

const todoConstructor = ({title, date, description, priority, ID}) => {
    return {title, date, description, priority, ID}
}
/*
const holdListsConstructor = (title) => {
    return title;
}

const getHoldListInfo = (event) => {
    const listName = event.target.projectname.value;
} 

const getTodoListInfo = (event) => {
    const title = event.target.item.value;
    const date = event.target.date.value;
    const description = event.target.description.value;
    const priority = event.target.priority.value;
    ID = new Date().toISOString();

    return {title, date, description, priority, ID}
}

function addProjectToList(project) {
    holdLists.push(project);
}


function addItemToList(todoItem) {
    todoList.push(todoItem);
}

function removeItem(ID) {
    todoList = todoList.filter((item) => item.ID !== ID);
}


//generated todoItem Bar

function userSuppliedInfo (todoItem) {
    itemBar = document.createElement('div');
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
        console.log(itemBar.id)
        removeItem(itemBar.id);
        console.log(todoList)
        itemBar.textContent = ''; 
    })
}

/*

//generated project list
function projectInfo (project) {
    sidebarModule = document.createElement('div');
    contentContainer.appendChild(sidebarModule);
    listName = document.createElement('h2');
    sidebarModule.appendChild(listName);
    listName = project.title;
    console.log(listName);
    
    deleteBtn.addEventListener('click', (event) => {
        removeItem(itemBar.id);
        sidebarModule.textContent = ''; 
    })
}*/
/*
const createBtn = document.getElementById('create-btn');
createBtn.addEventListener('click', () => {
    createList();
})



function createList() {
    holdLists.push(todoList);
    todoList = [];
    

    console.log(holdLists);
    console.log(todoList);
    
}

export const create = () => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const todoItem = todoConstructor(getTodoListInfo(event));
        userSuppliedInfo(todoItem);
        addItemToList(todoItem);
        console.log(todoList)
        console.log(itemBar.id)
        
    })

    /*
    projectForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const projectItem = holdListsConstructor(getHoldListInfo(event));
        projectInfo(projectItem);
        addProjectToList(projectItem);
        console.log(holdLists);
        contentContainer.textContent = '';
    })

}




*/ 