import { readFileSync, writeFileSync } from "fs";
import { Task } from "./models.js";

export class TaskManager {
  tasks = [];
  constructor(jsonPath) {
    this.jsonPath = jsonPath;
    this.load();
  }

  #transformToTask(tasksArray) {
    return tasksArray.map(
      (task) => new Task(task.id, task.description, task.status)
    );
  }

  load() {
    try {
      const data = readFileSync(this.jsonPath, "utf8");
      this.tasks = this.#transformToTask(JSON.parse(data));
    } catch (err) {
      console.log(err);
    }
  }

  save() {
    writeFileSync(this.jsonPath, JSON.stringify(this.tasks));
  }

  add(task) {
    this.tasks.push(task);
  }

  remove(taskid) {
    this.tasks = this.tasks.filter((task) => task.id !== taskid);
  }
}
