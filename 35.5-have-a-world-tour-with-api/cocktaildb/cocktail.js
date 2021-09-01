//API-(Search cocktail by name) https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

const searchDrink = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    //console.log(searchText);
    searchField.value = '';
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`;

    //console.log(url);
    fetch(url)
        .then((res) => res.json())
        .then((data) => displaySearchResult(data.drinks));
};

const displaySearchResult = (drinks) => {
    //console.log(drinks);
    const searchResult = document.getElementById('search-result');
    drinks.forEach((drink) => {
        console.log(drink);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
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
