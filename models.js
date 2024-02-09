export class Task {
    constructor(id, description, status) {
      this.id = id;
      this.description = description;
      this.status = status;
    }

    ToString() {
        return `Задача с id: ${this.id} описание: ${this.description}' статус: ${this.status}`;
    }
}