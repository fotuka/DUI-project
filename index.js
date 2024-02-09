import chalk from "chalk";
import { Task } from "./models.js";

const tasks = [
    new Task(1, 'Сделать первую лабу', true),
    new Task(2, 'Сделать вторую лабу', true),
    new Task(3, 'Сделать третью лабу', false)
] 

PrintTasks();

function PrintTasks()
{
    tasks.forEach((element) => {
        if(element.status === false)
            console.log(chalk.red(element.ToString()))
        else
            console.log(chalk.green(element.ToString()))
    });
}