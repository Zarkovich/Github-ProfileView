import { ChildrenType } from "../../@types/types";
import { Container, Button, Input } from "./style";
import useGithub from "../../hooks/github-hook";
import { useRef } from "react";

function Layout({ children }: ChildrenType) {
    const { getUser, getUserRepos, getUserStarred } = useGithub();
    const inputRef = useRef<HTMLInputElement | null>(null);

    function setUser() {
        if (!inputRef.current) return;

        getUser(inputRef.current.value);
        getUserRepos(inputRef.current.value);
        getUserStarred(inputRef.current.value);
    }

    return (
        <>
            <Container>
                <Input
                    ref={inputRef}
                    placeholder='Digite o nome de um Usuário'
                    onKeyUp={(e) => e.key === "Enter" && setUser()}
                />
                <Button onClick={setUser}>Procurar</Button>
                {children}
            </Container>
        </>
    );
}

export default Layout;
