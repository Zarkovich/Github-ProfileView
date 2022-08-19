import styled from "styled-components";

export const Container = styled.div`
    margin: auto;
    padding: 5px;

    display: flex;
    flex-wrap: wrap;
    column-gap: 10px;
    align-items: center;
`;

export const Input = styled.input.attrs({ type: "text" })`
    background-color: transparent;
    color: var(--font);

    border: 1px solid var(--font);
    border-radius: 5px;

    font-size: 1rem;

    padding: 2px 5px;

    height: 100%;

    flex: 1;
`;

export const Button = styled.button`
    background-color: var(--button);
    color: var(--font);

    padding: 8px 11px;

    border: none;
    border-radius: 5px;

    cursor: pointer;

    transition: all 0.1s linear;

    &:hover {
        background-color: var(--button_hover);
        color: white;
    }
`;
