// 35_5-2 Common API Data access related issues

const loadSingleUser = () => {
    fetch('https://randomuser.me/api/')
        .then((res) => res.json())
        .then((data) => displaySingleUser(data.results[0]));
};
loadSingleUser();

const displaySingleUser = (user) => {
    console.log(user);
};

const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayMeals(data.meals));
};

const displayMeals = (meals) => {
    const container = document.getElementById('meals');
    container.textContent = '';
    if (!meals) {
    }
    meals?.forEach((meal) => {
        console.log(meal);
        const div = document.createElement('div');
        div.innerHTML = `
            <h1>${meal.strMeal}</h1>
            <p>${meal.strIngredient18 ? meal.strIngredient18 : ''}</p>
            <button onclick="loadMealDetail('${meal.strMeal}')">click me</button>
        `;
        container.appendChild(div);
    });
    toggleSpinner('none');
    toggleSearchResult('block');
};

loadMeals('fish');
