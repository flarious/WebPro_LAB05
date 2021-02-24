const todo = document.querySelector("input");
const head_list = document.querySelector("ul");
todo.addEventListener("keypress", addList);

let i = 0;

function addList(input)
{
    if(input.key === "Enter")
    {
        
        const temp_node = document.createElement("li");
        const temp_text = document.createTextNode(" " + todo.value);
        const temp_span = document.createElement("span");
        const temp_icon = document.createElement("i");

        temp_icon.className = "fas fa-trash";
        temp_span.id = "" + i + 0;
        temp_node.id = "" + i + 1;
        i = ++i;

        temp_span.appendChild(temp_icon);
        temp_node.appendChild(temp_span);
        temp_node.appendChild(temp_text);
        
        head_list.appendChild(temp_node);

        todo.value = "";

        const icon = document.getElementById(temp_span.id);
        const text = document.getElementById(temp_node.id);
        icon.addEventListener("click", cancelled);
        text.addEventListener("click", completed);
    }
}

function cancelled()
{
    const todo_remove = event.currentTarget.parentNode;
    todo_remove.parentNode.removeChild(todo_remove);
}

function completed()
{
    const node = event.currentTarget;
    node.classList.add("completed");
}