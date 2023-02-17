import styled from "styled-components";
import { Link } from "react-router-dom";
export const TasksPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-xl);
`;

export const Button = styled(Link)`
    background-color: var(--green);
    color: var(--dark-blue);
    padding: var(--space-m) var(--space-xl);
    border-radius: var(--border-radius-m);
`;

export const TaskList = styled.ul`
display:grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
gap:var(--space-xl);

`;
export const TaskListItem = styled.li``;

export const Task = styled(Link)`
display: flex;
flex-direction: column;
gap:var(--space-l);
background-color: var(--dark-blue);
padding: var(--space-l);
border-radius: var(--border-radius-m);

border-left 2px solid ${({ completed }) => (completed ? "var(--green)" : "var(--red)")};
`;

export const TaskCompleted = styled.p`
    font-size: var(--font-s);
`
export const TaskName = styled.h3``;
export const TaskDescription = styled.p``;