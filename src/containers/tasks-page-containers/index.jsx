import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { EmptyScreen } from './empty-screen';
import * as S from './styles'
function TasksPageContainer() {
  const data = useLoaderData();
  return (
    <S.TasksPageContainer>
      {!data?.length ? <EmptyScreen /> : <div>Tasks</div>}
    </S.TasksPageContainer>
  );
}

export { TasksPageContainer };