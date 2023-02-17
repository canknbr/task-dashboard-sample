import React from 'react';
import { redirect } from 'react-router-dom';
import { CreateTasksPageContainer } from '../../containers/create-tasks-page-containers';
import { addTask } from '../../services/task';
function CreateTaskPage() {
  return <CreateTasksPageContainer />;
}

export const createTaskPageSubmitAction = async({request}) => {
const formData = await request.formData();
const name = formData.get('task-name');
const description = formData.get('task-description');
const id = Math.random().toString(36).substring(2, 9);
const task = {
  id,
  name,
  description,
  completed : false,
};
await addTask(task);

  return redirect(`/tasks/${id}`)
}

export { CreateTaskPage };
