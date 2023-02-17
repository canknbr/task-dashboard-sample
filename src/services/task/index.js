export const waitFor = async (data, ms) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, ms);
  });
};

export const getTasks = async () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  waitFor(tasks);
};
export const addTask = async task => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  return waitFor(task);
};

export const deleteTask = async id => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const newTasks = tasks.filter(task => task.id !== id);
  localStorage.setItem('tasks', JSON.stringify(newTasks));
  return waitFor(newTasks);
};

export const completedTask = async id => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const task = tasks.find(task => task.id === id);
  task.completed = !task.completed;
  localStorage.setItem('tasks', JSON.stringify(tasks));
  return waitFor(task);
};
export const getTask = async id => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const task = tasks.find(task => task.id === id);
  return waitFor(task);
};

export const updateTask = async updatedTask => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const index = tasks.findIndex(task => task.id === updateTask.id);
  tasks[index] = updateTask;
  localStorage.setItem('tasks', JSON.stringify(tasks));
  return waitFor(updateTask);
};
