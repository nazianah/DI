// Array of planets
const planets = [
    { name: "Mercury", color: "gray", moons: 0 },
    { name: "Venus", color: "orange", moons: 0 },
    { name: "Earth", color: "blue", moons: 1 },
    { name: "Mars", color: "red", moons: 2 },
    { name: "Jupiter", color: "orange", moons: 79 },
    { name: "Saturn", color: "gold", moons: 83 },
    { name: "Uranus", color: "lightblue", moons: 27 },
    { name: "Neptune", color: "blue", moons: 14 }
];

// Function to create a planet div
function createPlanetDiv(planet) {
    const planetDiv = document.createElement("div");
    planetDiv.className = "planet";
    planetDiv.style.backgroundColor = planet.color;
    planetDiv.textContent = planet.name;
    return planetDiv;
}

// Function to create a moon div
function createMoonDiv() {
    const moonDiv = document.createElement("div");
    moonDiv.className = "moon";
    
    return moonDiv;
}

// Get the listPlanets section
const listPlanets = document.querySelector(".listPlanets");

// Loop through the planets
planets.forEach(planet => {
    const planetDiv = createPlanetDiv(planet);
    listPlanets.appendChild(planetDiv);

    // Add moons if the planet has any
    for (let i = 0; i < planet.moons; i++) {
        const moonDiv = createMoonDiv();
        planetDiv.appendChild(moonDiv);
        moonDiv.textContent = planet.moons;
        // moonDiv.style.marginLeft = i * 25 + "px";
    }
});
