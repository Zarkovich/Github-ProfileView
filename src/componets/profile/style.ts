import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    column-gap: 10px;

    background-color: var(--background-card);

    padding: 10px;
    margin-top: 10px;

    border-radius: 5px;

    flex-basis: 100%;
`;

export const Image = styled.img`
    width: 100px;
    height: 100px;

    border-radius: 50%;

    object-fit: cover;
`;

export const ProfielData = styled.div`
    color: var(--font);

    line-height: 1.6rem;
`;
