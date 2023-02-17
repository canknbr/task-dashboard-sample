import React from 'react'
import * as S from './styles'
function ProfileButton() {
  return (
    <S.ProfileButton>
      <S.ProfileImage src="https://avatars.githubusercontent.com/u/39174475?v=4" />
      <S.Content>
        <S.Title>
            Can Kanbur
        </S.Title>
        <S.Subtitle>
            @canknbur
        </S.Subtitle>
      </S.Content>
    </S.ProfileButton>
  );
}

export  {ProfileButton}