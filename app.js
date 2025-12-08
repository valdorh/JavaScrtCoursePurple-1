const roles = ["admin", "user", "superuser", "guest", "editor"];

const tasks = ["Задача 1"];

function AddTask(task) {
  tasks.push(task);
}

function RemoveTaskByName(taskName) {
  const index = tasks.indexOf(taskName);
  if (index === -1) {
    return;
  }
  return tasks.splice(index, 1);
}

function Prioritase(tasckName) {
  const result = RemoveTaskByName(tasckName);
  if (result) {
    tasks.unshift(result[0]);
  }
}

AddTask("Задача 2");
AddTask("Задача 3");
AddTask("Задача 4");
console.log(tasks);

console.log(RemoveTaskByName("Задача 2"));
console.log(tasks);

Prioritase("Задача 3");
console.log(tasks);
