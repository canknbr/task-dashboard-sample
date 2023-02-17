import React from 'react'
import * as S from './styles'
import { Form } from 'react-router-dom';
function CreateTasksPageContainer() {
  return (
    <S.CreateTasksPageContainer>
      <Form method='post'> 
        <input type="text" name='task-name' placeholder='Task Name' />
        <textarea name='task-description' placeholder='Task Description' />
        <button type='submit'>Create Task</button>
      </Form>
    </S.CreateTasksPageContainer>
  );
}

export { CreateTasksPageContainer };