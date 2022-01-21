export const create = (name, date) => {
    let itemList = [];
    const container = document.getElementById('main-container');
    function Item(name, date) {
        this.name = name;
        this.date = date;
    }

    const createBtn = document.getElementById('create-btn');

    const form = document.getElementById('main-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const title = event.target.item.value;
        const date = event.target.date.value;

        const todoItem = new Item(title, date)
        itemList.push(todoItem);
        

        const itemBar = document.createElement('div');
        container.appendChild(itemBar);
        itemBar.setAttribute('data-id', `${itemList.length -1}`)
        const itemTitle = document.createElement('h2');
        itemTitle.textContent = title;
        itemBar.appendChild(itemTitle);
        const itemDate = document.createElement('p');
        itemDate.textContent = date;
        itemBar.appendChild(itemDate);
        const deleteBtn = document.createElement('button');
        itemBar.appendChild(deleteBtn);
        deleteBtn.textContent = 'delete';
        console.log(itemList[0].name);
        console.log(itemBar.dataset.id);
        console.log(itemList[1] !== itemBar.dataset.id)
        //console.log(itemBar.dataset.id);
        //console.log(itemBar);
        




        deleteBtn.addEventListener('click', () => {
            itemBar.style.display = 'none';
            itemList = itemList.filter((item, index) => itemList.name !== itemBar.dataset.id) 
            //console.log(itemList);
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
        )*/

        
    
        
    

    

    
        };