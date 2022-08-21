import { TypeCard } from "../../@types/types";
import { Container, Title } from "./style";

function Card({ title, link, lenguage }: TypeCard) {
    return (
        <Container>
            <Title>{title}</Title>
            <a href={link} target='_blank'>
                Link repositório
            </a>
            <p>{lenguage}</p>
        </Container>
    );
}

export default Card;
