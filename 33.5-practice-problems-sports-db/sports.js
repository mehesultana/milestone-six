const searchTeam = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    //console.log(searchText);

    searchField.value = '';

    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`;

    //console.log(url);

    fetch(url)
        .then((res) => res.json())
        .then((data) => console.log(data.teams));
};
