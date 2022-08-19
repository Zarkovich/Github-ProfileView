import { Container, Image, ProfielData } from "./style";
import useGithub from "../../hooks/github-hook";

function Profile() {
    const { githubState } = useGithub();

    return (
        <>
            <Container>
                <Image src={githubState.user.avatar} />
                <ProfielData>
                    <h1>{githubState.user.name}</h1>
                    <a href={githubState.user.html_url} target='_blank'>
                        GitHub
                    </a>
                    <p>
                        Blog:{" "}
                        <a href={githubState.user.blog} target='_blank'>
                            {githubState.user.blog}
                        </a>
                    </p>
                    <p>Localização: {githubState.user.location}</p>
                    <p>
                        Followers: {githubState.user.followers} &nbsp;
                        Following:
                        {githubState.user.following}
                    </p>
                </ProfielData>
            </Container>
        </>
    );
}

export default Profile;
