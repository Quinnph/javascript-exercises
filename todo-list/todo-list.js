let input = prompt("What would you like to do?");
const todoList = [];

while (input !== "quit") {
    if (input === "new") {
        let newTask = prompt("Enter new todo:");
        todoList.push(newTask);
        console.log(newTask + " added to list.");
    }
    else if (input === "list") {
        console.log("**********");
        for (let i = 0; i <= todoList.length; i++) {
            console.log(todoList[i]);
        }
        console.log("**********");
    }
    else if (input === "delete") {
        let indexToDelete = parseInt(prompt("Enter index of todo to delete:"));
        todoList = todoList.splice(indexToDelete, 1);
        console.log("Todo removed.");
    }
    input = prompt("What would you like to do?");
}
console.log("Ok, you quit the app.");