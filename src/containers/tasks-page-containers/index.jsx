import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { EmptyScreen } from './empty-screen';
import * as S from './styles';
function TasksPageContainer() {
  const data = useLoaderData();

  return (
    <S.TasksPageContainer>
      {!data?.length ? (
        <EmptyScreen />
      ) : (
        <>
          <S.Button to="/tasks/create">Create Task</S.Button>
          <S.TaskList>
            {data.map(task => (
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