// // TASK: filter only cities which population is greater than 340_000
// let cities = [
//     { name: 'Sofia', population: 1_236_000 },
//     { name: 'Plovdiv', population: 343_424 },
//     { name: 'Burgas', population: 202_766 },
//     { name: 'Varna', population: 335_177 },
// ];

// // YOUR CODE HERE:
// const filtered = cities.filter(city => city.population > 340_000)

// // TEST:
// console.log(filtered);

// TASK: filter only cities which population is greater than 340_000
// let cities = [
//     { name: 'Sofia', population: 1_236_000 },
//     { name: 'Plovdiv', population: 343_424 },
//     { name: 'Burgas', population: 202_766 },
//     { name: 'Varna', population: 335_177 },
// ];

// // const cityNames = cities.map(cities.filter(city => city.population > 340_000))
// const cityNames = cities.filter(city => city.population > 340_000).map(city => city.name);

// console.log(cityNames);


const countries = ['Norway', 'Sweden', 'Denmark', 'New Zealand'];

const startsWithN = countries.filter((country) => country.startsWith("N").split());

console.log(startsWithN);

// Output: [ 'Norway', 'New Zealand' ]