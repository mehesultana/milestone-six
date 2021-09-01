//API-(Search cocktail by name) https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

const searchCocktail = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    //console.log(searchText);
    searchField.value = '';
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`;

    //console.log(url);
    fetch(url)
        .then((res) => res.json())
        .then((data) => console.log(data.drinks));
};
