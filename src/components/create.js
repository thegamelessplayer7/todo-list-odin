// User Interface
const container = document.getElementById('main-container');
const form = document.getElementById('main-form');
let deleteBtn;


//constructor/factories

let todoList = [
    {title: 'bible', date: 'God', description: '', priority: '', ID: ''},
    {title: 'quran', date: 'Allah', description: '', priority: '', ID: ''}
    {title: 'gospel', date: 'Jesus', description: '', priority: '', ID: ''}
  ];

const todoConstructor = ({title, date, description, priority, ID}) => {
    return {title, date, description, priority, ID}
}

const getTodoListInfo = (event) => {
    const title = event.target.item.value;
    const date = event.target.date.value;
    const description = event.target.description.value;
    const priority = event.target.priority.value;
    const ID = new Date().toISOString();

    return {title, date, description, priority, ID}
}



function addItemToList(todoItem) {
    todoList.push(todoItem);
}

function removeItem(id) {
    todoList = todoList.filter(item) => item.id !== id);
    //todoList.splice(todoList.indexOf(item.id), 1)
    //todoList = todoList.filter((todo) => todo.item !== item)
}


//generated todoItem Bar

function userSuppliedInfo (todoItem) {
    const itemBar = document.createElement('div');
    container.appendChild(itemBar);
    itemBar.setAttribute('id', new Date().toISOString());

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
    console.log(itemBar.id)
    itemDate.textContent = todoItem.date;
    itemDescription.textContent = todoItem.description;
    itemPriority.textContent = todoItem.priority;
    deleteBtn.textContent = 'delete';

    deleteBtn.addEventListener('click', (event) => {
        removeItem();
        console.log(todoList)
        //todoList = todoList.filter((item) => itemBar.id !== todoItem.date)
        itemBar.textContent = ''; 
    })
}




export const create = () => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const todoItem = todoConstructor(getTodoListInfo(event));
        addItemToList(todoItem);
        console.log(todoList)
        userSuppliedInfo(todoItem);
    })
}




        


/*export const create = (name, date) => {
    let itemList = [];
    const container = document.getElementById('main-container');
    function Item(name, date) {
        this.name = name;
        this.date = date;
    }

    const createBtn = document.getElementById('create-btn');

    function createItem(item) {
    const form = document.getElementById('main-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const title = event.target.item.value;
        const date = event.target.date.value;

        const todoItem = new Item(title, date)
        itemList.push(todoItem);
        

        const itemBar = document.createElement('div');
        container.appendChild(itemBar);
        //itemBar.setAttribute('data-id', `${itemList.length -1}`);
        //itemBar.dataset.id = itemList.indexOf(name, date)
        console.log(itemBar)
        for (let i = 0; i < itemList.length; i++) {
            itemBar.id = 'itembarid' + i;
        }
        console.log(itemBar.id)
        const itemTitle = document.createElement('h2');
        itemTitle.textContent = title;
        itemBar.appendChild(itemTitle);
        const itemDate = document.createElement('p');
        itemDate.textContent = date;
        itemBar.appendChild(itemDate);
        const deleteBtn = document.createElement('button');
        itemBar.appendChild(deleteBtn);
        deleteBtn.textContent = 'delete';
        deleteBtn.setAttribute('id', 'deleteBtn');
        //console.log(itemList[0].name);
        //console.log(itemBar.dataset.id);
        //console.log(itemList[1] !== itemBar.dataset.id)
        //console.log(itemBar.dataset.id);
        //console.log(itemBar);
        console.log(itemList);

        /*itemList.forEach(element =>
            
            ) 
        
        function removeFromLibrary(element) {
            //itemList.splice(itemBar.dataset.id, 1);
            itemList.splice(itemList.indexOf(item), 1)
            
        }


        // deleteBtn.dataset.id = 
        deleteBtn.addEventListener('click', () => {
            removeFromLibrary()
            itemBar.style.display = 'none';
            //itemList.splice(index, 1);
            //itemList = itemList.filter((item, index) => itemList.name !== itemBar.dataset.id) 
            //itemList = itemList.filter((item, index) => item.id !== item.dataset.id;
            console.log(itemList);
            //for (let i = 0; i < itemList.length; i++) {
                

            //}
            

        })
    
    })
    

       //itemList[i] = (itemBar('[data-user=== `${i}`]'));
                //itemList = itemList.filter((item) => item !== itemBar('[data-user = `${i}`]'))
                //itemList = itemList.filter((item) => item !== itemList[i]) 

           /* for(let i = 0; i < itemList.length; i++) {
            if (itemList[i].name) === event.target.name.value {
                itemList.splice(index, i);
                deleteElement = document.querySelectorAll['[i]']
            }
            }
        )

        
    
        
    

    

    
        }; */

/*

        export const create = (name, date) => {
            let itemList = [];
            
            const container = document.getElementById('main-container');

            function Item(name, date) {
                this.name = name;
                this.date = date;
            }

            


        }


            */