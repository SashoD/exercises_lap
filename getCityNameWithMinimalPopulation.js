// TASK: getCityNameWithMinimalPopulation
// Implement findMinPopulationCityName function, so that it will return the
// name of the city with minimum population

const cities = [
    { name: 'Sofia', population: 1_236_000 },
    { name: 'Plovdiv', population: 343_424 },
    { name: 'Burgas', population: 202_766 },
    { name: 'Varna', population: 335_177 },
];

function findMinPopulationCityName(cities) {
    // console.log(minCityName2);
    // let minCityName = Math.min(...(cities.map((city) => city.population)))
    let minpopulation = Math.min(...cities.map(city => city.population));
    let minCityName = cities.filter(city => city.population == minpopulation).map(city => city.name);
    // YOUR CODE HERE
    return minCityName
}

// TEST:
const minCityName = findMinPopulationCityName(cities);
console.log(minCityName);

// EXPECTED OUTPUT:
// 'Burgas'
