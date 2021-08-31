const searchTeam = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    //console.log(searchText);

    searchField.value = '';

    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`;

    //console.log(url);

    fetch(url)
        .then((res) => res.json())
        .then((data) => displaySearchResult(data.teams));
};

const displaySearchResult = (teams) => {
    //console.log(teams);
    const searchResult = document.getElementById('search-result');
    teams.forEach((team) => {
        console.log(team);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
                    <img src="${team.strTeamBadge}" class="card-img-top" alt="..." />
                    <div class="card-body">
                    <h5 class="card-name mt-3">${team.strTeam}</h5>
                    <p class="card-text">${team.strDescriptionEN.slice(0, 200)}</p>
                    </div>
        </div>
        `;
        searchResult.appendChild(div);
    });
};
