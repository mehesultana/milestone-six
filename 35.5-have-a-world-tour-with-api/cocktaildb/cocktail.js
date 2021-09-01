//API-(Search cocktail by name) https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
const errorDiv = document.getElementById('error');
const searchDrink = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    //console.log(searchText);

    //clear data
    searchField.value = '';
    if (searchText == '') {
        errorDiv.innerText = 'Search field cannot be empty.';
    } else {
        //load data
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`;

        //console.log(url);
        fetch(url)
            .then((res) => res.json())
            .then((data) => displaySearchResult(data.drinks));
    }
};

const displaySearchResult = (drinks) => {
    //console.log(drinks);
    const searchResult = document.getElementById('search-result');

    searchResult.textContent = '';

    drinks.forEach((drink) => {
        //console.log(drink);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadDrinkDetail(${drink.idDrink})" class="card h-100">
                    <img src="${drink.strDrinkThumb}" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">${drink.strDrink}</h5>
                        <p class="card-text">${drink.strInstructions.slice(0, 150)}</p>
                    </div>
                </div>
        `;
        searchResult.appendChild(div);
    });
};

const loadDrinkDetail = (drinkId) => {
    //console.log(drinkId);
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;

    fetch(url)
        .then((res) => res.json())
        .then((data) => displayDrinkDetails(data.drinks[0]));
};

const displayDrinkDetails = (drink) => {
    //console.log(drink);
    const drinkDetails = document.getElementById('drink-details');

    drinkDetails.textContent = '';

    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${drink.strDrinkThumb}" class="card-img-top " alt="..." />
                <div class="card-body">
                    <h5 class="card-title">${drink.strDrink}</h5>
                    <p class="card-text">${drink.strInstructions.slice(0, 150)}</p>
                    <a href="${drink.strVideo}" class="btn btn-warning text-dark bg-opacity-10">See Instructions</a>
                </div>
    `;
    drinkDetails.appendChild(div);
};
