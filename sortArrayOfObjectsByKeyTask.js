// Given is an array of todos objects:
const todos = [
    {
        title: 'Todo1',
        completed: true,
        priority: 'low'
    },
    {
        title: 'Todo2',
        completed: false,
        priority: 'low'
    },
    {
        title: 'Todo3',
        completed: true,
        priority: 'high'
    },
    {
        title: 'Todo4',
        completed: true,
        priority: 'medium'
    },
    {
        title: 'Todo5',
        completed: false,
        priority: 'high'
    },
    {
        title: 'Todo6',
        completed: true,
        priority: 'low'
    },
]

// Task: write a function: sortArrayByKey(arr), which will return a new array in which the elements of todos array will be sorted by key (property) in ascending order.

/* -------------------------- YOUR CODE STARTS HERE ------------------------- */
// todos.sort(function sortArrayByKey(a, b) {
//     return a.priority - b.priority
// })

// function sortArrayByKey(a, b, c) {
//     const newArr = []
//     const priorityHigh = todos.priority
//     const priorityLow = todos.priority
//     const priorityMed = todos.priority
//     if (priorityHigh > priorityLow && priorityMed) {
//         return 2
//     }
//     if (priorityLow > priorityMed) {
//         return 1
//     }
//     return todos.sort()


// }

let arr = new Array
const newArr = [];


// function sortArrayByKey(a, b, c) {


//     for (const element of todos) {

//         newArr.push(element);
//         newArr.sort(

//         );
//     }
// }


function sortArrayByKey(arr) {
    for (const priority in todos) {
        if (Object.hasOwnProperty.call(todos, priority)) {
            const element = todos[priority];
            arr = arr.push(element);

            newArr = arr.sort(function (c1, c2, c3) {
                if (c1.priority > c2.priority && c3.priority) {
                    return 1
                } else {
                    return -1
                }

            })
            // const priorityHigh = arr.priority
            // const priorityLow = arr.priority
            // const priorityMed = arr.priority
            // console.log(priorityHigh, priorityLow, priorityMed);
            // arr.sort(function (priorityHigh, priorityLow, priorityMed, priority) {

            // console.log(priorityHigh.priority);
            // priorityHigh.priority > priorityLow.priority > priorityMed.priority;
            // return arr
            // });
            //  {
            //     if (a === 'high') {
            //         return 1
            //     }
            //     if (b === 'low') {
            //         return 2
            //     }
            //     if (c === 'medium') {
            //         return 3
            //     }
            // }
            // console.log(element);

        }
    }
}

sortArrayByKey(newArr);


/* --------------------------- YOUR CODE ENDS HERE -------------------------- */

// TEST CASE (do not modify):
console.log(sortArrayByKey(todos, 'priority'))

// EXPECTED OUTPUT:
// [
// 	{ title: 'Todo3', completed: true, priority: 'high' },
// 	{ title: 'Todo5', completed: false, priority: 'high' },
// 	{ title: 'Todo1', completed: true, priority: 'low' },
// 	{ title: 'Todo2', completed: false, priority: 'low' },
// 	{ title: 'Todo6', completed: true, priority: 'low' },
// 	{ title: 'Todo4', completed: true, priority: 'medium' }
// ]
