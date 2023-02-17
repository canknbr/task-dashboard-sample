import styled from "styled-components";
import { Link } from "react-router-dom";

export const EmptyTasks= styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap:var(--space-xl);

    svg{
        width:72px;
        height:72px;
    }
`;
export const Title = styled.h2`
    font-size: var(--font-xxl);
`;
export const Subtitle = styled.h4`
    font-size: var(--font-xl);
`;
export const Button = styled(Link)`
background-color: var(--green);
color: var(--dark-blue);
padding: var(--space-m) var(--space-xl);
border-radius: var(--space-s);
margin-top: var(--space-xl);
`;