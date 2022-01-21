const theinput = document.getElementById('input')
const add = document.getElementById('add')
const content = document.getElementById('content')
const done = document.getElementById('done')
const delette = document.getElementById('delete')
const edit = document.getElementById('edit')

add.addEventListener("click", addfunction)
done.addEventListener("click", donefunction)
delette.addEventListener("click", deletefunction)
// edit.addEventListener('click', editfunction)


function addfunction()
{
    const theinput = document.getElementById('input').value;

    let para = document.createElement('p')
    para.textContent = theinput
    content.appendChild(para)
    document.getElementById('input').value="";
}

function donefunction(){
    content.style.textDecoration="line-through"
}

function deletefunction(){
    delette.parentNode.removeChild(content)
}

// function editfunction(){

// }