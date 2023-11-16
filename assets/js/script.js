const API_KEY = '18c6092d0fdaa22ea532a4fdc07cb74b';

// API URL for getting a places lat & lon coordinates
// Useage example: fetch(`${latLonByCityApiUrl}=${city}&limit=1&appid=${API_KEY}`);
const latLonByCityApiUrl = 'https://api.openweathermap.org/geo/1.0/direct?q';
// API URL for get just todays weather for a location with it's lat and lon coords
// Useage example: fetch(`${dailyApiUrl}lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
const dailyApiUrl = 'https://api.openweathermap.org/data/2.5/weather?';
// API URL to retrieve 5 days forecast in 3 hour steps
// Useage example: fetch(`${fiveDay3StepApiUrl}lat=${lat}&lon=${lon}&appid=${API_KEY}`);
const fiveDay3StepApiUrl = 'https://api.openweathermap.org/data/2.5/forecast?';
// API URL for icons
const iconsUrl = 'https://openweathermap.org/img/wn/';

// Select the DOM
const cityInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const todaysWeather = document.getElementById('current-day');
const todaysTemp = document.getElementById('todays-temp');
const todaysWind = document.getElementById('wind-speed');
const searchlocation = document.getElementById('city');
// DOM elements for display properties
const alertBanner = document.getElementById('alert-banner');
const dataContent = document.getElementById('data-content');
const alertText = document.getElementById('alert-banner-text');
const subscribeLink = document.getElementById('subscribe');
const suggestionsBox = document.getElementById('suggestions');

// Event listener for subscribe feature
subscribeLink.addEventListener('click', () => {
    suggestionsBox.style.display = "flex";
    alertBanner.style.backgroundColor = "#95C623";
    alertText.innerHTML = "<strong>Thanks for subscribing! You can now view suggested activities!</strong>";
});

// Add event listener to the search btn and search input to capture the input and send it to API calls
searchBtn.addEventListener('click', async function () {

    //get the city from the user form
    const city = cityInput.value;


    //get coordinates from api calling function
    const coordinates = await fetchCoordinates(city);

    //get weather with the fetched coord from above in a new call to the api
    fetchWeather(coordinates.lat, coordinates.lon);
    fetch5DayForecast(coordinates.lat, coordinates.lon);

});

cityInput.addEventListener('keydown', async function (e) {
    if (e.key === "Enter") {
        //get the city from the user form
        const city = cityInput.value;


        //get coordinates from api calling function
        const coordinates = await fetchCoordinates(city);

        //get weather with the fetched coord from above in a new call to the api
        if (coordinates) {
            fetchWeather(coordinates.lat, coordinates.lon);
            fetch5DayForecast(coordinates.lat, coordinates.lon);
        } else {
            alert("City not found!");
            location.reload();
        }
    } else {
        return;
    }

});

/**
 * Gets the latitude and longitude of the users location from the search input
 * @param {String} city The city entered in the search box
 * @returns {obj}       The latitude and longitude as an object of key pairs
 */
async function fetchCoordinates(city) {
    const response = await fetch(`${latLonByCityApiUrl}=${city}&limit=1&appid=${API_KEY}`);
    const [data] = await response.json();
    if (data) {

        return { lat: data.lat, lon: data.lon };
    } else {
        // dataContent.innerHTML = `<h1 class="city-error">City not found!</h1>`;
        // dataContent.style.display = "block";
    }

}

/**
 * Makes a call to the open weather API and stores or displays the data
 * @param {number} lat  The latitude
 * @param {number} lon  The longitude
 */
async function fetchWeather(lat, lon) {
    const response = await fetch(`${dailyApiUrl}lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    const data = await response.json();
    //.cod stores the success of the request, 200 means yes
    if (data.cod === 200) {
        // Make the data content show
        dataContent.style.display = "block";
        // Set the current location being searched for in the DOM
        searchlocation.innerHTML = `${data.name}, ${data.sys.country}`;
        // Output todays forecast
        todaysWeather.innerHTML = `
            <img src="${iconsUrl}${data.weather[0].icon}@2x.png" class="current-day-img" alt="image displaying that the weather is ${data.weather[0].description}">
            <p>${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity} %</p>
        `;
        todaysTemp.innerHTML = `
            <img class="current-day-img-small" src="assets/images/thermometer.png" alt="Picture of a thermometer">
            <p>Temperature: ${data.main.temp} C</p>
        `;
        todaysWind.innerHTML = `
            <img class="current-day-img-small" src="assets/images/wind.png">
            <p>Wind speed: ${data.wind.speed} mph</p>
        `;
    } else {
        todaysWeather.innerHTML = "<p>City not found</p>";
        return;
    }
}


async function fetch5DayForecast(lat, lon) {
    const response = await fetch(`${fiveDay3StepApiUrl}lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);

    const data = await response.json();
    if (data.cod === "200") {

        // Create new array with just the 3hrly forecast data
        let weatherArr = data.list;
        // Stores the current date of the first 3hrly block
        let currentDt = new Date(weatherArr[0].dt * 1000);
        // Pulls out the current day of that block
        let currentDay = currentDt.getDay();
        // Empty variable check which day the loop has changed to
        let newDay;
        // Counter for setting each days hourly divs
        let forecastDay = 1;
        // Convert and store the numerical day to normal days
        let dayLabel = getStringDay(currentDay);
        // Set the daily forecast headers
        setForecastHeaders(dayLabel);


        /* Loop iterating through forecast data to check for the
         day changing weatherArr.length*/
        for (i = 0; i < weatherArr.length; i++) {
            // Set the new date to the current forecasts date
            let newDate = new Date(weatherArr[i].dt * 1000);
            // Pull the day out from the date
            newDay = newDate.getDay();
            // Get the time block of the current forecast
            let time = weatherArr[i].dt_txt.slice(11, 16);
            // Store the html to be outputted each loop
            let hourliesHTML = `<p>${time}</p>
                <img src="${iconsUrl}${weatherArr[i].weather[0].icon}@2x.png" class="hour-img" alt="Picture displaying that it is ${weatherArr[i].weather[0].description}">
                <div class="hour-info-box">
                    <img class="small-icon" src="assets/images/thermometer.png" alt="Picture of a thermometer">
                    <p>${weatherArr[i].main.temp} C</p>
                </div>
                <div class="hour-info-box">
                    <img src="./assets/images/wind.png" alt="Picture of the wind blowing" class="small-icon">
                    <p>${weatherArr[i].wind.speed}mph</p> 
                </div>
            `;

            // Checks if each entry is from the same day for processing data into each day
            if (currentDay === newDay) {
                /* Execute code to populate todays hourly forecast divs with the data
                Create to condense the below when finished populateHourlies();*/
                if (time === "00:00") {
                    // Put the forecast in the div for that hour block
                    document.getElementById(`d${forecastDay}-hour1`).innerHTML = hourliesHTML;
                } else if (time === "03:00") {
                    // Put the forecast in the div for that hour block
                    document.getElementById(`d${forecastDay}-hour2`).innerHTML = hourliesHTML;
                } else if (time === "06:00") {
                    // Put the forecast in the div for that hour block
                    document.getElementById(`d${forecastDay}-hour3`).innerHTML = hourliesHTML;
                } else if (time === "09:00") {
                    // Put the forecast in the div for that hour block
                    document.getElementById(`d${forecastDay}-hour4`).innerHTML = hourliesHTML;
                } else if (time === "12:00") {
                    // Put the forecast in the div for that hour block
                    document.getElementById(`d${forecastDay}-hour5`).innerHTML = hourliesHTML;
                } else if (time === "15:00") {
                    // Put the forecast in the div for that hour block
                    document.getElementById(`d${forecastDay}-hour6`).innerHTML = hourliesHTML;
                } else if (time === "18:00") {
                    // Put the forecast in the div for that hour block
                    document.getElementById(`d${forecastDay}-hour7`).innerHTML = hourliesHTML;
                } else if (time === "21:00") {
                    // Put the forecast in the div for that hour block
                    document.getElementById(`d${forecastDay}-hour8`).innerHTML = hourliesHTML;
                }
            } else {
                // Sets the currentDay to the newDay to all for checking for the next day change
                currentDay = newDay;
                // increment the forecast day we're on for div ids
                forecastDay++;
                // Enter the new days first entry
                // Check the html element to write to exists as we get a little data overflow sometimes

                if (document.getElementById(`d${forecastDay}-hour1`)) {

                    document.getElementById(`d${forecastDay}-hour1`).innerHTML = hourliesHTML;
                } else {
                    throw new Error('Too much data');
                    // There's more data than we want so break the loop and stop processing it
                }
            }
        }

    } else {
        return;
    }

}

/**
 * Converts the numerical day into a readable string
 * @param {number} numericalDay  The current day in numerical form
 * @returns {String}             The current day in normal string days
 */
function getStringDay(numericalDay) {
    switch (numericalDay) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
    }
    return day;
}

/**
 * Sets the headers for the daily forecast depending on what the current day is
 * @param {String} dayLabel   The current day
 */
function setForecastHeaders(dayLabel) {

    if (dayLabel === 'Sunday') {
        document.getElementById('accordion-day-2').innerText = 'Monday';
        document.getElementById('accordion-day-3').innerText = 'Tuesday';
        document.getElementById('accordion-day-4').innerText = 'Wednesday';
        document.getElementById('accordion-day-5').innerText = 'Thursday';
    } else if (dayLabel === 'Monday') {
        document.getElementById('accordion-day-2').innerText = 'Tuesday';
        document.getElementById('accordion-day-3').innerText = 'Wednesday';
        document.getElementById('accordion-day-4').innerText = 'Thursday';
        document.getElementById('accordion-day-5').innerText = 'Friday';
    } else if (dayLabel === 'Tuesday') {
        document.getElementById('accordion-day-2').innerText = 'Wednesday';
        document.getElementById('accordion-day-3').innerText = 'Thursday';
        document.getElementById('accordion-day-4').innerText = 'Friday';
        document.getElementById('accordion-day-5').innerText = 'Saturday';
    } else if (dayLabel === 'Wednesday') {
        document.getElementById('accordion-day-2').innerText = 'Thursday';
        document.getElementById('accordion-day-3').innerText = 'Friday';
        document.getElementById('accordion-day-4').innerText = 'Saturday';
        document.getElementById('accordion-day-5').innerText = 'Sunday';
    } else if (dayLabel === 'Thursday') {
        document.getElementById('accordion-day-2').innerText = 'Friday';
        document.getElementById('accordion-day-3').innerText = 'Saturday';
        document.getElementById('accordion-day-4').innerText = 'Sunday';
        document.getElementById('accordion-day-5').innerText = 'Monday';
    } else if (dayLabel === 'Friday') {
        document.getElementById('accordion-day-2').innerText = 'Saturday';
        document.getElementById('accordion-day-3').innerText = 'Sunday';
        document.getElementById('accordion-day-4').innerText = 'Monday';
        document.getElementById('accordion-day-5').innerText = 'Tuesday';
    } else if (dayLabel === 'Saturday') {
        document.getElementById('accordion-day-2').innerText = 'Sunday';
        document.getElementById('accordion-day-3').innerText = 'Monday';
        document.getElementById('accordion-day-4').innerText = 'Tuesday';
        document.getElementById('accordion-day-5').innerText = 'Wednesday';
    }
}