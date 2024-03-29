import { readFileSync, writeFileSync } from "fs";
import { Task } from "./models.js";
import { EventEmitter } from 'events';

export class TaskManager extends EventEmitter {
  tasks = [];
  myEmitter = new EventEmitter();
  constructor(jsonPath) {
    super();
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
      this.tasks = JSON.parse(data).map(task => {
        const newTask = new TaskModel(task);
        newTask.save();
        return newTask;
    })
  
    } catch (err) {
      console.log(err);
    }
  }

  save() {
    writeFileSync(this.jsonPath, JSON.stringify(this.tasks));
  }

  add(task) {
    this.tasks.push(task);
    this.myEmitter.emit('taskAdded', task);
  }

  remove(taskid) {
    this.tasks = this.tasks.filter((task) => task.id !== taskid);
    this.myEmitter.emit('taskRemoved', taskid);
  }
}
