//
const searchTeam = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    //console.log(searchText);

    //clear data
    searchField.value = '';

    // load data
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`;

    //console.log(url);

    fetch(url)
        .then((res) => res.json())
        .then((data) => displaySearchResult(data.teams));
};

const displaySearchResult = (teams) => {
    //console.log(teams);
    const searchResult = document.getElementById('search-result');

    searchResult.textContent = '';

    teams.forEach((team) => {
        //console.log(team);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick='loadTeamDetail(${team.idTeam})' class="card h-100 bg-warning p-2 text-dark bg-opacity-10">
                    <img src="${team.strTeamBadge}" class="card-img-top" alt="..." />
                    <div class="card-body">
                    <h5 class="card-name mt-3">${team.strTeam}</h5>
                    <p class="card-text">${team.strDescriptionEN.slice(0, 150)}</p>
                    </div>
        </div>
        `;
        searchResult.appendChild(div);
    });
};

//
const loadTeamDetail = (teamId) => {
    console.log(teamId);
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${teamId}`;

    fetch(url)
        .then((res) => res.json())
        .then((data) => displayTeamDetails(data.teams[0]));
};

const displayTeamDetails = (team) => {
    console.log(team);
    const teamDetails = document.getElementById('team-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${team.strTeamBadge}" class="card-img-top" alt="${team.strTeam} badge" />
                <div class="card-body">
                    <h5 class="card-title">${team.idTeam}</h5>
                    <p class="card-text">${team.strDescriptionEN.slice(0, 150)}</p>
                    <a href="${team.strTwitter}" class="btn btn-primary">Go somewhere</a>
                </div>
    `;
    teamDetails.appendChild(div);
};
