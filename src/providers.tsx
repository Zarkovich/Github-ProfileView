import App from "./App";
import GithubProvider from "./context/github-provide";
import { GlobalStyle } from "./style/GlobalStyle";

function Providers() {
    return (
        <main>
            <GithubProvider>
                <App />
                <GlobalStyle />
            </GithubProvider>
        </main>
    );
}

export default Providers;
