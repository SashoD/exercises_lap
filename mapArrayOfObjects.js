/* -------------------------------- THE TASK -------------------------------- */
// Given is an array of objects: todos.
// Your task is to create a new array of objects: newTodos, which maps the values of todos so that a todo.completed value is inverted for given todoID
// Make sure, that the original todos array is not changed!

const todos = [
    {
        "title": "Lean HMTL",
        "completed": true,
        "id": 1
    },
    {
        "title": "Lean React",
        "completed": false,
        "id": 2
    }
];

const todoID = 2;

// const newTodos = todos.map(list => list).filter(list => {
//     if (list.id == todoID) {
//         return newTodos.completed = true
//     }

// })

// PROBLEM WITH undefined!!!

const newTodos = todos.map(list => {
    if (list.id == todoID) {
        return todos.map(list => list).filter(list => list.completed = true)

    }
})
// const newTodos2 = todos.filter(list => list.id == todoID && list.completed == false);


/* ----------------------------- YOUR CODE HERE ----------------------------- */


/* ---------------------------------- TEST ---------------------------------- */
console.log(`Original todos:`, todos);
console.log(`New todos:`, newTodos);


/* ----------------------------- EXPECTED OUTPUT ---------------------------- */
// Original todos: [
//   { title: 'Lean HMTL', completed: true, id: 1 },
//   { title: 'Lean React', completed: false, id: 2 }
// ]
// New todos: [
//   { title: 'Lean HMTL', completed: true, id: 1 },
//   { title: 'Lean React', completed: true, id: 2 }
// ]
