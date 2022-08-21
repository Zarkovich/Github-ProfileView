import styled from "styled-components";

export const Nav = styled.nav`
    width: 100%;

    margin-top: 20px;

    display: flex;

    column-gap: 15px;
`;

export const Link = styled.div<{ active: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${(props) =>
        props.active ? "blueviolet" : "var(--background-card)"};

    color: var(--font);

    width: 120px;
    height: 30px;

    border-radius: 10px 30px;

    cursor: pointer;

    transition: all 0.2s ease-in-out;

    &:hover {
        text-decoration: underline;
    }
`;
