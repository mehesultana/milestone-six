//32-3 Json Placeholder, Get Data, Display Data On UI

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())
        .then((json) => console.log(json));
}

//32-4 Load More Data, More API, Send Data To Function

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => console.log(data));
}

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => console.log(data));
}

function displayUsers(data) {
    console.log(data);
}
