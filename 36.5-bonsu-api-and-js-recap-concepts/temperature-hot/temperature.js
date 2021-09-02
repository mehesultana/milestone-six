const API_KEY = `5e01f3d0d64bf2360b2c6adfc383e0ad`;

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    //console.log(url);

    fetch(url)
        .then((res) => res.json())
        .then((data) => displayTemperature(data));
};

const displayTemperature = (temperature) => {
    console.log(temperature);
};
