import React from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './styles';
import { NAVIGATION_MENU } from './constans';
function NavigationMenu() {
  return (
    <S.NavigationMenu>
      {NAVIGATION_MENU.map(item => {
        return (
          <S.NavigationItem key={item.id} to={item.href}>
            <S.IconWrapper>{item.icon}</S.IconWrapper>
            <S.Title>{item.title}</S.Title>
          </S.NavigationItem>
        );
      })}
    </S.NavigationMenu>
  );
}

export { NavigationMenu };
