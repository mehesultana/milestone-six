//32-3 Json Placeholder, Get Data, Display Data On UI

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())
        .then((json) => console.log(json));
}
