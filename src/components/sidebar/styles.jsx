import styled from 'styled-components';

export const Sidebar = styled.aside`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  gap: calc(var(--space-xl) * 3);
  border-right: 1px solid var(--border-color);
  padding: calc(var(--space-xl) * 2) var(--space-xl);
`;
