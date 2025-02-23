// data.js
function getData() {
    return [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 28 }
    ];
}

// Exporting the function using CommonJS
module.exports = getData;
