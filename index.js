// We want to talk to an API:
// What is out endpoint
let url = `https://restcountries.eu/rest/v2/name/Malaysia`;

function waitCountryData(response) {
    return response.json();
}

function countriesData(data) {
    let pop = data[0].population;
    console.log(`The population of Malaysia is ${pop}`);
    debugger;
}


fetch(url, { method: "GET" }).then(waitCountryData).then(countriesData);
