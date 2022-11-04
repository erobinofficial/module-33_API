function loadUsers2() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers2(data))
}
function displayUsers2(data) {
    const ul = document.getElementById('users2');
    for(const user of data){
        const li = document.createElement('li');
        li.innerText = `Name is ${user.name} and Email is ${user.email} and username is ${user.username}`;
        ul.appendChild(li);
    }
}

function loadPosts2() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}

function displayPosts(data) {
    const ul = document.getElementById('posts');
    for(const post of data){
        const li = document.createElement('li');
        li.innerText = post.body;
        ul.appendChild(li);
    }
}