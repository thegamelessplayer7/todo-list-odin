// User Interface
const container = document.getElementById('main-container');
const itemsContainer = document.createElement('div');
container.appendChild(itemsContainer);
const sidebarContainer = document.createElement('div');
container.appendChild(sidebarContainer);
const form = document.getElementById('main-form');
const projectForm = document.getElementById('project-list-form');
let ID;



let todoList = [];

let holdLists = [];

let projectNameList = [];

//constructor/factories


const todoConstructor = ({title, date, description, priority, ID}) => {
    return {title, date, description, priority, ID}
}

const projectNameListConstructor = ({listName, ID}) => {
    return {listName, ID};
}

const getHoldListInfo = (event) => {
    const listName = event.target.projectname.value;
    ID = new Date().toISOString();

    return {listName, ID};
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
    projectNameList.push(project);
}


function addItemToList(todoItem) {
    todoList.push(todoItem);
}

function removeItem(ID) {
    todoList = todoList.filter((item) => item.ID !== ID);
}

function removeProject(ID) {
    projectNameList = projectNameList.filter((project) => project.ID !== ID);
}


//generated todoItem Bar

function userSuppliedInfo (todoItem) {
    const itemBar = document.createElement('div');
    itemsContainer.appendChild(itemBar);
    itemBar.setAttribute('id', ID);

    const itemTitle = document.createElement('h2');
    itemBar.appendChild(itemTitle);

    const itemDate = document.createElement('p');
    itemBar.appendChild(itemDate);

    const itemDescription = document.createElement('p');
    itemBar.appendChild(itemDescription);

    const itemPriority = document.createElement('p');
    itemBar.appendChild(itemPriority);

    const deleteBtn = document.createElement('button');
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



//generated project list
/*

function projectInfo (project) {
    sidebarModule = document.createElement('div');
    contentContainer.appendChild(sidebarModule);
    listName = document.createElement('h2');
    sidebarModule.appendChild(listName);
    listName = project.title;
    console.log(listName);
    
    /*deleteBtn.addEventListener('click', (event) => {
        removeItem(itemBar.id);
        sidebarModule.textContent = ''; 
    })
}*/

const createBtn = document.getElementById('create-btn');
createBtn.addEventListener('click', () => {
    console.log('add project')  
})


/*
projectNameList.push(todoList);
    todoList = [];
    

    console.log(projectNameList);
    console.log(todoList);
    */



function createProjectList(project) {
    
    const sidebarModule = document.createElement('div');
    sidebarContainer.appendChild(sidebarModule);
    sidebarModule.setAttribute('id', ID);

    const listName = document.createElement('h2');
    sidebarModule.appendChild(listName);


    const deleteBtn = document.createElement('button');
    sidebarModule.appendChild(deleteBtn);
    deleteBtn.setAttribute('id', 'deleteBtn');

    listName.textContent = project.listName;
    deleteBtn.textContent = 'delete';
    
    deleteBtn.addEventListener('click', (event) => {
        removeProject(sidebarModule.id);
        console.log(projectNameList);
        sidebarModule.textContent = ''; 
    }) 
    
    listName.addEventListener('click', () => {
        console.log(listName.textContent)
        if(todoList.length === 0) {
            return;
        } else {
            holdLists.push(todoList);
        }
        
        todoList = [];
        itemsContainer.textContent = '';
        console.log(holdLists);
    })
}


export const create = () => { 
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const todoItem = todoConstructor(getTodoListInfo(event));
        console.log(todoItem);
        userSuppliedInfo(todoItem);
        addItemToList(todoItem);
        console.log(todoList)

        
    })

    
    projectForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const projectItem = projectNameListConstructor(getHoldListInfo(event));
        createProjectList(projectItem);
        addProjectToList(projectItem);
        console.log(projectItem)
        console.log(projectNameList);



        // createProjectList(event);
        /*
        
        projectInfo(projectItem);
        
        console.log(projectNameList);
        //itemsContainer.textContent = '';*/
    })

}




