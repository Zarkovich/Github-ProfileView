import Layout from "./componets/layout";
import Profile from "./componets/profile";
import useGithub from "./hooks/github-hook";

function App() {
    const { githubState } = useGithub();

    return (
        <>
            <Layout>
                {githubState.hasUser && (
                    <>
                        {githubState.loading ? (
                            <p>Carregando...</p>
                        ) : (
                            <>
                                <Profile />
                            </>
                        )}
                    </>
                )}
            </Layout>
        </>
    );
}

export default App;
