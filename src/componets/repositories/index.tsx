import { Container } from "./style";
import Card from "../card";

function Repositories(objeto: {
    language: string;
    html_url: string;
    full_name: string;
}) {
    return (
        <Container>
            <Card
                lenguage={objeto.language}
                link={objeto.html_url}
                title={objeto.full_name}
            />
        </Container>
    );
}

export default Repositories;
