import { Container, Image, ProfielData, Link } from "./style";
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
                        <Link href={githubState.user.blog} target='_blank'>
                            {githubState.user.blog}
                        </Link>
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
