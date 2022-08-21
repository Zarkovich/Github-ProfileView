import { Nav, Link } from "./style";
import Repositories from "../repositories";
import { useState } from "react";
import useGithub from "../../hooks/github-hook";

function TabsRepos() {
    const [local, setLocal] = useState("1");
    const { githubState } = useGithub();

    return (
        <>
            <Nav>
                <Link
                    active={local === "1"}
                    data-key={"1"}
                    onClick={(e) =>
                        e.currentTarget.dataset.key &&
                        setLocal(e.currentTarget.dataset.key)
                    }
                >
                    Repositórios
                </Link>
                <Link
                    active={local === "2"}
                    data-key={"2"}
                    onClick={(e) =>
                        e.currentTarget.dataset.key &&
                        setLocal(e.currentTarget.dataset.key)
                    }
                >
                    Favoritos
                </Link>
            </Nav>
            {local === "1"
                ? githubState &&
                  githubState.repositories.map((item: any, index: number) => (
                      <Repositories
                          key={index}
                          full_name={item.full_name}
                          html_url={item.html_url}
                          language={item.language}
                      />
                  ))
                : githubState &&
                  githubState.starred.map((item: any, index: number) => (
                      <Repositories
                          key={index}
                          full_name={item.full_name}
                          html_url={item.html_url}
                          language={item.language}
                      />
                  ))}
        </>
    );
}

export default TabsRepos;
