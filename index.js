import chalk from "chalk";
import { TaskManager } from "./task-manager.js";
import { Task } from "./models.js";

function print(tasks) {
  if (tasks.length > 0)
    tasks.forEach((element) => {
      if (element.status === false) console.log(chalk.red(element.ToString()));
      else console.log(chalk.green(element.ToString()));
    });
  else console.log("Нет задач");
}

const taskManager = new TaskManager("./tasks.json");
console.log("задачи из файла");
print(taskManager.tasks);
taskManager.save();

console.log("добавили задачку");
taskManager.add(new Task(4, "aboba", true));
print(taskManager.tasks);

console.log("убрали");
taskManager.remove(4);
print(taskManager.tasks);
