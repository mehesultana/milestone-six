// 33-3 International Travel, Display countries name, capital
const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then((res) => res.json())
        .then((data) => displayCountries(data));
};
loadCountries();
const displayCountries = (counties) => {
    // for (const country of counties) {
    //     console.log(country);
    // }
    const countriesDiv = document.getElementById('countries');
    counties.forEach((country) => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick="loadCountryByName('${country.name}')">Details</button>
        `;
        countriesDiv.appendChild(div);
    });
};
