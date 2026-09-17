// ADD YOUR CODE BELOW 

// 1. Start with an array of strings (ex: "grapes", "bread", "tea")
let todoItems = [
    // add more items here
    "grapes", "bread", "tea"
];



// 2. Create variables for each interactive DOM element
const addItemButton = document.getElementById('add-item-button');
// add more variables below
const list = document.getElementById('list');
const sortBtn = document.getElementById('sort')
const clearBtn = document.getElementById('clear')



// 3. Write a function to display all items in the #list element
function updateList() {
    // add your code here
    list.innerHTML = "";
    for (let i = 0; i < todoItems.length; i++)
    {
        const li = document.createElement("li");
        li.textContent = todoItems[i];
        list.appendChild(li);
    }
}

updateList();



// 4. Handle adding a new item when the form is submitted
addItemButton.addEventListener('click', function () {
    // add your code here
    const text = document.getElementById('text');
    if(text.value.trim() !== "")
    {
        todoItems.push(text.value);
        text.value ="";
    }
    updateList();
});




// 5. Sort items alphabetically when sortBtn is clicked
sortBtn.addEventListener("click", () => {
    // add your code here
    todoItems.sort();
    updateList();
});




// 6. Clear all items when clearBtn is clicked
clearBtn.addEventListener("click", () => {
    // add your code here
    todoItems = [];
    updateList()
});