import React from 'react';

import {getTasks} from '../../services/task'
import { TasksPageContainer } from '../../containers/tasks-page-containers';
function TasksPage() {
  return  <TasksPageContainer/>;
}
export const tasksPageLoader = () => {
  return getTasks();
}

export  {TasksPage};
