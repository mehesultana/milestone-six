//33-5 Explore meal db api and create dynamic url to load meals

const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    //console.log(searchText);
    //clear data
    searchField.value = '';
    if (searchText == '') {
        // please write something to display
    } else {
        //load data
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        //console.log(url);
        fetch(url)
            .then((res) => res.json())
            .then((data) => displaySearchReasult(data.meals));
    }
};

//33-6 Display dynamic search result using bootstrap cards
const displaySearchReasult = (meals) => {
    //console.log(meals);
    const searchResult = document.getElementById('search-result');

    // searchResult.innerHTML = '';
    searchResult.textContent = '';
    if (meals.length == 0) {
        // show no result found;
    }

    meals.forEach((meal) => {
        // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    });
};

//33-7 Create dynamic url based on click and display data

const loadMealDetail = (mealId) => {
    console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayMealDetail(data.meals[0]));
};

const displayMealDetail = (meal) => {
    console.log(meal);
    const mealDetails = document.getElementById('meal-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    mealDetails.appendChild(div);
};
