import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { EmptyScreen } from './empty-screen';
import * as S from './styles';
function TasksPageContainer() {
  const tasks = useLoaderData();

  return (
    <S.TasksPageContainer>
      {!tasks?.length ? (
        <EmptyScreen />
      ) : (
        <>
  
          <S.Button to="/tasks/create">Create Task</S.Button>
          <S.TaskList>
            {tasks.map(task => (
              <S.TaskListItem key={task.id}>
                <S.Task to={`/tasks/${task.id}`}>
                  <S.TaskCompleted>
                    {task.completed ? '✅ Completed' : '❌ Not Completed'}
                  </S.TaskCompleted>
                  <S.TaskName>{task.name}</S.TaskName>
                  <S.TaskDescription>{task.description}</S.TaskDescription>
                </S.Task>
              </S.TaskListItem>
            ))}
          </S.TaskList>
        </>
      )}
    </S.TasksPageContainer>
  );
}

export { TasksPageContainer };