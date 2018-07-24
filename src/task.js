
let allTasks = [];
let taskId = 0;

class Task {
  constructor (description, priority, listTitle) {
    this.description = description;
    this.priority = priority;
    this.listTitle = listTitle;
    this.taskId = ++taskId;
    allTasks.push(this);
  }


  deleteTask() {
    allTasks = allTasks.filter( function(task) {
      return task.taskId !== this.taskId
    }.bind(this))
  }

}


function newTask(description, priority, listTitle) {
  new Task(description, priority, listTitle);
}
