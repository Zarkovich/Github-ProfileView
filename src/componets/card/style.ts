import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--background-card);

    border-radius: 5px;

    line-height: 30px;

    margin: 10px 0;
    padding: 10px 20px;

    width: 90vw;
    height: 150px;

    @media screen and (min-width: 1000px) {
        width: 440px;
    }
`;

export const Title = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-size: 2rem;
    font-weight: bold;

    color: var(--font);
`;
