import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    column-gap: 10px;

    background-color: var(--background-card);

    padding: 10px;
    margin-top: 10px;

    border-radius: 5px;

    width: 100%;
`;

export const Image = styled.img`
    width: 100px;
    height: 100px;

    border-radius: 50%;

    object-fit: cover;
`;

export const Link = styled.a`
    display: inline-block;

    max-width: 90%;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const ProfielData = styled.div`
    color: var(--font);

    line-height: 1.6rem;
`;
