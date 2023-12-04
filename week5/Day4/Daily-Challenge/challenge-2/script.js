function getSunrise() {
    const parisLatitude = document.getElementById('parisLatitude').value;
    const parisLongitude = document.getElementById('parisLongitude').value;
    const nyLatitude = document.getElementById('nyLatitude').value;
    const nyLongitude = document.getElementById('nyLongitude').value;

    const apiUrl = (latitude, longitude) => `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&formatted=0`;

    const parisPromise = fetch(apiUrl(parisLatitude, parisLongitude))
        .then(response => response.json())
        .then(data => data.results.sunrise);

    const nyPromise = fetch(apiUrl(nyLatitude, nyLongitude))
        .then(response => response.json())
        .then(data => data.results.sunrise);

    Promise.all([parisPromise, nyPromise])
        .then(([parisSunrise, nySunrise]) => {
            const resultElement = document.getElementById('result');
            resultElement.innerHTML = `
                <p>Sunrise in Paris: ${parisSunrise}</p>
                <p>Sunrise in New York: ${nySunrise}</p>
            `;
        })
        .catch(error => console.error('Error fetching sunrise data:', error));
}