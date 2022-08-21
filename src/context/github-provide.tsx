import { createContext, useState, useCallback } from "react";
import { ChildrenType } from "../@types/types";
import api from "../services/api";

export const GithubContext = createContext<any>({
    loading: false,
    user: {},
    repositories: [],
    starred: [],
});

function GithubProvider({ children }: ChildrenType) {
    const [githubState, setGithubState] = useState({
        hasUser: false,
        loading: false,
        user: {
            id: undefined,
            avatar: undefined,
            login: undefined,
            name: undefined,
            html_url: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0,
        },
        repositories: [],
        starred: [],
    });

    function getUser(username: string) {
        setGithubState((prevState) => ({
            ...prevState,
            loading: !prevState.loading,
        }));

        api.get(`users/${username}`)
            .then(({ data }) => {
                setGithubState((prev) => ({
                    ...prev,
                    hasUser: true,
                    user: {
                        id: data.id,
                        avatar: data.avatar_url,
                        login: data.login,
                        name: data.name,
                        html_url: data.html_url,
                        blog: data.blog,
                        company: data.company,
                        location: data.location,
                        followers: data.followers,
                        following: data.following,
                        public_gists: data.public_gists,
                        public_repos: data.public_repos,
                    },
                }));
            })
            .finally(() => {
                setGithubState((prev) => ({
                    ...prev,
                    loading: !prev.loading,
                }));
            });
    }

    function getUserRepos(username: string) {
        api.get(`users/${username}/repos`).then(({ data }) => {
            setGithubState((prev) => ({
                ...prev,
                repositories: data,
            }));
        });
    }

    function getUserStarred(username: string) {
        api.get(`users/${username}/starred`).then(({ data }) => {
            setGithubState((prev) => ({
                ...prev,
                starred: data,
            }));
        });
    }

    const constexValue = {
        githubState,
        getUser: useCallback((username: string) => getUser(username), []),
        getUserRepos: useCallback(
            (username: string) => getUserRepos(username),
            []
        ),
        getUserStarred: useCallback(
            (username: string) => getUserStarred(username),
            []
        ),
    };

    return (
        <GithubContext.Provider value={constexValue}>
            {children}
        </GithubContext.Provider>
    );
}

export default GithubProvider;
