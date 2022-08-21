import Layout from "./componets/layout";
import Profile from "./componets/profile";
import useGithub from "./hooks/github-hook";
import TabsRepos from "./componets/TabRepos/index";

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
                                <TabsRepos />
                            </>
                        )}
                    </>
                )}
            </Layout>
        </>
    );
}

export default App;
