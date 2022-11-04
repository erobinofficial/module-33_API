function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
     .then(data => displayPosts(data))    
}
loadPosts();

function displayPosts(posts){
    const section = document.getElementById('posts');
    for(const post of posts){
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h2>${post.title}</h2>
        <h5>${post.id}</h5>
        <h5>${post.userId}</h5>
        <p>${post.body}</p>
        `;
        section.appendChild(div);
    }
}