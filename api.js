function loadJSON() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data)) 
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayUsers(data))
}

function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    // .then(data => console.log(data))
}

function displayUsers(data) {
    const ul = document.getElementById('users');
    for (const user of data){
        const li = document.createElement('li');
        li.innerText = `Name: ${user.name}, Email: ${user.email}, Username: ${user.username}`;
        ul.appendChild(li);
    }
}