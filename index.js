

function newTask(title, decription) {
  const task = {
    title: title,
    decription: decription,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`); 
    },

    markComplete : function() {
      task.complete = true;
    }
  };
  return task;
}

// DRIVER CODE BELOW
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(task1); // Clean Cat Litter has not been completed
task1.markComplete(task1);
task1.logState(task1); // Clean Cat Litter has been completed

console.log(tasks);