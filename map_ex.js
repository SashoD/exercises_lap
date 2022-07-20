// const small_caps = ["a", "b", "c"];

// const upper_case = [];
// for (const el of small_caps) {
//   upper_case.push(el.toUpperCase());
// }

// console.log(upper_case);

// const small_caps = ["a", "b", "c"];

// const upper_case = small_caps.map((el) => el.toUpperCase());

// console.log(upper_case);

// const arr_input = [3, 4, 5];
// const arr_output = arr_input.map((el, idx) => el + idx);

// console.log(arr_output);

// const arr_input = [1, 2, 3];
// const arr_output = arr_input.map((el, idx, arr) => {
//   console.log(el, idx, arr);
//   return ;
// });

// let cities = [
//     { name: "Sofia", population: 1_236_000 },
//     { name: "Plovdiv", population: 343_424 },
//     { name: "Burgas", population: 202_766 },
//     { name: "Varna", population: 335_177 },
// ];

// const cityNames = [];
// for (const city of cities) {
//     cityNames.push(city.name);
// }

// console.log(cityNames);

// let cities = [
//     { name: "Sofia", population: 1_236_000 },
//     { name: "Plovdiv", population: 343_424 },
//     { name: "Burgas", population: 202_766 },
//     { name: "Varna", population: 335_177 },
// ];

// const cityNames = cities.map(city => city.name);

// console.log(cityNames);


// const bday = new Date('August 19, 1975 23:15:30');
// const day_name = bday.getDay();

// const day_dict = ['Неделя', 'Понеделник', 'Вторник', 'Сряда'];
// console.log(day_dict[day_name]);

// let dict = {
//     'Sofia': 'София',
//     'Plovdiv': 'Пловдив',
//     'Burgas': 'Бургас',
//     'Varna': 'Варна'
// }
// let cities = [
//     { name: 'Sofia', population: 1_236_000 },
//     { name: 'Plovdiv', population: 343_424 },
//     { name: 'Burgas', population: 202_766 },
//     { name: 'Varna', population: 335_177 },
// ];

// const bgCityNames = cities.map(city => dict[city.name]);

// console.log(bgCityNames);