import styled from "styled-components";

export const ProfileButton = styled.button`
display: flex;
align-items: center;
gap:var(--space-m);
font-size:var(--font-m);
`;

export const ProfileImage = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
`;

export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
font-size:var(--font-s);
`
export const Title = styled.p`
font-weight: 700;
`
export const Subtitle = styled.p`
    font-size: var(--font-xs);
    color: var(--gray);
`

