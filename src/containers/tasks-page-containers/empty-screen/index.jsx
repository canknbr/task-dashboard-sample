import React from 'react'
import * as S from './styles'
import {VscEmptyWindow} from 'react-icons/vsc'
function EmptyScreen() {
  return (
    <S.EmptyTasks>
        <VscEmptyWindow />
        <S.Title>
            You don't have any tasks yet
        </S.Title>
        <S.Subtitle>
            Click the button below to create your first task
        </S.Subtitle>
        <S.Button to="/tasks/create">Create Task</S.Button>
    </S.EmptyTasks>
  )
}

export  {EmptyScreen}